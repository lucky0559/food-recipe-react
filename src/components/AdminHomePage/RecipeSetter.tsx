import { Button } from "@/components/common";
import { Modal, TextInput } from "@mantine/core";

type RecipeSetterType = {
  opened: boolean;
  onModalClose: () => void;
  recipe: string;
  recipes: string[];
  onRemove: (val: string) => void;
  setRecipe: (val: string) => void;
  error?: string;
  addRecipe: () => void;
};

export const RecipeSetter = ({
  opened,
  error,
  setRecipe,
  recipes,
  recipe,
  onRemove,
  onModalClose,
  addRecipe
}: RecipeSetterType) => {
  return (
    <Modal opened={opened} onClose={onModalClose} title="Edit Recipe">
      {recipes.map((r, index) => (
        <div key={r}>
          <TextInput
            label={`Recipe ${index + 1}`}
            placeholder={`Recipe ${index + 1}`}
            defaultValue={r}
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
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
      <div className="flex justify-end">
        <Button
          text="Add recipe"
          onClick={addRecipe}
          isDisable={!recipe.length}
        />
      </div>
    </Modal>
  );
};
