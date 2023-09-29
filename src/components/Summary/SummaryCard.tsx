import { Card } from "../../styles/components/summary";

import { ReactComponent as InCome } from "../../assets/svg/summary/income.svg";
import { ReactComponent as OutCome } from "../../assets/svg/summary/outcome.svg";
import { ReactComponent as Total } from "../../assets/svg/summary/total.svg";

const typeList: Record<
  "income" | "outcome" | "total",
  [
    string,
    React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >
  ]
> = {
  income: ["Entradas", InCome],
  outcome: ["Saídas", OutCome],
  total: ["Total", Total],
};

interface SummaryCardProps {
  type: keyof typeof typeList;
  value: number;
}

const SummaryCard = ({ type, value }: SummaryCardProps): JSX.Element => {
  const Icon = typeList[type][1];

  return (
    <Card total={type === "total"}>
      <header>
        <span>{typeList[type][0]}</span>
        <Icon />
      </header>
      <strong>
        {type === "outcome" && "-"}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(value)}
      </strong>
    </Card>
  );
};

export default SummaryCard;
