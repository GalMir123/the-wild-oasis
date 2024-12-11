import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be loaded");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  // Check if the image is already a URL (meaning it's stored) to avoid re-upload
  const hasImagePath =
    typeof newCabin.image === "string" &&
    newCabin.image.startsWith(supabaseUrl);
  console.log(newCabin.image);

  // Generate unique image name if it's a new file
  const imageName = hasImagePath
    ? null
    : `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Start database query for creating/editing cabin
  let query = supabase.from("cabins");

  // Upload new image if necessary
  let storageError = null;
  if (!hasImagePath && newCabin.image) {
    const uploadResult = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);
    storageError = uploadResult.error;

    // If there was an error uploading, handle it
    if (storageError) {
      console.error(storageError);
      throw new Error(
        "cabin image could not be uploaded and the cabin was not created"
      );
    }
  }

  // Insert new cabin or update existing cabin with imagePath set appropriately
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  } else {
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  // Execute query and handle response
  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("cabin could not be created");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("cabin could not be deleted");
  }
}
