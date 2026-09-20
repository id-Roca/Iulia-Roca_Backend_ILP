import prisma from "../src/prisma.js";

async function main() {
  const acme = await prisma.company.create({
    data: {
      name: "Acme Corp",
      industry: "Technology",
    },
  });
  const stark = await prisma.company.create({
    data: {
      name: "Stark Industries",
      industry: "Defense",
    },
  });
  await prisma.contact.createMany({
    data: [
      {
        name: "Anna",
        email: "anna@acme.com",
        companyId: acme.id,
      },
      {
        name: "Bob",
        email: "bob@acme.com",
        companyId: acme.id,
      },
      {
        name: "Sarah",
        email: "sarah@stark.com",
        companyId: stark.id,
      },
      {
        name: "John",
        email: "john@acme.com",
        companyId: acme.id,
      },
      {
        name: "Ken",
        email: "ken@stark.com",
        companyId: stark.id,
      },
    ],
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
