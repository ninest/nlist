import { useFieldArray, useForm } from "react-hook-form";
import {
  FaPlus,
  FaMinus,
  FaChevronRight,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { HighlightButton, TextButton } from "./components/buttons";

function App() {
  const { control, register, handleSubmit, watch } = useForm({
    defaultValues: {
      nest: [
        {
          level: 0,
          value: "",
          description: "",
        },
      ],
    },
  });
  const { fields, append, insert, remove, move } = useFieldArray({
    control,
    name: "nest",
  });

  const onSubmit = () => {};

  return (
    <main className="p-10">
      <h1 className="text-4xl font-black mb-base">Nest list</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => {
          return (
            <div key={field.id} style={{ marginLeft: `${field.level}rem` }}>
              <div className="mb-base">
                <div>
                  <input
                  placeholder="Title"
                    type="text"
                    {...register(`nest.${index}.value` as const)}
                    defaultValue={field.value}
                  />
                </div>

                <div className="mt-sm">
                  <input
                  placeholder="Description"
                    type="text"
                    {...register(`nest.${index}.description` as const)}
                    defaultValue={field.description}
                  />
                </div>

                <div className="mt-sm flex items-center justify-between">
                  <div className="flex items-center space-x-base">
                    <HighlightButton
                      primary
                      onClick={() => {
                        const itemAbove = fields[index];
                        insert(index + 1, {
                          level: itemAbove.level + 1,
                        });
                      }}
                    >
                      <FaPlus></FaPlus>
                    </HighlightButton>
                    <HighlightButton
                      danger
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      <FaMinus></FaMinus>
                    </HighlightButton>

                    {/* {index !== 0 && (
                      <HighlightButton onClick={() => {
                        console.log(fields[index])
                      }}>
                        <FaChevronRight></FaChevronRight>
                      </HighlightButton>
                    )} */}
                  </div>
                  <div className="flex items-center space-x-base">
                    {index !== 0 && (
                      <HighlightButton
                        onClick={() => {
                          move(index, index - 1);
                        }}
                      >
                        <FaChevronUp></FaChevronUp>
                      </HighlightButton>
                    )}
                    {index !== fields.length - 1 && (
                      <HighlightButton
                        onClick={() => {
                          move(index, index + 1);
                        }}
                      >
                        <FaChevronDown></FaChevronDown>
                      </HighlightButton>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <HighlightButton
          primary
          className="flex items-center space-x-sm"
          onClick={() => {
            append({ level: 0, value: "", description: "" });
          }}
        >
          <FaPlus></FaPlus>
          <div>Top level item</div>
        </HighlightButton>
      </form>

      {/* <pre className="mt-xl p-base rounded-md bg-gray-900 text-gray-50 font-mono overflow-x-scroll">
        {JSON.stringify(watch(), null, 2)}
      </pre> */}
    </main>
  );
}

export default App;
