export async function getProfileBanner() {
    try {
        // a proprietade revalidate diminui a quantidade de solicitacoes | cache
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/6687e16c328da0e2573f9cfa?read_key=${process.env.READ_KEY}&depth=1&props=metadata`, { next: { revalidate: 120 } });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (err) {
        throw new Error('Failed to fetch data');
    }
}