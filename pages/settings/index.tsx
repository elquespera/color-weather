import Icon from "components/ui/Icon";
import Switch from "components/Switch";
import { useContext } from "react";
import AppContext from "context/AppContext";
import ListItem from "components/ui/ListItem";

export default function Settings() {
  const { units, setUnits, themeMode, setThemeMode } = useContext(AppContext);

  function handleUnits(checked: boolean) {
    setUnits(checked ? "imperial" : "metric");
  }

  function handleThemeMode(checked: boolean) {
    setThemeMode(checked ? "dark" : "light");
  }

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl text-primary-dark">Settings</h2>
      <div className="flex flex-col">
        <ListItem
          highlight={units === "imperial"}
          onClick={() => handleUnits(units === "metric")}
        >
          <div>Measurement units</div>
          <div>
            <Switch
              checked={units === "imperial"}
              uncheckedDecoration="C°"
              checkedDecoration="F°"
              onChange={handleUnits}
            />
          </div>
        </ListItem>
        <ListItem
          highlight={themeMode === "dark"}
          onClick={() => handleThemeMode(themeMode === "light")}
        >
          <div>Dark mode</div>
          <div>
            <Switch
              checked={themeMode === "dark"}
              uncheckedDecoration={<Icon type="sunny" size="small" />}
              checkedDecoration={<Icon type="moon" size="small" />}
              onChange={handleThemeMode}
            />
          </div>
        </ListItem>
        <ListItem>
          <div>Language</div>
          <div>Ru En Es</div>
        </ListItem>
      </div>
    </div>
  );
}
