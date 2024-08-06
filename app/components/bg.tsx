import React from "react";

export function GridBackgroundDemo() {
  return (
    <div className="fixed inset-0 bg-black dark:bg-black">
      {/* Grid background */}
      <div 
        className="absolute inset-0 bg-black dark:bg-black"
        style={{
          backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDEyIDEyIj4KICA8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxMiIgZmlsbD0iI2Q0ZDRkNCIvPgogIDxyZWN0IHdpZHRoPSIxMiIgaGVpZ2h0PSIxIiBmaWxsPSIjZDRkNGQ0Ii8+Cjwvc3ZnPg==)'
        }}
      ></div>
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute inset-0 flex items-center justify-center bg-black dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
