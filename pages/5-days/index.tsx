import { lng } from "@/assets/translations";
import useTranslation from "@/hooks/useTranslation";
import Heading from "components/ui/Heading";

export default function Tomorrow() {
  const t = useTranslation();

  return <Heading>{t(lng.fiveDaysTitle)}</Heading>;
}
