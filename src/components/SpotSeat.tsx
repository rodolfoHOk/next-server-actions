export type SpotSeatProps = {
  spotId: string;
  spotLabel: string;
  reserve: boolean;
  disabled: boolean;
};

export const SpotSeat = ({
  spotId,
  spotLabel,
  reserve,
  disabled,
}: SpotSeatProps) => {
  return (
    <div className="flex">
      <input
        type="checkbox"
        name={`spots`}
        id={`spot-${spotId}`}
        className="peer hidden"
        value={spotId}
        disabled={disabled}
        defaultChecked={reserve}
      />

      <label
        htmlFor={`spot-${spotId}`}
        className="m-1 md:m-2 h-6 md:h-9 w-6 md:w-9 cursor-pointer select-none rounded-full bg-[#00A96E] flex items-center justify-center text-[10px] md:text-sm text-black peer-checked:bg-[#7480FF] peer-disabled:cursor-default peer-disabled:bg-[#A6ADBB]"
      >
        {spotLabel}
      </label>
    </div>
  );
};
