import prisma from '@/app/libs/prismadb';

import getCurrentUser from './getCurrentUser';

export default async function getFavoriteListings() {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return [];
        }

        const favorite = await prisma.listing.findMany({
            where: {
                id: {
                    in: [...(currentUser.favoriteIds || [])]
                }
            }
        });

        const safeFavorites = favorite.map((favorite) => ({
            ...favorite,
            createdAt: favorite.createdAt.toISOString(),
        }));
        
        return safeFavorites;

    } catch (error: any) {
        throw new Error(error);
    }
}