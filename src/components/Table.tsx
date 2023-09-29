import React, { ElementType } from "react";

export type TableStructure = {
  tableComponent?: ElementType;
  theadComponent?: ElementType;
  tbodyComponent?: ElementType;

  thead?: {
    tr?: ElementType;
    trstructure?: {
      globalTh?: ElementType;
      targetTh?: Record<string, ElementType>;
    };
  };

  tbody?: {
    tr?: ElementType;
    trstructure?: {
      globalTd?: ElementType;
      targetTd?: Record<string, ElementType>;
    };
  };
};

export type TableProps = {
  tableProps?: Record<string, any>;
  theadProps?: Record<string, any>;
  tbodyProps?: Record<string, any>;

  thead?: {
    tr?: Record<string, any>;
    trstructure?: Record<string, Record<string, any>>;
  };

  tbody?: {
    tr?: Record<string, any>;
    trstructure?: Record<string, Record<string, any>>;
  };
};

type Props = {
  tableStructure?: TableStructure;

  tableProps?: TableProps;

  tableData: any[];

  notID?: boolean;
};

const TableDefault = ({
  children,
  ...rest
}: {
  children: any;
  [x: string]: any;
}): JSX.Element => {
  return <table {...rest}>{children}</table>;
};
const TheadDefault = ({
  children,
  ...rest
}: {
  children: any;
  [x: string]: any;
}): JSX.Element => {
  return <thead {...rest}>{children}</thead>;
};
const TbodyDefault = ({
  children,
  ...rest
}: {
  children: any;
  [x: string]: any;
}): JSX.Element => {
  return <tbody {...rest}>{children}</tbody>;
};
const TrDefault = ({
  children,
  ...rest
}: {
  children: any;
  [x: string]: any;
}): JSX.Element => {
  return <tr {...rest}>{children}</tr>;
};
const TdDefault = ({
  children,
  ...rest
}: {
  children: any;
  [x: string]: any;
}): JSX.Element => {
  return <td {...rest}>{children}</td>;
};
const ThDefault = ({
  children,
  ...rest
}: {
  children: any;
  [x: string]: any;
}): JSX.Element => {
  return <th {...rest}>{children}</th>;
};

const structureDefault = {
  tableComponent: TableDefault,
  theadComponent: TheadDefault,
  tbodyComponent: TbodyDefault,

  thead: {
    tr: TrDefault,
    trstructure: ThDefault,
  },

  tbody: {
    tr: TrDefault,
    trstructure: TdDefault,
  },
};

const Table = ({
  tableStructure = {},
  tableData = [],
  notID,
  tableProps = {},
}: Props): JSX.Element => {
  const TableStructure = { ...structureDefault, ...tableStructure };
  const TheadComponent = { ...structureDefault.thead, ...tableStructure.thead };
  const TbodyComponent = { ...structureDefault.tbody, ...tableStructure.tbody };

  return (
    <TableStructure.tableComponent {...tableProps.tableProps}>
      <TableStructure.theadComponent {...tableProps.theadProps}>
        <TheadComponent.tr {...tableProps.thead?.tr}>
          {Object.entries(tableData[0]).map(([title, value], index) => {
            const TheadTh = {
              trstructure: Object.assign(
                {
                  [title]: tableStructure.thead?.trstructure?.globalTh
                    ? tableStructure.thead?.trstructure?.globalTh
                    : structureDefault.thead.trstructure,
                },
                { ...tableStructure.thead?.trstructure?.targetTh }
              )[title],
            };

            const tdProps = Object.assign(
              {},
              { ...tableProps.thead?.trstructure }
            )[title];

            if (notID && title.toLowerCase() === "id") {
              return null;
            }

            return (
              <TheadTh.trstructure
                key={title}
                colSpan={typeof value === "object" ? (value as []).length : 1}
                {...tdProps}
              >
                {title}
              </TheadTh.trstructure>
            );
          })}
        </TheadComponent.tr>
      </TableStructure.theadComponent>

      <TableStructure.tbodyComponent {...tableProps.tbodyProps}>
        {tableData.map((value, index) => {
          return (
            <TbodyComponent.tr
              key={`${value.id}_${index}`}
              {...tableProps.tbody?.tr}
            >
              {Object.entries(value).map(([title, value]) => {
                const TbodyTd = {
                  trstructure: Object.assign(
                    {
                      [title]: tableStructure.tbody?.trstructure?.globalTd
                        ? tableStructure.tbody?.trstructure?.globalTd
                        : structureDefault.tbody.trstructure,
                    },
                    { ...tableStructure.tbody?.trstructure?.targetTd }
                  )[title],
                };

                const tdProps = Object.assign(
                  {},
                  { ...tableProps.tbody?.trstructure }
                )[title];

                if (notID && title.toLowerCase() === "id") {
                  return null;
                }

                if (
                  typeof value === "object" &&
                  TbodyComponent.trstructure ===
                    structureDefault.tbody.trstructure
                ) {
                  return (value as [])?.map((value, index) => {
                    return (
                      <TbodyTd.trstructure
                        key={`${title}_${value}_${index}`}
                        {...tdProps}
                      >
                        {value}
                      </TbodyTd.trstructure>
                    );
                  });
                }

                return (
                  <TbodyTd.trstructure key={`${title}_${value}`} {...tdProps}>
                    {value}
                  </TbodyTd.trstructure>
                );
              })}
            </TbodyComponent.tr>
          );
        })}
      </TableStructure.tbodyComponent>
    </TableStructure.tableComponent>
  );
};

export default Table;
