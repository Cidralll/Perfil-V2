export async function getPosts() {
    try {
        // a proprietade revalidate diminui a quantidade de solicitacoes | cache
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22posts%22%7D&limit=10&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`, { next: { revalidate: 120 } });
        
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (err) {
        throw new Error('Failed to fetch data');
    }
}