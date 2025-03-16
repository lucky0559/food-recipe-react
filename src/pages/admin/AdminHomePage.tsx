import { Button, FileButton } from "@/components/common";
import { Drumstick } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import { Fieldset, Modal, TagsInput, TextInput } from "@mantine/core";
import { useCallback, useState } from "react";
import { ProceduresSetter, RecipeSetter } from "@/components/AdminHomePage";
import { category as categoryLists } from "@/lib";

export const AdminHomePage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedRecipe, { open: openRecipe, close: closeRecipes }] =
    useDisclosure(false);
  const [openedProcedures, { open: openProcedures, close: closeProcedures }] =
    useDisclosure(false);
  const [file, setFile] = useState<File | null>(null);
  const [recipes, setRecipes] = useState<string[]>([]);
  const [recipe, setRecipe] = useState("");
  const [procedures, setProcedures] = useState<string[]>([]);
  const [procedure, setProcedure] = useState("");
  const [error, setError] = useState("");
  const [category, setCategory] = useState<string[]>([]);

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

  const addProcedure = useCallback(() => {
    if (procedures.includes(procedure.toUpperCase())) {
      return setError("This recipe exists!");
    }
    setProcedures([...procedures, procedure.toUpperCase()]);
    setProcedure("");
    setError("");
  }, [procedure, procedures]);

  const onModalCloseRecipe = useCallback(() => {
    closeRecipes();
    setRecipe("");
  }, [closeRecipes]);

  const onModalCloseProcedure = useCallback(() => {
    closeProcedures();
    setRecipe("");
  }, [closeProcedures]);

  const onRemoveRecipe = useCallback((val: string) => {
    setRecipes(prevItems => prevItems.filter(i => i !== val));
  }, []);

  const onRemoveProcedure = useCallback((val: string) => {
    setProcedures(prevItems => prevItems.filter(i => i !== val));
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
          <div className="mt-4 flex items-center">
            <ProceduresSetter
              error={error}
              setProcedure={e => setProcedure(e)}
              procedures={procedures}
              procedure={procedure}
              opened={openedProcedures}
              onRemove={onRemoveProcedure}
              onModalClose={onModalCloseProcedure}
              addProcedure={addProcedure}
            />
            <div className="mr-3">
              <span>Procedures: </span>
            </div>
            <span className="underline text-sm" onClick={openProcedures}>
              Edit Procedures
            </span>
          </div>
          <TagsInput
            data={categoryLists}
            label="Category(Press Enter to submit a tag)"
            placeholder="Enter tag"
            className="mt-4"
            onChange={e => setCategory(e)}
          />
        </Fieldset>
      </Modal>
      <Button text="Add Menu" Icon={Drumstick} onClick={open} />
    </div>
  );
};
