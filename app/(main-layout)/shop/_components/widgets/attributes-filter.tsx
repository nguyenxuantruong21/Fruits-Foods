import attributeData from "@/app/data/attribute_filter.json";
import { Fragment, useEffect, useState } from "react";
import CheckboxItem from "./checkbox-item";
import { Minus, Plus } from "lucide-react";

type Attribute = {
  id: number;
  name: string;
  values: {
    id: number;
    value: string;
  }[];
};

const AttributeFilter = () => {
  const [attributes, setAttributes] = useState<Attribute[]>([]);
  const [attributeValueStatus, setAttributeValueStatus] = useState<
    { id: number; status: boolean }[]
  >([]);

  const handleToggleValue = (attributeId: number) => {
    const attributeStatusClone = JSON.parse(
      JSON.stringify(attributeValueStatus)
    );
    const result = attributeStatusClone.find(
      (item: { id: number }) => item.id === attributeId
    );
    result.status = !result.status;
    setAttributeValueStatus(attributeStatusClone);
  };

  useEffect(() => {
    setAttributes(attributeData);
    setAttributeValueStatus(
      attributeData.map((attribute: Attribute) => {
        return { id: attribute.id, status: true };
      })
    );
  }, []);

  return (
    <div className="mb-5 flex flex-col">
      {attributes.map((attribute: Attribute) => {
        const isShow = attributeValueStatus.find(
          (item: { id: number; status: boolean }) =>
            item.id === attribute.id && item.status
        );
        return (
          <Fragment key={attribute.id}>
            <h3 className="text-[2.4rem] font-[600] flex justify-between items-center">
              {attribute.name}
              <span
                className="block"
                onClick={() => handleToggleValue(attribute.id)}
              >
                {isShow ? (
                  <Minus size={16} className="cursor-pointer" />
                ) : (
                  <Plus size={16} className="cursor-pointer" />
                )}
              </span>
            </h3>
            <div className="mt-5 mb-5 flex flex-col gap-5">
              {isShow &&
                attribute.values.map((item) => (
                  <CheckboxItem
                    value={item}
                    key={item.id}
                    attribute={attribute.id.toString()}
                  />
                ))}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default AttributeFilter;
