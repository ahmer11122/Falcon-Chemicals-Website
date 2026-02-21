import React from "react";

export const JsonLd = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        name: "Falcon Chemical Construction",
        image: "https://falconchemicals.com/opengraph-image.png", // Replace with actual image URL
        description:
            "Premium chemical construction solutions in Pakistan. Specialists in roof waterproofing, heat proofing, and termite control.",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Ghauri town phase 5",
            addressLocality: "Islamabad",
            addressRegion: "Islamabad Capital Territory",
            postalCode: "44000",
            addressCountry: "PK",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 33.6844, // Approximate coordinates for Islamabad
            longitude: 73.0479,
        },
        url: "https://falconchemicals.com",
        telephone: "+923206377227",
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00",
            },
        ],
        priceRange: "$$",
        sameAs: [
            "https://www.facebook.com/share/p/1aSR3wV1ow/",
            "https://wa.me/923206377227",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};
