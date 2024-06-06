import { useState } from "react";
import { Container, VStack, HStack, Text, Button, Input, Box, IconButton, Image, Badge, Flex, Spacer, Avatar, Textarea } from "@chakra-ui/react";
import { FaChalkboardTeacher, FaUserGraduate, FaStar, FaDollarSign } from "react-icons/fa";

const workshops = [
  { id: 1, title: "Introduction to Cooking", instructor: "Chef John", rating: 4.5, price: 20, image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY2xhc3N8ZW58MHx8fHwxNzE3NjQxOTEzfDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, title: "Learn Guitar Basics", instructor: "Jane Doe", rating: 4.8, price: 15, image: "https://images.unsplash.com/photo-1520167112707-56e25f2d7d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxndWl0YXIlMjBjbGFzc3xlbnwwfHx8fDE3MTc2NDE5MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, title: "Beginner's Guide to Python", instructor: "Alex Smith", rating: 4.7, price: 25, image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBjbGFzc3xlbnwwfHx8fDE3MTc2NDE5MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [search, setSearch] = useState("");
  const [feedback, setFeedback] = useState("");
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);
  const handleWorkshopSelect = (workshop) => setSelectedWorkshop(workshop);

  const filteredWorkshops = workshops.filter((workshop) => workshop.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6}>
        <Text fontSize="4xl" fontWeight="bold">
          SkillShare Connect
        </Text>
        <Text fontSize="lg">Share your skills and knowledge with others. Join or host workshops today!</Text>
        <HStack spacing={4}>
          <Input placeholder="Search for workshops..." value={search} onChange={handleSearchChange} />
          <Button colorScheme="teal" leftIcon={<FaChalkboardTeacher />}>
            Host a Workshop
          </Button>
        </HStack>
        <VStack spacing={4} w="full">
          {filteredWorkshops.map((workshop) => (
            <Box key={workshop.id} borderWidth="1px" borderRadius="lg" overflow="hidden" w="full" onClick={() => handleWorkshopSelect(workshop)} cursor="pointer">
              <HStack>
                <Image src={workshop.image} alt={workshop.title} boxSize="150px" objectFit="cover" />
                <VStack align="start" p={4} spacing={2}>
                  <Text fontSize="2xl" fontWeight="bold">
                    {workshop.title}
                  </Text>
                  <Text>Instructor: {workshop.instructor}</Text>
                  <HStack>
                    <FaStar color="gold" />
                    <Text>{workshop.rating}</Text>
                  </HStack>
                  <HStack>
                    <FaDollarSign />
                    <Text>{workshop.price}</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
        {selectedWorkshop && (
          <Box borderWidth="1px" borderRadius="lg" p={4} w="full">
            <Flex>
              <Avatar name={selectedWorkshop.instructor} src="https://images.unsplash.com/photo-1642903642741-4374811a84aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnN0cnVjdG9yJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE3NjQxOTE1fDA&ixlib=rb-4.0.3&q=80&w=1080" />
              <VStack align="start" ml={4}>
                <Text fontSize="2xl" fontWeight="bold">
                  {selectedWorkshop.title}
                </Text>
                <Text>Instructor: {selectedWorkshop.instructor}</Text>
                <HStack>
                  <FaStar color="gold" />
                  <Text>{selectedWorkshop.rating}</Text>
                </HStack>
                <HStack>
                  <FaDollarSign />
                  <Text>{selectedWorkshop.price}</Text>
                </HStack>
              </VStack>
              <Spacer />
              <Button colorScheme="teal">Join Workshop</Button>
            </Flex>
            <Box mt={4}>
              <Text fontSize="lg" fontWeight="bold">
                Leave Feedback
              </Text>
              <Textarea placeholder="Write your feedback here..." value={feedback} onChange={handleFeedbackChange} />
              <Button mt={2} colorScheme="teal">
                Submit Feedback
              </Button>
            </Box>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
