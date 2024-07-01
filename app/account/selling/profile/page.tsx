import { HeadingAndSubheading } from "@/components/admin/heading-and-subheading";
import { EditStoreFields } from "@/components/admin/edit-store-fields";
import { db } from "@/db/db";
import { stores } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { updateStore } from "@/server-actions/store";
import { isEmpty } from "@/lib/checker";

export default async function SellerProfile() {
  const user = await currentUser();

  const storeDetails = await db
    .select()
    .from(stores)
    .where(eq(stores.id, Number(user?.privateMetadata?.storeId)))
    .limit(1)
    .catch((err) => {
      console.log(err);
      return null;
    });

  return (
    <>
      <HeadingAndSubheading
        heading="Selling profile"
        subheading="Review and update your store settings"
      />
      {storeDetails && !isEmpty(storeDetails) && (
        <EditStoreFields
          storeDetails={storeDetails[0]}
          updateStore={updateStore}
        />
      )}
    </>
  );
}
