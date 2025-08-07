export default async function Reviewpage({
    params
}: {
    params: Promise<{ productId: string , reviewId: string }>;
}) {
    const productId  = (await params).productId;
    const reviewId = (await params).reviewId;
    return (
        <>
        <h1>Product  = {productId}</h1>
        <h1>Review = {reviewId}</h1>
        </>
    );
}