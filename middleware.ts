import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/collection(.*)",
    "/product(.*)",
    "/quickview(.*)",
    "/cart(.*)",
    "/products(.*)",
    "/auth(.*)",
    "/checkout(.*)",
    "/api/stripe/(.*)",
    "/api/uploadthing",
  ],
});
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};
