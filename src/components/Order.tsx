import React from 'react';
import { HStack, Text } from 'native-base';

export type OrderProps = {
    id: string;
    patrimony: string;
    when: string;
    status: 'open' | 'closed'
}

type Props = {
    data: OrderProps;
}

export function Order({ data, ...rest }: Props) {
  return (
    <HStack>
        <Text color='white' fontSize='md'>
            Patrimonio {data.patrimony}
        </Text>
    </HStack>
  );
}