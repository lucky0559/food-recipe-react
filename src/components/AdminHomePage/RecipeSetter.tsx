import { Button } from "@/components/common";
import { Modal, TextInput } from "@mantine/core";
import { useState } from "react";

type RecipeSetterType = {
  opened: boolean;
  onModalClose: () => void;
  recipes: string[];
  onRemove: (val: string) => void;
  addRecipe: (v: string) => void;
};

export const RecipeSetter = ({
  opened,
  recipes,
  onRemove,
  onModalClose,
  addRecipe
}: RecipeSetterType) => {
  const [recipe, setRecipe] = useState("");

  const onAdd = () => {
    addRecipe(recipe);
    setRecipe("");
  };

  return (
    <Modal opened={opened} onClose={onModalClose} title="Edit Recipe">
      {recipes.map((r, index) => (
        <div key={r}>
          <TextInput
            label={`Recipe ${index + 1}`}
            placeholder={`Recipe ${index + 1}`}
            defaultValue={r}
            name={`recipes[${index + 1}]`}
            disabled
          />
          <div className="flex my-2 justify-end" onClick={() => onRemove(r)}>
            <span className="text-xs underline">Remove</span>
          </div>
        </div>
      ))}
      <TextInput
        label={`Recipe ${recipes.length + 1}`}
        placeholder={`Recipe ${recipes.length + 1}`}
        onChange={e => setRecipe(e.target.value)}
        value={recipe}
        className="mb-5"
        name={`recipes[${recipes.length}]`}
      />
      {/* {error && <span className="text-xs text-red-600">{error}</span>} */}
      <div className="flex justify-end">
        <Button text="Add recipe" onClick={onAdd} isDisable={!recipe.length} />
      </div>
    </Modal>
  );
};
