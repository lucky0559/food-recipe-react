import { Button } from "@/components/common";
import { Modal, Textarea } from "@mantine/core";

type ProceduresSetterType = {
  opened: boolean;
  onModalClose: () => void;
  procedure: string;
  procedures: string[];
  onRemove: (val: string) => void;
  setProcedure: (val: string) => void;
  error?: string;
  addProcedure: () => void;
};

export const ProceduresSetter = ({
  opened,
  error,
  setProcedure,
  procedures,
  procedure,
  onRemove,
  onModalClose,
  addProcedure
}: ProceduresSetterType) => {
  return (
    <Modal opened={opened} onClose={onModalClose} title="Edit Recipe">
      {procedures.map((r, index) => (
        <div key={r}>
          <Textarea
            label={`Procedure ${index + 1}`}
            placeholder={`Procedure ${index + 1}`}
            defaultValue={r}
          />
          <div className="flex my-2 justify-end" onClick={() => onRemove(r)}>
            <span className="text-xs underline">Remove</span>
          </div>
        </div>
      ))}
      <Textarea
        label={`Procedure ${procedures.length + 1}`}
        placeholder={`Procedure ${procedures.length + 1}`}
        onChange={e => setProcedure(e.target.value)}
        value={procedure}
        className="mb-5"
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
      <div className="flex justify-end">
        <Button
          text="Add recipe"
          onClick={addProcedure}
          isDisable={!procedure.length}
        />
      </div>
    </Modal>
  );
};
