import React from "react";

const dsaQuestions = {
  title: "Top 40 Most-Asked DSA Questions to Crack Your Next Interview",
  description:
    "If you're preparing for a technical interview, mastering Data Structures and Algorithms (DSA) is crucial. To help you ace your preparation, here are 40 commonly asked DSA questions. Dive in and test your problem-solving skills!",
  sections: [
    {
      title: "Arrays and Strings",
      questions: [
        "Find the maximum sum subarray.",
        "Find all substrings that are palindromes.",
        "Implement the 'two sum' problem.",
        "Implement Kadane's algorithm for maximum subarray sum.",
        "Find the missing number in an array of integers.",
        "Merge two sorted arrays into one sorted array.",
        "Check if a string is a palindrome.",
        "Find the first non-repeating character in a string.",
        "Write a program to remove duplicates from a sorted array.",
      ],
    },
    {
      title: "Linked Lists",
      questions: [
        "Reverse a linked list.",
        "Detect a cycle in a linked list.",
        "Find the middle of a linked list.",
        "Merge two sorted linked lists.",
        "Implement a stack using a linked list.",
        "Find the intersection point of two linked lists.",
      ],
    },
    {
      title: "Stacks and Queues",
      questions: [
        "Implement a stack using an array.",
        "Implement a stack that supports push, pop, top, and retrieving the minimum element.",
        "Implement a circular queue.",
        "Design a max stack that supports push, pop, top, and retrieve maximum element.",
        "Design a queue using stacks.",
      ],
    },
    {
      title: "Trees and Binary Search Trees",
      questions: [
        "Find the height of a binary tree.",
        "Find the lowest common ancestor of two nodes in a binary tree.",
        "Validate if a binary tree is a valid binary search tree.",
        "Serialize and deserialize a binary tree.",
        "Implement an inorder traversal of a binary tree.",
        "Find the diameter of a binary tree.",
        "Convert a binary tree to its mirror tree.",
      ],
    },
    {
      title: "Graphs",
      questions: [
        "Implement depth-first search (DFS).",
        "Implement breadth-first search (BFS).",
        "Find the shortest path between two nodes in an unweighted graph.",
        "Detect a cycle in an undirected graph using DFS.",
        "Check if a graph is bipartite.",
        "Find the number of connected components in an undirected graph.",
        "Find bridges in a graph.",
      ],
    },
    {
      title: "Sorting and Searching",
      questions: [
        "Implement bubble, insertion, selection, and merge sort.",
        "Implement quicksort.",
        "Implement binary search.",
        "Implement interpolation search.",
        "Find the kth smallest element in an array.",
        "Count the number of inversions in an array.",
      ],
    },
  ],
};

const DSAQuestions = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
        {dsaQuestions.title}
      </h1>
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {dsaQuestions.description}
      </p>
      {dsaQuestions.sections.map((section, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            {section.title}
          </h2>
          <ol className="list-decimal ml-8 space-y-2">
            {section.questions.map((question, qIndex) => (
              <li
                key={qIndex}
                className="flex items-center space-x-3 text-lg leading-6 text-gray-700"
              >
                <input
                  type="checkbox"
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 rounded border-gray-300"
                />
                <span className="hover:text-blue-600 transition duration-150 ease-in-out">
                  {question}
                </span>
              </li>
            ))}
          </ol>
        </div>
      ))}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        What’s Next?
      </h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        Next week, we’ll dive into <strong>Dynamic Programming (DP)</strong>,{" "}
        <strong>Backtracking</strong>, <strong>Hashing</strong>,{" "}
        <strong>Heap</strong>, <strong>Tries</strong>, and{" "}
        <strong>Greedy Algorithms</strong> with 40 more questions to boost your
        DSA mastery. Stay tuned!
      </p>
    </div>
  );
};

export default DSAQuestions;
