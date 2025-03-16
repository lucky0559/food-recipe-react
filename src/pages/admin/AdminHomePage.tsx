import { Button, FileButton } from "@/components/common";
import { Drumstick } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import { Fieldset, Modal, TextInput } from "@mantine/core";
import { useCallback, useState } from "react";
import { RecipeSetter } from "@/components/AdminHomePage";

export const AdminHomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedRecipe, { open: openRecipe, close: closeRecipe }] =
    useDisclosure(false);
  const [file, setFile] = useState<File | null>(null);
  const [recipes, setRecipes] = useState<string[]>([]);
  const [recipe, setRecipe] = useState("");
  const [error, setError] = useState("");

  const onModalClose = useCallback(() => {
    close();
    setFile(null);
  }, [close]);

  const addRecipe = useCallback(() => {
    if (recipes.includes(recipe.toUpperCase())) {
      return setError("This recipe exists!");
    }
    setRecipes([...recipes, recipe.toUpperCase()]);
    setRecipe("");
    setError("");
  }, [recipe, recipes]);

  const onModalCloseRecipe = useCallback(() => {
    closeRecipe();
    setRecipe("");
  }, [closeRecipe]);

  const onRemoveRecipe = useCallback((val: string) => {
    setRecipes(prevItems => prevItems.filter(i => i !== val));
  }, []);

  return (
    <div className="p-10">
      <Modal
        opened={opened}
        onClose={onModalClose}
        title="Add Menu"
        className="font-ubuntu"
      >
        <Fieldset legend="Menu information">
          <TextInput label="Name" placeholder="Name" />
          <div className="flex items-center mt-4">
            <span>Image: </span>
            <FileButton file={file} setFile={setFile} />
          </div>
          <TextInput label="Description" placeholder="Description" mt="md" />
          <div className="mt-4 flex items-center">
            <RecipeSetter
              error={error}
              setRecipe={e => setRecipe(e)}
              recipes={recipes}
              recipe={recipe}
              opened={openedRecipe}
              onRemove={onRemoveRecipe}
              onModalClose={onModalCloseRecipe}
              addRecipe={addRecipe}
            />
            <div className="mr-3">
              <span>Recipe: </span>
            </div>
            <span className="underline text-sm" onClick={openRecipe}>
              Edit Recipe
            </span>
          </div>
          <TextInput label="Procedures" placeholder="Procedures" mt="md" />
          <TextInput label="Category" placeholder="Category" mt="md" />
        </Fieldset>
      </Modal>
      <Button text="Add Menu" Icon={Drumstick} onClick={open} />
    </div>
  );
};
