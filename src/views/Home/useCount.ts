import { reactive } from 'vue'
type DataTypes = {
  name: String,
  age: Number
};

type CountResultProps = {
  data: DataTypes;
  change: (delta?: number) => void;
};

export default function useCount(eventFun: Function): CountResultProps {
  let data = reactive<DataTypes>({
    name: "默认的名字",
    age: 18
  })

  const change = (): void => {
    eventFun()
  };

  return {
    data,
    change,
  };
}