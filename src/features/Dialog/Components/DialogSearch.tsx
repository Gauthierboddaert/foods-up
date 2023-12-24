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


interface DialogSearchProps {
  button: React.ReactNode;
  children?: React.ReactNode;
  handleModalStatus?: () => void;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogSearch = ({
  button,
  children,
  isOpen,
  setIsOpen,
}: DialogSearchProps) => {
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

  return (
    <>
      <button type="button" ref={refs.setReference} {...getReferenceProps()}>
        {button}
      </button>
      {isOpen && (
        <FloatingOverlay
          lockScroll
          style={{
            background: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(3px)",
          }}
        >
          <FloatingFocusManager context={context}>
            <div
              ref={refs.setFloating}
              {...getFloatingProps()}
            >
              {children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </>
  );
};

export default DialogSearch;
