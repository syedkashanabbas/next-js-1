export default async function Docspage({
    params,
}: {
    params: Promise<{ slug: string[] }>;
}) {
    const { slug } = await params;
    if (slug?.length === 2) { 
            return (
        <div>Viewing Docs for Feature  {slug[0]} and concept {slug[1]} </div>
    );
    }else if (slug?.length === 1) {
        return (
            <div>Viewing Docs for Feature {slug[0]} </div>
        );
    }
    else {
        return (
            <div>Viewing Docs</div>
        );
    }

}