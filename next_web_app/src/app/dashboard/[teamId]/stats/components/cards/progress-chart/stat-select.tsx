import { Select, SelectContent, SelectValue, SelectTrigger, SelectItem } from "@/components/ui/select";
import { HeartIcon, UserPlusIcon, ViewIcon } from "lucide-react";

const stats = [
  {
    value: "views",
    name: "Visningar",
    icon: ViewIcon
  },
  {
    value: "likes",
    name: "Likes",
    icon: HeartIcon
  },
  {
    value: "followers",
    name: "Följare",
    icon: UserPlusIcon
  }
]

const StatSelect = ({
  stat,
  setStat
}: {
  stat: string;
  setStat: (stat: string) => void;
}) => {
  return (
    <Select value={stat} onValueChange={setStat}>
        <SelectTrigger className="w-auto min-w-[150px] cursor-pointer">
          <SelectValue placeholder="Välj statistik" />
        </SelectTrigger>
        <SelectContent>
          {stats.map((s) => (
            <SelectItem key={s.value} value={s.value}>
              {s.icon && <s.icon className="w-4 h-4" />}
              {s.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
  );
};

export default StatSelect;

