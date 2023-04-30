import {Circle, Center} from '.';

export const RadioButtonSelect = props => {
  const {isSelected} = props;
  return (
    <Circle
      size={22}
      borderRole={isSelected ? 'success' : 'tertiary'}
      lineWidth="light">
      <Center flex={1}>
        {isSelected && (
          <Circle
            size={12}
            borderRole="success"
            backgroundRole="success"
            lineWidth="medium"
          />
        )}
      </Center>
    </Circle>
  );
};
