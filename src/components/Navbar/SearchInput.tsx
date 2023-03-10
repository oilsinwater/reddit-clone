import { PhoneIcon, CheckIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement, InputRightElement, Stack } from '@chakra-ui/react';
import React from 'react';

type SearchInputProps = {
  // user:
};

const SearchInput: React.FC<SearchInputProps> = () => {
  return (
    <Flex>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<PhoneIcon color="gray.300" />}
          />
          <Input type="tel" placeholder="Phone number" />
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="$"
          />
          <Input placeholder="Enter amount" />
          <InputRightElement children={<CheckIcon color="green.500" />} />
        </InputGroup>
      </Stack>
    </Flex>
  );
};
export default SearchInput;
