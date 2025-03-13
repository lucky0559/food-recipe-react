import { useDisclosure } from "@mantine/hooks";
import { Drawer, Burger } from "@mantine/core";
import { Link } from "react-router-dom";

export const DrawerMenu = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const menu = ["home", "about", "recipes", "contact"];

  return (
    <div className="absolute left-6">
      <Drawer opened={opened} onClose={close}>
        <div className="flex flex-col">
          {menu.map(m => (
            <Link
              to={`${m === "home" ? "/" : m}`}
              className="p-3 hover:bg-amber-50"
              onClick={close}
            >
              <span>{m.toUpperCase()}</span>
            </Link>
          ))}
        </div>
      </Drawer>
      <Burger opened={opened} onClick={open} />
    </div>
  );
};
