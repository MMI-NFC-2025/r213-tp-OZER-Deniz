import PocketBase from 'pocketbase';

const db = new PocketBase("http://127.0.0.1:8090");

export async function getOffres() {
    try {
        console.log("Tentative de connexion à PocketBase...");
        let data = await db.collection('maison').getFullList({
            sort: '-created',
        });
        console.log("Données récupérées:", data);
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des maisons:', error);
        return [];
    }
}

export async function getImageUrl(record, recordImage) {
    return db.files.getURL(record, recordImage);
}