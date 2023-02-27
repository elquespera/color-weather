import Icon from "components/ui/Icon";
import Switch from "components/Switch";

export default function FiveDays() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl text-primary-dark">Settings</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>Measurement units</div>
        <div>
          <Switch checked uncheckedDecoration="C°" checkedDecoration="F°" />
        </div>
        <div>Dark mode</div>
        <div>
          <Switch
            uncheckedDecoration={<Icon type="sunny" size="small" />}
            checkedDecoration={<Icon type="moon" size="small" />}
          />
        </div>
        <div>Language</div>
        <div>Ru En Es</div>
      </div>
    </div>
  );
}
