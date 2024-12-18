import Collection from "@interfaces/Collection";

const collections: Collection[] = [
  {
    id: "1",
    name: "Users",
    requests: [
      {
        id: "1",
        name: "Get User Details",
        url: "https://api.example.com/users/{id}",
        protocol: "GET",
      },
      {
        id: "2",
        name: "Create User",
        url: "https://api.example.com/users",
        protocol: "POST",
      },
    ],
  },
  {
    id: "2",
    name: "Products",
    requests: [
      {
        id: "1",
        name: "Get Product List",
        url: "https://api.example.com/products",
        protocol: "GET",
      },
      {
        id: "2",
        name: "Update Product",
        url: "https://api.example.com/products/{id}",
        protocol: "PUT",
      },
    ],
  },
  {
    id: "3",
    name: "Orders",
    requests: [
      {
        id: "1",
        name: "Create Order",
        url: "https://api.example.com/orders",
        protocol: "POST",
      },
      {
        id: "2",
        name: "Cancel Order",
        url: "https://api.example.com/orders/{id}",
        protocol: "DELETE",
      },
    ],
  },
];

export default function useCollections() {
  return { collections };
}
