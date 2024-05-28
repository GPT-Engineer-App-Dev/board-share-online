import { Box, Container, VStack, HStack, Text, Input, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = () => {
    if (newPost.trim() !== "") {
      setPosts([...posts, newPost]);
      setNewPost("");
    }
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={4} borderRadius="md">
        <Heading size="md">Public Post Board</Heading>
        <Spacer />
      </Flex>

      <VStack spacing={4} align="stretch">
        {posts.length === 0 ? (
          <Text>No posts yet. Be the first to post!</Text>
        ) : (
          posts.map((post, index) => (
            <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Text>{post}</Text>
            </Box>
          ))
        )}
      </VStack>

      <Box mt={8} p={4} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading size="md" mb={4}>Create a new post</Heading>
        <HStack>
          <Input
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <Button colorScheme="blue" onClick={handlePostSubmit}>Post</Button>
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;