import {
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useId,
  useFloating,
  FloatingOverlay,
  FloatingFocusManager,
} from "@floating-ui/react";
import { useState } from "react";
import CardFilterModal from "../../search/components/CardFilterModal";

interface DialogSearchProps {
  button: React.ReactNode;
}

const DialogSearch = ({ button }: DialogSearchProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalStatus = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePressEvent: "mousedown",
  });
  const role = useRole(context);

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  // Set up label and description ids
  const labelId = useId();
  const descriptionId = useId();

  return (
    <>
      <button ref={refs.setReference} {...getReferenceProps()}>
        {button}
      </button>
      {isOpen && (
        <FloatingOverlay
          lockScroll
          style={{
            background: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(3px)",
          }}
        >
          <FloatingFocusManager context={context}>
            <div
              ref={refs.setFloating}
              aria-labelledby={labelId}
              aria-describedby={descriptionId}
              {...getFloatingProps()}
            >
              <CardFilterModal
                handleModalStatus={handleModalStatus}
                displayFilter={isOpen}
              />
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </>
  );
};

export default DialogSearch;
