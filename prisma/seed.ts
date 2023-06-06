import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'Frick@prisma.io' },
    update: {},
    create: {
      email: 'Frick@prisma.io',
      name: 'Frick',
      Vendor: {
        create: {
          name: 'Frick Restaurant',
          label: { ar: 'الطاولة', en: 'Frick Restaurant' },
          bio: { ar: 'حياة جذرية', en: 'Great restaurant' },
          handler: 'Frick',
          imageURL: 'fhHYtrertyU8754rfGHgfd.png',
          coverURL: 'dfghjytrfgr.png',
          Product: {
            create: {
              sort: 1,
              visible: true,
              collectionId: 2,
              calories: 212,
              price: 24,
              label: { ar: 'اطجة', en: 'Appetizer' },
              description: { ar: 'اطجة', en: 'Appetizer' },
              imageURL: 'dfghjytrfgr.png',
              ProductVariation: {
                create: {
                  id: 1,
                  label: { ar: 'small', en: 'small' },
                  type: 'size',
                  price: 3,
                },
              },
            },
            createMany: {
              data: [
                {
                  sort: 1,
                  visible: true,
                  collectionId: 2,
                  calories: 212,
                  price: 24,
                  label: { ar: 'اطجة', en: 'Appetizer' },
                  description: { ar: 'اطجة', en: 'Appetizer' },
                  imageURL: 'dfghjytrfgr.png',
                },
                {
                  sort: 2,
                  visible: true,
                  collectionId: 4,
                  calories: 212,
                  price: 24,
                  label: { ar: 'اطجة', en: 'Appetizer' },
                  description: { ar: 'اطجة', en: 'Appetizer' },
                  imageURL: 'dfghjytrfgr.png',
                },
                {
                  sort: 3,
                  visible: true,
                  collectionId: 5,
                  calories: 212,
                  price: 24,
                  label: { ar: 'اطجة', en: 'Appetizer' },
                  description: { ar: 'اطجة', en: 'Appetizer' },
                  imageURL: 'dfghjytrfgr.png',
                },
                {
                  sort: 4,
                  visible: true,
                  collectionId: 6,
                  calories: 212,
                  price: 24,
                  label: { ar: 'اطجة', en: 'Appetizer' },
                  description: { ar: 'اطجة', en: 'Appetizer' },
                  imageURL: 'dfghjytrfgr.png',
                },
                {
                  sort: 5,
                  visible: true,
                  collectionId: 1,
                  calories: 212,
                  price: 24,
                  label: { ar: 'اطجة', en: 'Appetizer' },
                  description: { ar: 'اطجة', en: 'Appetizer' },
                  imageURL: 'dfghjytrfgr.png',
                },
              ],
            },
          },
          Settings: {
            create: {
              theme: {
                appearnace: 'classic',
                mode: 'dark',
                languages: ['ar', 'en'],
              },
              visible: true,
            },
          },
          Branch: {
            createMany: {
              data: [
                {
                  label: { ar: 'الفرج', en: 'Franchise' },
                  latitude: 32.4532,
                  longitude: 23.45325,
                  contact: '983764694',
                  city: 'Jeddah',
                },
                {
                  label: { ar: 'الفرج', en: 'LPPd' },
                  latitude: 12.4532,
                  longitude: 33.56325,
                  contact: '983764694',
                  city: 'Jeddah',
                },
                {
                  label: { ar: 'الفرج', en: 'Parker' },
                  latitude: 22.4532,
                  longitude: 54.325,
                  contact: '983764694',
                  city: 'Makkah',
                },
                {
                  label: { ar: 'الفرج', en: 'Perer' },
                  latitude: 21.4532,
                  longitude: 31.4325,
                  contact: '983764694',
                  city: 'Jeddah',
                },
              ],
            },
          },
          Collection: {
            create: {
              sort: 7,
              visible: true,
              label: { ar: 'مقبلات', en: 'Appetizers' },
            },
            createMany: {
              data: [
                {
                  sort: 5,
                  visible: true,
                  label: { ar: 'مقبلات', en: 'Appetizers' },
                },
                {
                  sort: 1,
                  visible: true,
                  label: { ar: 'اطباق رذيسيه', en: 'Main Course' },
                },
                {
                  sort: 3,
                  visible: true,
                  label: { ar: 'مشروبات', en: 'beverages' },
                },
                {
                  sort: 2,
                  visible: true,
                  label: { ar: 'مثلجات', en: 'Cold Drinks' },
                },
                {
                  sort: 4,
                  visible: true,
                  label: { ar: 'حلويات', en: 'Desserts' },
                },
                {
                  sort: 6,
                  visible: true,
                  label: { ar: 'مشروبات ساخنه', en: 'HotDrinks' },
                },
              ],
            },
          }, // ---- collections
          Qrcode: {
            createMany: {
              data: [
                { target: '#location', label: { ar: 'مقطض', en: 'VIP' } },
                { target: '#file_35fcxa5', label: { ar: 'مقطض', en: 'VIP' } },
              ],
            },
          },
          File: {
            createMany: {
              data: [
                {
                  fileURL: 'sdgsdgsd_En.pdf',
                  label: { ar: 'مقطض', en: 'menu_en' },
                },
                {
                  fileURL: 'dfsdgf3_Ar.pdf',
                  label: { ar: 'مقطض', en: 'menu_ar' },
                },
              ],
            },
          },
        },
      },
    },
  });

  // const bob = await prisma.user.upsert({
  //   where: { email: 'bob@prisma.io' },
  //   update: {},
  //   create: {
  //     email: 'bob@prisma.io',
  //     name: 'Bob',
  //   },
  // });
  console.log({ alice });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
