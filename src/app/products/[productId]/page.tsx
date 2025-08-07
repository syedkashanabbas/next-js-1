export default async function Page({
    params
}: {
    params: Promise<{ productId: string }>;
}) {
    const productId  = (await params).productId;
    return (
        <h1>Product Description about {productId}</h1>
    );
}