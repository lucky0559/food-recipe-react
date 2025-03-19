import { Button } from "@/components/common";
import { Modal, Textarea } from "@mantine/core";
import { useState } from "react";

type ProceduresSetterType = {
  opened: boolean;
  onModalClose: () => void;
  procedures: string[];
  onRemove: (val: string) => void;
  addProcedure: (v: string) => void;
};

export const ProceduresSetter = ({
  opened,
  procedures,
  onRemove,
  onModalClose,
  addProcedure
}: ProceduresSetterType) => {
  const [procedure, setProcedure] = useState("");

  const onAdd = () => {
    addProcedure(procedure);
    setProcedure("");
  };

  return (
    <Modal opened={opened} onClose={onModalClose} title="Edit Recipe">
      {procedures.map((r, index) => (
        <div key={r}>
          <Textarea
            label={`Procedure ${index + 1}`}
            placeholder={`Procedure ${index + 1}`}
            defaultValue={r}
            name={`procedures[${index + 1}]`}
            disabled
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
        name={`procedure[${procedures.length}]`}
      />
      {/* {error && <span className="text-xs text-red-600">{error}</span>} */}
      <div className="flex justify-end">
        <Button
          text="Add recipe"
          onClick={onAdd}
          isDisable={!procedure.length}
        />
      </div>
    </Modal>
  );
};
