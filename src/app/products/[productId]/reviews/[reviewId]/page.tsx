export default async function Reviewpage({
    params
}: {
    params: Promise<{ productId: string , reviewId: string }>;
}) {
    const productId  = (await params).productId;
    const reviewId = (await params).reviewId;
    return (
        <h1>Product  {productId} and Review {reviewId}</h1>
    );
}