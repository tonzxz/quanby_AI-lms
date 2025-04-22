import {  PrismaClient } from "@prisma/client";
import dotenv from 'dotenv'
dotenv.config();
const prisma = new PrismaClient();

async function bulkUpsert(model, data, uniqueField = "id") {
  const operations = data.map((item) =>
    model.upsert({
      where: { [uniqueField]: item[uniqueField] },
      update: { ...item },
      create: { ...item },
    })
  );
  await Promise.all(operations);
}

async function main() {
 
  const administrator =[
    {
      'id':'a92aee1390d24af8aa8aae920168b885',
      'email': 'admin@quanbyit.com',
      'firstname': 'Quanby IT',
      'lastname': 'Solutions',
      'role':'$2y$10$o65CIFnqKU6EOkOUEdBAYuZ.1MeXNIQ9ylyyli8YclzHFU996gROu',
      'password':process.env.DEFAULT_PASSWORD,
      'lastseen': new Date(),
    }
  ]

  const practices = [
    {
        "name": "ADJECTIVES",
        "timestamp": new Date("2024-03-14T07:44:24.834931"),
        "id": "e09551531fb94ffdb26a2f38854c4f90"
    },
    {
        "name": "ALPHABETS",
        "timestamp": new Date("2024-03-14T07:51:14.857776"),
        "id": "28696026382d47229ad95128e880bd4b"
    },
    {
        "name": "ADVERBS",
        "timestamp": new Date("2024-03-14T08:39:58.012799"),
        "id": "7a54957effe6432ebec94791e4eac63a"
    },
    {
        "name": "CONVERSATION DRILLS",
        "timestamp": new Date("2024-03-14T08:40:48.408751"),
        "id": "543ee61d0740489e9eb762058b90b78d"
    },
    {
        "name": "COORDINATING CONJUNCTIONS",
        "timestamp": new Date("2024-03-14T08:40:49.62613"),
        "id": "1db75639a3884fc1aef7900e2c370ef1"
    },
    {
        "name": "ELEGANT SPEAKING TIPS",
        "timestamp": new Date("2024-03-14T08:43:59.289163"),
        "id": "fc1400db4e1a4db08fa19725ec74ef34"
    },
    {
        "name": "HOW TO PRONOUNCE CONSONANT CLUSTERS",
        "timestamp": new Date("2024-03-14T08:44:17.195917"),
        "id": "2fa8bafee25e477aa28dc027c8642cdc"
    },
    {
        "name": "IPA PHONETICS",
        "timestamp": new Date("2024-03-14T09:10:00.945006"),
        "id": "d75ccf1afc9545a0b0576847ea570e54"
    },
    {
        "name": "COMMON PRONUNCIATION MISTAKES",
        "timestamp": new Date("2024-03-14T08:53:07.421359"),
        "id": "6718884c9c9a40e984e242e1ea389aa1"
    },
    {
        "name": "ENGLISH FOR BUSINESS SOCIALIZING",
        "timestamp": new Date("2024-03-14T09:01:18.152928"),
        "id": "0aba8af91b31479e9ba67a7ab53997ea"
    },
    {
        "name": "IDIOMS",
        "timestamp": new Date("2024-03-14T09:07:08.937092"),
        "id": "e9303a05db8c4aefb742e365afbc6cdb"
    },
    {
        "name": "FRANK STOCKTON",
        "timestamp": new Date("2024-03-14T09:14:19.236126"),
        "id": "93d06ce0904d4ab894c9c48ffd0cab38"
    },
    {
        "name": "INDUSTRIAL",
        "timestamp": new Date("2024-03-14T09:22:56.772983"),
        "id": "c90f0a1d9e36482d928fef96eab1965a"
    },
    {
        "name": "Tongue Twister",
        "timestamp": new Date("2024-03-14T10:13:24.82043"),
        "id": "d3ef24862c154785b07860731118a7cc"
    },
    {
        "name": "A SOUND STORY",
        "timestamp": new Date("2024-03-14T07:44:17.925649"),
        "id": "97c56577b22640c58559e5469064fffe"
    },
    {
        "name": "Practice 18",
        "timestamp": new Date("2024-10-29T06:39:20.372555"),
        "id": "8e41f78e0a644099a377649ac56f3f8c"
    },
    {
        "name": "Practice 19",
        "timestamp": new Date("2024-10-29T06:39:28.19572"),
        "id": "fa0d9140ca6b471b9ebfd369b9cf4ab7"
    },
    {
        "name": "test",
        "timestamp": new Date("2024-10-17T07:34:33.985126"),
        "id": "bec03f0f70464b3db772c77541ba4fc2"
    },
    {
        "name": "Prtest",
        "timestamp": new Date("2024-10-23T10:12:59.710935"),
        "id": "9854d5fd78024350a5ea0f80b489414e"
    },
    {
        "name": "practice new",
        "timestamp": new Date("2024-11-06T02:14:56.335003"),
        "id": "6bc9f9ea428949e99848160b83477c31"
    },
    {
        "name": "Practice 21",
        "timestamp": new Date("2025-01-07T06:19:04.338095"),
        "id": "997bf930d63d4a4baa83f4ca2616f88d"
    },
    {
        "name": "Practice 22",
        "timestamp": new Date("2025-01-07T06:19:09.830251"),
        "id": "f960a95801fd44e5ae6c074b565c2c1d"
    }
  ]

  const languages =[
    
      {
          "language": "English",
          "id": 2
      },
      {
          "language": "French",
          "id": 3
      },
      {
          "language": "Japanese",
          "id": 4
      }
  ] 

  const drills = [
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:45:58.663287'),
      "id": "ab6be78ad611401092e4a8dbade0e815",
      "description": "ADJECTIVE CLAUSE",
      "audiofile": "modules/0931392b-f38b-4dc1-9d7b-e285ab64dbbc.mp3>B1-16-Adjective-Clause.mp3",
      "drillfile": "modules/e0ed6fde-e98e-40ed-823d-82281fba7336.pdf>ADJECTIVE CLAUSE - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:45:58.663287'),
      "id": "ab6be78ad611401092e4a8dbade0e815",
      "description": "ADJECTIVE CLAUSE",
      "audiofile": "modules/0931392b-f38b-4dc1-9d7b-e285ab64dbbc.mp3>B1-16-Adjective-Clause.mp3",
      "drillfile": "modules/e0ed6fde-e98e-40ed-823d-82281fba7336.pdf>ADJECTIVE CLAUSE - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:45:58.663287'),
      "id": "ab6be78ad611401092e4a8dbade0e815",
      "description": "ADJECTIVE CLAUSE",
      "audiofile": "modules/0931392b-f38b-4dc1-9d7b-e285ab64dbbc.mp3>B1-16-Adjective-Clause.mp3",
      "drillfile": "modules/e0ed6fde-e98e-40ed-823d-82281fba7336.pdf>ADJECTIVE CLAUSE - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:45:58.663287'),
      "id": "ab6be78ad611401092e4a8dbade0e815",
      "description": "ADJECTIVE CLAUSE",
      "audiofile": "modules/0931392b-f38b-4dc1-9d7b-e285ab64dbbc.mp3>B1-16-Adjective-Clause.mp3",
      "drillfile": "modules/e0ed6fde-e98e-40ed-823d-82281fba7336.pdf>ADJECTIVE CLAUSE - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:45:58.663287'),
      "id": "ab6be78ad611401092e4a8dbade0e815",
      "description": "ADJECTIVE CLAUSE",
      "audiofile": "modules/0931392b-f38b-4dc1-9d7b-e285ab64dbbc.mp3>B1-16-Adjective-Clause.mp3",
      "drillfile": "modules/e0ed6fde-e98e-40ed-823d-82281fba7336.pdf>ADJECTIVE CLAUSE - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:45:58.663287'),
      "id": "ab6be78ad611401092e4a8dbade0e815",
      "description": "ADJECTIVE CLAUSE",
      "audiofile": "modules/0931392b-f38b-4dc1-9d7b-e285ab64dbbc.mp3>B1-16-Adjective-Clause.mp3",
      "drillfile": "modules/e0ed6fde-e98e-40ed-823d-82281fba7336.pdf>ADJECTIVE CLAUSE - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:46:33.943586'),
      "id": "7745c550acaf49c3805b09bcd4e4fe7c",
      "description": "ADJECTIVES 1",
      "audiofile": "modules/3f34fc50-4e6f-4943-b60b-e726d019a5ce.mp3>A1-07-Adjectives.mp3",
      "drillfile": "modules/f267b896-d7b5-4596-99f8-4c128bd37b64.pdf>ADJECTIVES - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:46:33.943586'),
      "id": "7745c550acaf49c3805b09bcd4e4fe7c",
      "description": "ADJECTIVES 1",
      "audiofile": "modules/3f34fc50-4e6f-4943-b60b-e726d019a5ce.mp3>A1-07-Adjectives.mp3",
      "drillfile": "modules/f267b896-d7b5-4596-99f8-4c128bd37b64.pdf>ADJECTIVES - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:46:33.943586'),
      "id": "7745c550acaf49c3805b09bcd4e4fe7c",
      "description": "ADJECTIVES 1",
      "audiofile": "modules/3f34fc50-4e6f-4943-b60b-e726d019a5ce.mp3>A1-07-Adjectives.mp3",
      "drillfile": "modules/f267b896-d7b5-4596-99f8-4c128bd37b64.pdf>ADJECTIVES - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:46:33.943586'),
      "id": "7745c550acaf49c3805b09bcd4e4fe7c",
      "description": "ADJECTIVES 1",
      "audiofile": "modules/3f34fc50-4e6f-4943-b60b-e726d019a5ce.mp3>A1-07-Adjectives.mp3",
      "drillfile": "modules/f267b896-d7b5-4596-99f8-4c128bd37b64.pdf>ADJECTIVES - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:46:33.943586'),
      "id": "7745c550acaf49c3805b09bcd4e4fe7c",
      "description": "ADJECTIVES 1",
      "audiofile": "modules/3f34fc50-4e6f-4943-b60b-e726d019a5ce.mp3>A1-07-Adjectives.mp3",
      "drillfile": "modules/f267b896-d7b5-4596-99f8-4c128bd37b64.pdf>ADJECTIVES - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:46:33.943586'),
      "id": "7745c550acaf49c3805b09bcd4e4fe7c",
      "description": "ADJECTIVES 1",
      "audiofile": "modules/3f34fc50-4e6f-4943-b60b-e726d019a5ce.mp3>A1-07-Adjectives.mp3",
      "drillfile": "modules/f267b896-d7b5-4596-99f8-4c128bd37b64.pdf>ADJECTIVES - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:47:09.197594'),
      "id": "a14cc2fd8f384a90a94bb81123bab40f",
      "description": "ADJECTIVES 2",
      "audiofile": "modules/85d30158-d785-44bb-b137-5b14ae51d0f6.mp3>A2-08-Adjectives.mp3",
      "drillfile": "modules/cf07cc98-33a2-4de5-b5ca-daf99bce5f7e.pdf>ADJECTIVES - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:47:09.197594'),
      "id": "a14cc2fd8f384a90a94bb81123bab40f",
      "description": "ADJECTIVES 2",
      "audiofile": "modules/85d30158-d785-44bb-b137-5b14ae51d0f6.mp3>A2-08-Adjectives.mp3",
      "drillfile": "modules/cf07cc98-33a2-4de5-b5ca-daf99bce5f7e.pdf>ADJECTIVES - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:47:09.197594'),
      "id": "a14cc2fd8f384a90a94bb81123bab40f",
      "description": "ADJECTIVES 2",
      "audiofile": "modules/85d30158-d785-44bb-b137-5b14ae51d0f6.mp3>A2-08-Adjectives.mp3",
      "drillfile": "modules/cf07cc98-33a2-4de5-b5ca-daf99bce5f7e.pdf>ADJECTIVES - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:47:09.197594'),
      "id": "a14cc2fd8f384a90a94bb81123bab40f",
      "description": "ADJECTIVES 2",
      "audiofile": "modules/85d30158-d785-44bb-b137-5b14ae51d0f6.mp3>A2-08-Adjectives.mp3",
      "drillfile": "modules/cf07cc98-33a2-4de5-b5ca-daf99bce5f7e.pdf>ADJECTIVES - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:47:09.197594'),
      "id": "a14cc2fd8f384a90a94bb81123bab40f",
      "description": "ADJECTIVES 2",
      "audiofile": "modules/85d30158-d785-44bb-b137-5b14ae51d0f6.mp3>A2-08-Adjectives.mp3",
      "drillfile": "modules/cf07cc98-33a2-4de5-b5ca-daf99bce5f7e.pdf>ADJECTIVES - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:47:09.197594'),
      "id": "a14cc2fd8f384a90a94bb81123bab40f",
      "description": "ADJECTIVES 2",
      "audiofile": "modules/85d30158-d785-44bb-b137-5b14ae51d0f6.mp3>A2-08-Adjectives.mp3",
      "drillfile": "modules/cf07cc98-33a2-4de5-b5ca-daf99bce5f7e.pdf>ADJECTIVES - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:48:30.751747'),
      "id": "e6b61f07f7114760814e2cc65b187112",
      "description": "ADVERB CONVERSATIONS",
      "audiofile": "modules/3eb342e2-fe34-41c3-9c44-2d60ac0b62ac.mp3>Copy of B2-05-Adverb-Placement.mp3",
      "drillfile": "modules/999284e0-3d5f-4397-b724-5c055947ca40.pdf>ADVERB PLACEMENT CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:48:30.751747'),
      "id": "e6b61f07f7114760814e2cc65b187112",
      "description": "ADVERB CONVERSATIONS",
      "audiofile": "modules/3eb342e2-fe34-41c3-9c44-2d60ac0b62ac.mp3>Copy of B2-05-Adverb-Placement.mp3",
      "drillfile": "modules/999284e0-3d5f-4397-b724-5c055947ca40.pdf>ADVERB PLACEMENT CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:48:30.751747'),
      "id": "e6b61f07f7114760814e2cc65b187112",
      "description": "ADVERB CONVERSATIONS",
      "audiofile": "modules/3eb342e2-fe34-41c3-9c44-2d60ac0b62ac.mp3>Copy of B2-05-Adverb-Placement.mp3",
      "drillfile": "modules/999284e0-3d5f-4397-b724-5c055947ca40.pdf>ADVERB PLACEMENT CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:48:30.751747'),
      "id": "e6b61f07f7114760814e2cc65b187112",
      "description": "ADVERB CONVERSATIONS",
      "audiofile": "modules/3eb342e2-fe34-41c3-9c44-2d60ac0b62ac.mp3>Copy of B2-05-Adverb-Placement.mp3",
      "drillfile": "modules/999284e0-3d5f-4397-b724-5c055947ca40.pdf>ADVERB PLACEMENT CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:48:30.751747'),
      "id": "e6b61f07f7114760814e2cc65b187112",
      "description": "ADVERB CONVERSATIONS",
      "audiofile": "modules/3eb342e2-fe34-41c3-9c44-2d60ac0b62ac.mp3>Copy of B2-05-Adverb-Placement.mp3",
      "drillfile": "modules/999284e0-3d5f-4397-b724-5c055947ca40.pdf>ADVERB PLACEMENT CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:48:30.751747'),
      "id": "e6b61f07f7114760814e2cc65b187112",
      "description": "ADVERB CONVERSATIONS",
      "audiofile": "modules/3eb342e2-fe34-41c3-9c44-2d60ac0b62ac.mp3>Copy of B2-05-Adverb-Placement.mp3",
      "drillfile": "modules/999284e0-3d5f-4397-b724-5c055947ca40.pdf>ADVERB PLACEMENT CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:49:13.668476'),
      "id": "3c424291873d4e0d8174ceee955cabf0",
      "description": "ADVERBS OF FREQUENCY",
      "audiofile": "modules/90a5a0b3-28f7-4412-8a6b-a1dd90534ccc.mp3>Copy of A1-20-Adverbs-Frequency.mp3",
      "drillfile": "modules/8ea6df66-db41-46c5-a35b-c74406251182.pdf>ADVERBS OF FREQUENCY CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:49:13.668476'),
      "id": "3c424291873d4e0d8174ceee955cabf0",
      "description": "ADVERBS OF FREQUENCY",
      "audiofile": "modules/90a5a0b3-28f7-4412-8a6b-a1dd90534ccc.mp3>Copy of A1-20-Adverbs-Frequency.mp3",
      "drillfile": "modules/8ea6df66-db41-46c5-a35b-c74406251182.pdf>ADVERBS OF FREQUENCY CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:49:13.668476'),
      "id": "3c424291873d4e0d8174ceee955cabf0",
      "description": "ADVERBS OF FREQUENCY",
      "audiofile": "modules/90a5a0b3-28f7-4412-8a6b-a1dd90534ccc.mp3>Copy of A1-20-Adverbs-Frequency.mp3",
      "drillfile": "modules/8ea6df66-db41-46c5-a35b-c74406251182.pdf>ADVERBS OF FREQUENCY CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:49:13.668476'),
      "id": "3c424291873d4e0d8174ceee955cabf0",
      "description": "ADVERBS OF FREQUENCY",
      "audiofile": "modules/90a5a0b3-28f7-4412-8a6b-a1dd90534ccc.mp3>Copy of A1-20-Adverbs-Frequency.mp3",
      "drillfile": "modules/8ea6df66-db41-46c5-a35b-c74406251182.pdf>ADVERBS OF FREQUENCY CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:49:13.668476'),
      "id": "3c424291873d4e0d8174ceee955cabf0",
      "description": "ADVERBS OF FREQUENCY",
      "audiofile": "modules/90a5a0b3-28f7-4412-8a6b-a1dd90534ccc.mp3>Copy of A1-20-Adverbs-Frequency.mp3",
      "drillfile": "modules/8ea6df66-db41-46c5-a35b-c74406251182.pdf>ADVERBS OF FREQUENCY CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:49:13.668476'),
      "id": "3c424291873d4e0d8174ceee955cabf0",
      "description": "ADVERBS OF FREQUENCY",
      "audiofile": "modules/90a5a0b3-28f7-4412-8a6b-a1dd90534ccc.mp3>Copy of A1-20-Adverbs-Frequency.mp3",
      "drillfile": "modules/8ea6df66-db41-46c5-a35b-c74406251182.pdf>ADVERBS OF FREQUENCY CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:49:47.357444'),
      "id": "64959feda2d744719d3afe0d4e9d30dc",
      "description": "ADVERBS OF QTY CONVERSATION",
      "audiofile": "modules/56f17c20-5f56-4f0d-936e-3b9335bbf851.mp3>Copy of A2-18-Adverbs-Much-A-Lot.mp3",
      "drillfile": "modules/ce22d17e-c3a6-47e4-848e-612d06d3dd6f.pdf>ADVERBS OF QTY CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:49:47.357444'),
      "id": "64959feda2d744719d3afe0d4e9d30dc",
      "description": "ADVERBS OF QTY CONVERSATION",
      "audiofile": "modules/56f17c20-5f56-4f0d-936e-3b9335bbf851.mp3>Copy of A2-18-Adverbs-Much-A-Lot.mp3",
      "drillfile": "modules/ce22d17e-c3a6-47e4-848e-612d06d3dd6f.pdf>ADVERBS OF QTY CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:49:47.357444'),
      "id": "64959feda2d744719d3afe0d4e9d30dc",
      "description": "ADVERBS OF QTY CONVERSATION",
      "audiofile": "modules/56f17c20-5f56-4f0d-936e-3b9335bbf851.mp3>Copy of A2-18-Adverbs-Much-A-Lot.mp3",
      "drillfile": "modules/ce22d17e-c3a6-47e4-848e-612d06d3dd6f.pdf>ADVERBS OF QTY CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:49:47.357444'),
      "id": "64959feda2d744719d3afe0d4e9d30dc",
      "description": "ADVERBS OF QTY CONVERSATION",
      "audiofile": "modules/56f17c20-5f56-4f0d-936e-3b9335bbf851.mp3>Copy of A2-18-Adverbs-Much-A-Lot.mp3",
      "drillfile": "modules/ce22d17e-c3a6-47e4-848e-612d06d3dd6f.pdf>ADVERBS OF QTY CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:49:47.357444'),
      "id": "64959feda2d744719d3afe0d4e9d30dc",
      "description": "ADVERBS OF QTY CONVERSATION",
      "audiofile": "modules/56f17c20-5f56-4f0d-936e-3b9335bbf851.mp3>Copy of A2-18-Adverbs-Much-A-Lot.mp3",
      "drillfile": "modules/ce22d17e-c3a6-47e4-848e-612d06d3dd6f.pdf>ADVERBS OF QTY CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:49:47.357444'),
      "id": "64959feda2d744719d3afe0d4e9d30dc",
      "description": "ADVERBS OF QTY CONVERSATION",
      "audiofile": "modules/56f17c20-5f56-4f0d-936e-3b9335bbf851.mp3>Copy of A2-18-Adverbs-Much-A-Lot.mp3",
      "drillfile": "modules/ce22d17e-c3a6-47e4-848e-612d06d3dd6f.pdf>ADVERBS OF QTY CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:50:55.693441'),
      "id": "354e4652b0344a8d94326cf33f48eab1",
      "description": "ADVERBS OF TIME CONVERSATION",
      "audiofile": "modules/c1b3f532-ab5d-45f1-816f-8a5106e1823a.mp3>Copy of A2-16-Adverbs-of-Time.mp3",
      "drillfile": "modules/dce49783-b6d8-474c-9a77-1a1aad668210.pdf>ADVERBS OF TIME CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:50:55.693441'),
      "id": "354e4652b0344a8d94326cf33f48eab1",
      "description": "ADVERBS OF TIME CONVERSATION",
      "audiofile": "modules/c1b3f532-ab5d-45f1-816f-8a5106e1823a.mp3>Copy of A2-16-Adverbs-of-Time.mp3",
      "drillfile": "modules/dce49783-b6d8-474c-9a77-1a1aad668210.pdf>ADVERBS OF TIME CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:50:55.693441'),
      "id": "354e4652b0344a8d94326cf33f48eab1",
      "description": "ADVERBS OF TIME CONVERSATION",
      "audiofile": "modules/c1b3f532-ab5d-45f1-816f-8a5106e1823a.mp3>Copy of A2-16-Adverbs-of-Time.mp3",
      "drillfile": "modules/dce49783-b6d8-474c-9a77-1a1aad668210.pdf>ADVERBS OF TIME CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:50:55.693441'),
      "id": "354e4652b0344a8d94326cf33f48eab1",
      "description": "ADVERBS OF TIME CONVERSATION",
      "audiofile": "modules/c1b3f532-ab5d-45f1-816f-8a5106e1823a.mp3>Copy of A2-16-Adverbs-of-Time.mp3",
      "drillfile": "modules/dce49783-b6d8-474c-9a77-1a1aad668210.pdf>ADVERBS OF TIME CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:50:55.693441'),
      "id": "354e4652b0344a8d94326cf33f48eab1",
      "description": "ADVERBS OF TIME CONVERSATION",
      "audiofile": "modules/c1b3f532-ab5d-45f1-816f-8a5106e1823a.mp3>Copy of A2-16-Adverbs-of-Time.mp3",
      "drillfile": "modules/dce49783-b6d8-474c-9a77-1a1aad668210.pdf>ADVERBS OF TIME CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "e09551531fb94ffdb26a2f38854c4f90",
      "timestamp": new Date('2024-03-14 07:50:55.693441'),
      "id": "354e4652b0344a8d94326cf33f48eab1",
      "description": "ADVERBS OF TIME CONVERSATION",
      "audiofile": "modules/c1b3f532-ab5d-45f1-816f-8a5106e1823a.mp3>Copy of A2-16-Adverbs-of-Time.mp3",
      "drillfile": "modules/dce49783-b6d8-474c-9a77-1a1aad668210.pdf>ADVERBS OF TIME CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:52:42.622606'),
      "id": "a5ceaf626994432a9a2227f3638bd8c6",
      "description": "Conflict in United States Selected Speeches",
      "audiofile": "modules/1d5339eb-ff60-4bb0-80e3-502b3a25747c.mp3>civil-rights-and-conflict-in-the-united-states-selected-speeches-001-aint-i-a-woman.3089.mp3",
      "drillfile": "modules/28024980-b0d4-441e-8c1b-ec9986ef5080.pdf>civil-rights-and-conflict-in-the-united-states-selected-speeches-001-aint-i-a-woman.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:52:42.622606'),
      "id": "a5ceaf626994432a9a2227f3638bd8c6",
      "description": "Conflict in United States Selected Speeches",
      "audiofile": "modules/1d5339eb-ff60-4bb0-80e3-502b3a25747c.mp3>civil-rights-and-conflict-in-the-united-states-selected-speeches-001-aint-i-a-woman.3089.mp3",
      "drillfile": "modules/28024980-b0d4-441e-8c1b-ec9986ef5080.pdf>civil-rights-and-conflict-in-the-united-states-selected-speeches-001-aint-i-a-woman.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:52:42.622606'),
      "id": "a5ceaf626994432a9a2227f3638bd8c6",
      "description": "Conflict in United States Selected Speeches",
      "audiofile": "modules/1d5339eb-ff60-4bb0-80e3-502b3a25747c.mp3>civil-rights-and-conflict-in-the-united-states-selected-speeches-001-aint-i-a-woman.3089.mp3",
      "drillfile": "modules/28024980-b0d4-441e-8c1b-ec9986ef5080.pdf>civil-rights-and-conflict-in-the-united-states-selected-speeches-001-aint-i-a-woman.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:52:42.622606'),
      "id": "a5ceaf626994432a9a2227f3638bd8c6",
      "description": "Conflict in United States Selected Speeches",
      "audiofile": "modules/1d5339eb-ff60-4bb0-80e3-502b3a25747c.mp3>civil-rights-and-conflict-in-the-united-states-selected-speeches-001-aint-i-a-woman.3089.mp3",
      "drillfile": "modules/28024980-b0d4-441e-8c1b-ec9986ef5080.pdf>civil-rights-and-conflict-in-the-united-states-selected-speeches-001-aint-i-a-woman.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:52:42.622606'),
      "id": "a5ceaf626994432a9a2227f3638bd8c6",
      "description": "Conflict in United States Selected Speeches",
      "audiofile": "modules/1d5339eb-ff60-4bb0-80e3-502b3a25747c.mp3>civil-rights-and-conflict-in-the-united-states-selected-speeches-001-aint-i-a-woman.3089.mp3",
      "drillfile": "modules/28024980-b0d4-441e-8c1b-ec9986ef5080.pdf>civil-rights-and-conflict-in-the-united-states-selected-speeches-001-aint-i-a-woman.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:52:42.622606'),
      "id": "a5ceaf626994432a9a2227f3638bd8c6",
      "description": "Conflict in United States Selected Speeches",
      "audiofile": "modules/1d5339eb-ff60-4bb0-80e3-502b3a25747c.mp3>civil-rights-and-conflict-in-the-united-states-selected-speeches-001-aint-i-a-woman.3089.mp3",
      "drillfile": "modules/28024980-b0d4-441e-8c1b-ec9986ef5080.pdf>civil-rights-and-conflict-in-the-united-states-selected-speeches-001-aint-i-a-woman.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:54:03.247501'),
      "id": "a41ba6c22eb347cb87eee240fcd2c6e6",
      "description": "ALPHABET LETTER SOUNDS",
      "audiofile": "modules/f1edc9d3-3fe6-496a-a9a9-fe97f6bb9616.mp3>alphabet-sounds.mp3",
      "drillfile": "modules/61d2e960-45aa-4dbe-a953-3552aed697ba.pdf>ALPHABET LETTER SOUNDS.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:54:03.247501'),
      "id": "a41ba6c22eb347cb87eee240fcd2c6e6",
      "description": "ALPHABET LETTER SOUNDS",
      "audiofile": "modules/f1edc9d3-3fe6-496a-a9a9-fe97f6bb9616.mp3>alphabet-sounds.mp3",
      "drillfile": "modules/61d2e960-45aa-4dbe-a953-3552aed697ba.pdf>ALPHABET LETTER SOUNDS.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:54:03.247501'),
      "id": "a41ba6c22eb347cb87eee240fcd2c6e6",
      "description": "ALPHABET LETTER SOUNDS",
      "audiofile": "modules/f1edc9d3-3fe6-496a-a9a9-fe97f6bb9616.mp3>alphabet-sounds.mp3",
      "drillfile": "modules/61d2e960-45aa-4dbe-a953-3552aed697ba.pdf>ALPHABET LETTER SOUNDS.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:54:03.247501'),
      "id": "a41ba6c22eb347cb87eee240fcd2c6e6",
      "description": "ALPHABET LETTER SOUNDS",
      "audiofile": "modules/f1edc9d3-3fe6-496a-a9a9-fe97f6bb9616.mp3>alphabet-sounds.mp3",
      "drillfile": "modules/61d2e960-45aa-4dbe-a953-3552aed697ba.pdf>ALPHABET LETTER SOUNDS.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:54:03.247501'),
      "id": "a41ba6c22eb347cb87eee240fcd2c6e6",
      "description": "ALPHABET LETTER SOUNDS",
      "audiofile": "modules/f1edc9d3-3fe6-496a-a9a9-fe97f6bb9616.mp3>alphabet-sounds.mp3",
      "drillfile": "modules/61d2e960-45aa-4dbe-a953-3552aed697ba.pdf>ALPHABET LETTER SOUNDS.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:54:03.247501'),
      "id": "a41ba6c22eb347cb87eee240fcd2c6e6",
      "description": "ALPHABET LETTER SOUNDS",
      "audiofile": "modules/f1edc9d3-3fe6-496a-a9a9-fe97f6bb9616.mp3>alphabet-sounds.mp3",
      "drillfile": "modules/61d2e960-45aa-4dbe-a953-3552aed697ba.pdf>ALPHABET LETTER SOUNDS.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:54:57.527966'),
      "id": "f79684a941374c80b650f1b999a8c690",
      "description": "LOWER CASE LETTER",
      "audiofile": "modules/537804e9-828f-4f11-9d0e-091caf6a5937.mp3>LOWER CASE SOUNDS.mp3",
      "drillfile": "modules/575ce40b-1650-4ec5-af8f-7e726eb8158d.pdf>LOWER CASE LETTER.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:54:57.527966'),
      "id": "f79684a941374c80b650f1b999a8c690",
      "description": "LOWER CASE LETTER",
      "audiofile": "modules/537804e9-828f-4f11-9d0e-091caf6a5937.mp3>LOWER CASE SOUNDS.mp3",
      "drillfile": "modules/575ce40b-1650-4ec5-af8f-7e726eb8158d.pdf>LOWER CASE LETTER.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:54:57.527966'),
      "id": "f79684a941374c80b650f1b999a8c690",
      "description": "LOWER CASE LETTER",
      "audiofile": "modules/537804e9-828f-4f11-9d0e-091caf6a5937.mp3>LOWER CASE SOUNDS.mp3",
      "drillfile": "modules/575ce40b-1650-4ec5-af8f-7e726eb8158d.pdf>LOWER CASE LETTER.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:54:57.527966'),
      "id": "f79684a941374c80b650f1b999a8c690",
      "description": "LOWER CASE LETTER",
      "audiofile": "modules/537804e9-828f-4f11-9d0e-091caf6a5937.mp3>LOWER CASE SOUNDS.mp3",
      "drillfile": "modules/575ce40b-1650-4ec5-af8f-7e726eb8158d.pdf>LOWER CASE LETTER.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:54:57.527966'),
      "id": "f79684a941374c80b650f1b999a8c690",
      "description": "LOWER CASE LETTER",
      "audiofile": "modules/537804e9-828f-4f11-9d0e-091caf6a5937.mp3>LOWER CASE SOUNDS.mp3",
      "drillfile": "modules/575ce40b-1650-4ec5-af8f-7e726eb8158d.pdf>LOWER CASE LETTER.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:54:57.527966'),
      "id": "f79684a941374c80b650f1b999a8c690",
      "description": "LOWER CASE LETTER",
      "audiofile": "modules/537804e9-828f-4f11-9d0e-091caf6a5937.mp3>LOWER CASE SOUNDS.mp3",
      "drillfile": "modules/575ce40b-1650-4ec5-af8f-7e726eb8158d.pdf>LOWER CASE LETTER.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:56:22.036683'),
      "id": "4933ea7183724d64884a4e24ea398b73",
      "description": "ALPHABET PRONUNCIATION",
      "audiofile": "modules/f368be63-283b-4e89-9c2d-6272cb87f68e.mp3>ALPHABET PRONUNCIATION SOUNDS.mp3",
      "drillfile": "modules/899b96c0-51a2-41bc-bb17-6e49db836de1.pdf>ALPHABET PRONUNCIATION.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:56:22.036683'),
      "id": "4933ea7183724d64884a4e24ea398b73",
      "description": "ALPHABET PRONUNCIATION",
      "audiofile": "modules/f368be63-283b-4e89-9c2d-6272cb87f68e.mp3>ALPHABET PRONUNCIATION SOUNDS.mp3",
      "drillfile": "modules/899b96c0-51a2-41bc-bb17-6e49db836de1.pdf>ALPHABET PRONUNCIATION.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:56:22.036683'),
      "id": "4933ea7183724d64884a4e24ea398b73",
      "description": "ALPHABET PRONUNCIATION",
      "audiofile": "modules/f368be63-283b-4e89-9c2d-6272cb87f68e.mp3>ALPHABET PRONUNCIATION SOUNDS.mp3",
      "drillfile": "modules/899b96c0-51a2-41bc-bb17-6e49db836de1.pdf>ALPHABET PRONUNCIATION.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:56:22.036683'),
      "id": "4933ea7183724d64884a4e24ea398b73",
      "description": "ALPHABET PRONUNCIATION",
      "audiofile": "modules/f368be63-283b-4e89-9c2d-6272cb87f68e.mp3>ALPHABET PRONUNCIATION SOUNDS.mp3",
      "drillfile": "modules/899b96c0-51a2-41bc-bb17-6e49db836de1.pdf>ALPHABET PRONUNCIATION.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:56:22.036683'),
      "id": "4933ea7183724d64884a4e24ea398b73",
      "description": "ALPHABET PRONUNCIATION",
      "audiofile": "modules/f368be63-283b-4e89-9c2d-6272cb87f68e.mp3>ALPHABET PRONUNCIATION SOUNDS.mp3",
      "drillfile": "modules/899b96c0-51a2-41bc-bb17-6e49db836de1.pdf>ALPHABET PRONUNCIATION.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:56:22.036683'),
      "id": "4933ea7183724d64884a4e24ea398b73",
      "description": "ALPHABET PRONUNCIATION",
      "audiofile": "modules/f368be63-283b-4e89-9c2d-6272cb87f68e.mp3>ALPHABET PRONUNCIATION SOUNDS.mp3",
      "drillfile": "modules/899b96c0-51a2-41bc-bb17-6e49db836de1.pdf>ALPHABET PRONUNCIATION.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:58:36.53739'),
      "id": "68f2a949968243afbe91214f9c7ae1ce",
      "description": "ALSO CONVERSATION",
      "audiofile": "modules/557f6230-3f33-4595-a520-859dec54f8be.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/18bb5f8f-39d9-4739-b0cd-c0ccac7a1766.pdf>ALSO CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:58:36.53739'),
      "id": "68f2a949968243afbe91214f9c7ae1ce",
      "description": "ALSO CONVERSATION",
      "audiofile": "modules/557f6230-3f33-4595-a520-859dec54f8be.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/18bb5f8f-39d9-4739-b0cd-c0ccac7a1766.pdf>ALSO CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:58:36.53739'),
      "id": "68f2a949968243afbe91214f9c7ae1ce",
      "description": "ALSO CONVERSATION",
      "audiofile": "modules/557f6230-3f33-4595-a520-859dec54f8be.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/18bb5f8f-39d9-4739-b0cd-c0ccac7a1766.pdf>ALSO CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:58:36.53739'),
      "id": "68f2a949968243afbe91214f9c7ae1ce",
      "description": "ALSO CONVERSATION",
      "audiofile": "modules/557f6230-3f33-4595-a520-859dec54f8be.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/18bb5f8f-39d9-4739-b0cd-c0ccac7a1766.pdf>ALSO CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:58:36.53739'),
      "id": "68f2a949968243afbe91214f9c7ae1ce",
      "description": "ALSO CONVERSATION",
      "audiofile": "modules/557f6230-3f33-4595-a520-859dec54f8be.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/18bb5f8f-39d9-4739-b0cd-c0ccac7a1766.pdf>ALSO CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:58:36.53739'),
      "id": "68f2a949968243afbe91214f9c7ae1ce",
      "description": "ALSO CONVERSATION",
      "audiofile": "modules/557f6230-3f33-4595-a520-859dec54f8be.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/18bb5f8f-39d9-4739-b0cd-c0ccac7a1766.pdf>ALSO CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:59:39.930854'),
      "id": "26c355d638dc4df5a2356bf37c0f9d82",
      "description": "ANY SOME CONVERSATION",
      "audiofile": "modules/cfc60603-804b-4c23-b1a9-7977522d148b.mp3>Copy of A1-25-Any-Some.mp3",
      "drillfile": "modules/cfb4aab9-aa16-4c5c-9895-244047e16ef8.pdf>ANY SOME CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:59:39.930854'),
      "id": "26c355d638dc4df5a2356bf37c0f9d82",
      "description": "ANY SOME CONVERSATION",
      "audiofile": "modules/cfc60603-804b-4c23-b1a9-7977522d148b.mp3>Copy of A1-25-Any-Some.mp3",
      "drillfile": "modules/cfb4aab9-aa16-4c5c-9895-244047e16ef8.pdf>ANY SOME CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:59:39.930854'),
      "id": "26c355d638dc4df5a2356bf37c0f9d82",
      "description": "ANY SOME CONVERSATION",
      "audiofile": "modules/cfc60603-804b-4c23-b1a9-7977522d148b.mp3>Copy of A1-25-Any-Some.mp3",
      "drillfile": "modules/cfb4aab9-aa16-4c5c-9895-244047e16ef8.pdf>ANY SOME CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:59:39.930854'),
      "id": "26c355d638dc4df5a2356bf37c0f9d82",
      "description": "ANY SOME CONVERSATION",
      "audiofile": "modules/cfc60603-804b-4c23-b1a9-7977522d148b.mp3>Copy of A1-25-Any-Some.mp3",
      "drillfile": "modules/cfb4aab9-aa16-4c5c-9895-244047e16ef8.pdf>ANY SOME CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:59:39.930854'),
      "id": "26c355d638dc4df5a2356bf37c0f9d82",
      "description": "ANY SOME CONVERSATION",
      "audiofile": "modules/cfc60603-804b-4c23-b1a9-7977522d148b.mp3>Copy of A1-25-Any-Some.mp3",
      "drillfile": "modules/cfb4aab9-aa16-4c5c-9895-244047e16ef8.pdf>ANY SOME CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 07:59:39.930854'),
      "id": "26c355d638dc4df5a2356bf37c0f9d82",
      "description": "ANY SOME CONVERSATION",
      "audiofile": "modules/cfc60603-804b-4c23-b1a9-7977522d148b.mp3>Copy of A1-25-Any-Some.mp3",
      "drillfile": "modules/cfb4aab9-aa16-4c5c-9895-244047e16ef8.pdf>ANY SOME CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:02:29.196595'),
      "id": "3f7419767a20496d9eab26f886bc4e50",
      "description": "ARTICLES CONVERSATION",
      "audiofile": "modules/cde947a9-9619-43cf-92b6-f1ab9b17b9bb.mp3>Copy of A1-24-Articles.mp3",
      "drillfile": "modules/9ba53eab-e7cc-49cc-b7ca-34a440f9fd5e.pdf>ARTICLES CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:02:29.196595'),
      "id": "3f7419767a20496d9eab26f886bc4e50",
      "description": "ARTICLES CONVERSATION",
      "audiofile": "modules/cde947a9-9619-43cf-92b6-f1ab9b17b9bb.mp3>Copy of A1-24-Articles.mp3",
      "drillfile": "modules/9ba53eab-e7cc-49cc-b7ca-34a440f9fd5e.pdf>ARTICLES CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:02:29.196595'),
      "id": "3f7419767a20496d9eab26f886bc4e50",
      "description": "ARTICLES CONVERSATION",
      "audiofile": "modules/cde947a9-9619-43cf-92b6-f1ab9b17b9bb.mp3>Copy of A1-24-Articles.mp3",
      "drillfile": "modules/9ba53eab-e7cc-49cc-b7ca-34a440f9fd5e.pdf>ARTICLES CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:02:29.196595'),
      "id": "3f7419767a20496d9eab26f886bc4e50",
      "description": "ARTICLES CONVERSATION",
      "audiofile": "modules/cde947a9-9619-43cf-92b6-f1ab9b17b9bb.mp3>Copy of A1-24-Articles.mp3",
      "drillfile": "modules/9ba53eab-e7cc-49cc-b7ca-34a440f9fd5e.pdf>ARTICLES CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:02:29.196595'),
      "id": "3f7419767a20496d9eab26f886bc4e50",
      "description": "ARTICLES CONVERSATION",
      "audiofile": "modules/cde947a9-9619-43cf-92b6-f1ab9b17b9bb.mp3>Copy of A1-24-Articles.mp3",
      "drillfile": "modules/9ba53eab-e7cc-49cc-b7ca-34a440f9fd5e.pdf>ARTICLES CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:02:29.196595'),
      "id": "3f7419767a20496d9eab26f886bc4e50",
      "description": "ARTICLES CONVERSATION",
      "audiofile": "modules/cde947a9-9619-43cf-92b6-f1ab9b17b9bb.mp3>Copy of A1-24-Articles.mp3",
      "drillfile": "modules/9ba53eab-e7cc-49cc-b7ca-34a440f9fd5e.pdf>ARTICLES CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:02:55.789844'),
      "id": "2c8c82cdadc34658b7592c5b266ad852",
      "description": "AS COMPARATIVES CONVERSATIONS",
      "audiofile": "modules/b5bc1989-f7f8-4c57-922f-7274d610851e.mp3>Copy of B2-08-As-As-Comparatives.mp3",
      "drillfile": "modules/b0a5290d-f5db-4472-aabc-4a1dfb40e810.pdf>AS COMPARATIVES CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:02:55.789844'),
      "id": "2c8c82cdadc34658b7592c5b266ad852",
      "description": "AS COMPARATIVES CONVERSATIONS",
      "audiofile": "modules/b5bc1989-f7f8-4c57-922f-7274d610851e.mp3>Copy of B2-08-As-As-Comparatives.mp3",
      "drillfile": "modules/b0a5290d-f5db-4472-aabc-4a1dfb40e810.pdf>AS COMPARATIVES CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:02:55.789844'),
      "id": "2c8c82cdadc34658b7592c5b266ad852",
      "description": "AS COMPARATIVES CONVERSATIONS",
      "audiofile": "modules/b5bc1989-f7f8-4c57-922f-7274d610851e.mp3>Copy of B2-08-As-As-Comparatives.mp3",
      "drillfile": "modules/b0a5290d-f5db-4472-aabc-4a1dfb40e810.pdf>AS COMPARATIVES CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:02:55.789844'),
      "id": "2c8c82cdadc34658b7592c5b266ad852",
      "description": "AS COMPARATIVES CONVERSATIONS",
      "audiofile": "modules/b5bc1989-f7f8-4c57-922f-7274d610851e.mp3>Copy of B2-08-As-As-Comparatives.mp3",
      "drillfile": "modules/b0a5290d-f5db-4472-aabc-4a1dfb40e810.pdf>AS COMPARATIVES CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:02:55.789844'),
      "id": "2c8c82cdadc34658b7592c5b266ad852",
      "description": "AS COMPARATIVES CONVERSATIONS",
      "audiofile": "modules/b5bc1989-f7f8-4c57-922f-7274d610851e.mp3>Copy of B2-08-As-As-Comparatives.mp3",
      "drillfile": "modules/b0a5290d-f5db-4472-aabc-4a1dfb40e810.pdf>AS COMPARATIVES CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:02:55.789844'),
      "id": "2c8c82cdadc34658b7592c5b266ad852",
      "description": "AS COMPARATIVES CONVERSATIONS",
      "audiofile": "modules/b5bc1989-f7f8-4c57-922f-7274d610851e.mp3>Copy of B2-08-As-As-Comparatives.mp3",
      "drillfile": "modules/b0a5290d-f5db-4472-aabc-4a1dfb40e810.pdf>AS COMPARATIVES CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:03:50.46937'),
      "id": "cb600d1f1bb94d9e9696a11a0e34bc51",
      "description": "nice to have a big backyard to play",
      "audiofile": "modules/397bd8a1-526d-43ae-9b64-8e30aa612ad6.mp3>1372-3-backyard.mp3",
      "drillfile": "modules/4e764a6f-c4d8-40ed-85d9-b09771095376.pdf>t_s nice to have a big backyard to play sports.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:03:50.46937'),
      "id": "cb600d1f1bb94d9e9696a11a0e34bc51",
      "description": "nice to have a big backyard to play",
      "audiofile": "modules/397bd8a1-526d-43ae-9b64-8e30aa612ad6.mp3>1372-3-backyard.mp3",
      "drillfile": "modules/4e764a6f-c4d8-40ed-85d9-b09771095376.pdf>t_s nice to have a big backyard to play sports.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:03:50.46937'),
      "id": "cb600d1f1bb94d9e9696a11a0e34bc51",
      "description": "nice to have a big backyard to play",
      "audiofile": "modules/397bd8a1-526d-43ae-9b64-8e30aa612ad6.mp3>1372-3-backyard.mp3",
      "drillfile": "modules/4e764a6f-c4d8-40ed-85d9-b09771095376.pdf>t_s nice to have a big backyard to play sports.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:03:50.46937'),
      "id": "cb600d1f1bb94d9e9696a11a0e34bc51",
      "description": "nice to have a big backyard to play",
      "audiofile": "modules/397bd8a1-526d-43ae-9b64-8e30aa612ad6.mp3>1372-3-backyard.mp3",
      "drillfile": "modules/4e764a6f-c4d8-40ed-85d9-b09771095376.pdf>t_s nice to have a big backyard to play sports.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:03:50.46937'),
      "id": "cb600d1f1bb94d9e9696a11a0e34bc51",
      "description": "nice to have a big backyard to play",
      "audiofile": "modules/397bd8a1-526d-43ae-9b64-8e30aa612ad6.mp3>1372-3-backyard.mp3",
      "drillfile": "modules/4e764a6f-c4d8-40ed-85d9-b09771095376.pdf>t_s nice to have a big backyard to play sports.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:03:50.46937'),
      "id": "cb600d1f1bb94d9e9696a11a0e34bc51",
      "description": "nice to have a big backyard to play",
      "audiofile": "modules/397bd8a1-526d-43ae-9b64-8e30aa612ad6.mp3>1372-3-backyard.mp3",
      "drillfile": "modules/4e764a6f-c4d8-40ed-85d9-b09771095376.pdf>t_s nice to have a big backyard to play sports.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:06:39.357428'),
      "id": "4aafbe29ebcc413f80d2f4538b95a93b",
      "description": "BE VERBS CONVERSATIONS",
      "audiofile": "modules/aeb33a4d-51c4-49ef-8370-14fadaa66bf1.mp3>Copy of A1-01-Be-Verbs-Introduction.mp3",
      "drillfile": "modules/10339974-e663-4652-8132-d2d41cf50707.pdf>BE VERBS CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:06:39.357428'),
      "id": "4aafbe29ebcc413f80d2f4538b95a93b",
      "description": "BE VERBS CONVERSATIONS",
      "audiofile": "modules/aeb33a4d-51c4-49ef-8370-14fadaa66bf1.mp3>Copy of A1-01-Be-Verbs-Introduction.mp3",
      "drillfile": "modules/10339974-e663-4652-8132-d2d41cf50707.pdf>BE VERBS CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:06:39.357428'),
      "id": "4aafbe29ebcc413f80d2f4538b95a93b",
      "description": "BE VERBS CONVERSATIONS",
      "audiofile": "modules/aeb33a4d-51c4-49ef-8370-14fadaa66bf1.mp3>Copy of A1-01-Be-Verbs-Introduction.mp3",
      "drillfile": "modules/10339974-e663-4652-8132-d2d41cf50707.pdf>BE VERBS CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:06:39.357428'),
      "id": "4aafbe29ebcc413f80d2f4538b95a93b",
      "description": "BE VERBS CONVERSATIONS",
      "audiofile": "modules/aeb33a4d-51c4-49ef-8370-14fadaa66bf1.mp3>Copy of A1-01-Be-Verbs-Introduction.mp3",
      "drillfile": "modules/10339974-e663-4652-8132-d2d41cf50707.pdf>BE VERBS CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:06:39.357428'),
      "id": "4aafbe29ebcc413f80d2f4538b95a93b",
      "description": "BE VERBS CONVERSATIONS",
      "audiofile": "modules/aeb33a4d-51c4-49ef-8370-14fadaa66bf1.mp3>Copy of A1-01-Be-Verbs-Introduction.mp3",
      "drillfile": "modules/10339974-e663-4652-8132-d2d41cf50707.pdf>BE VERBS CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:06:39.357428'),
      "id": "4aafbe29ebcc413f80d2f4538b95a93b",
      "description": "BE VERBS CONVERSATIONS",
      "audiofile": "modules/aeb33a4d-51c4-49ef-8370-14fadaa66bf1.mp3>Copy of A1-01-Be-Verbs-Introduction.mp3",
      "drillfile": "modules/10339974-e663-4652-8132-d2d41cf50707.pdf>BE VERBS CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:07:09.246835'),
      "id": "3f79aff336bf407c9ba31e2c74aa6555",
      "description": "CAN ABILITIES CONVERSATION",
      "audiofile": "modules/8a457160-0288-4c52-8980-99067ba81932.mp3>Copy of A1-19-Can-Abilities.mp3",
      "drillfile": "modules/26cecdc6-ccbe-4eec-a226-26bb60934b77.pdf>CAN ABILITIES CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:07:09.246835'),
      "id": "3f79aff336bf407c9ba31e2c74aa6555",
      "description": "CAN ABILITIES CONVERSATION",
      "audiofile": "modules/8a457160-0288-4c52-8980-99067ba81932.mp3>Copy of A1-19-Can-Abilities.mp3",
      "drillfile": "modules/26cecdc6-ccbe-4eec-a226-26bb60934b77.pdf>CAN ABILITIES CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:07:09.246835'),
      "id": "3f79aff336bf407c9ba31e2c74aa6555",
      "description": "CAN ABILITIES CONVERSATION",
      "audiofile": "modules/8a457160-0288-4c52-8980-99067ba81932.mp3>Copy of A1-19-Can-Abilities.mp3",
      "drillfile": "modules/26cecdc6-ccbe-4eec-a226-26bb60934b77.pdf>CAN ABILITIES CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:07:09.246835'),
      "id": "3f79aff336bf407c9ba31e2c74aa6555",
      "description": "CAN ABILITIES CONVERSATION",
      "audiofile": "modules/8a457160-0288-4c52-8980-99067ba81932.mp3>Copy of A1-19-Can-Abilities.mp3",
      "drillfile": "modules/26cecdc6-ccbe-4eec-a226-26bb60934b77.pdf>CAN ABILITIES CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:07:09.246835'),
      "id": "3f79aff336bf407c9ba31e2c74aa6555",
      "description": "CAN ABILITIES CONVERSATION",
      "audiofile": "modules/8a457160-0288-4c52-8980-99067ba81932.mp3>Copy of A1-19-Can-Abilities.mp3",
      "drillfile": "modules/26cecdc6-ccbe-4eec-a226-26bb60934b77.pdf>CAN ABILITIES CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:07:09.246835'),
      "id": "3f79aff336bf407c9ba31e2c74aa6555",
      "description": "CAN ABILITIES CONVERSATION",
      "audiofile": "modules/8a457160-0288-4c52-8980-99067ba81932.mp3>Copy of A1-19-Can-Abilities.mp3",
      "drillfile": "modules/26cecdc6-ccbe-4eec-a226-26bb60934b77.pdf>CAN ABILITIES CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:08:10.85436'),
      "id": "01195bb37fff43f5bb148d9be2148d38",
      "description": "CAN REQUEST CONVERSATIONS",
      "audiofile": "modules/76a44dfc-1de4-4667-ae9c-056d640cb267.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/61fde9cf-694e-4364-be45-c2d7133e2018.pdf>CAN REQUEST CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:08:10.85436'),
      "id": "01195bb37fff43f5bb148d9be2148d38",
      "description": "CAN REQUEST CONVERSATIONS",
      "audiofile": "modules/76a44dfc-1de4-4667-ae9c-056d640cb267.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/61fde9cf-694e-4364-be45-c2d7133e2018.pdf>CAN REQUEST CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:08:10.85436'),
      "id": "01195bb37fff43f5bb148d9be2148d38",
      "description": "CAN REQUEST CONVERSATIONS",
      "audiofile": "modules/76a44dfc-1de4-4667-ae9c-056d640cb267.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/61fde9cf-694e-4364-be45-c2d7133e2018.pdf>CAN REQUEST CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:08:10.85436'),
      "id": "01195bb37fff43f5bb148d9be2148d38",
      "description": "CAN REQUEST CONVERSATIONS",
      "audiofile": "modules/76a44dfc-1de4-4667-ae9c-056d640cb267.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/61fde9cf-694e-4364-be45-c2d7133e2018.pdf>CAN REQUEST CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:08:10.85436'),
      "id": "01195bb37fff43f5bb148d9be2148d38",
      "description": "CAN REQUEST CONVERSATIONS",
      "audiofile": "modules/76a44dfc-1de4-4667-ae9c-056d640cb267.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/61fde9cf-694e-4364-be45-c2d7133e2018.pdf>CAN REQUEST CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:08:10.85436'),
      "id": "01195bb37fff43f5bb148d9be2148d38",
      "description": "CAN REQUEST CONVERSATIONS",
      "audiofile": "modules/76a44dfc-1de4-4667-ae9c-056d640cb267.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/61fde9cf-694e-4364-be45-c2d7133e2018.pdf>CAN REQUEST CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:08:54.431652'),
      "id": "e9ec7481607146b89a0598b0412e0688",
      "description": "CAN REQUEST CONVERSATIONS",
      "audiofile": "modules/63fda930-3f2a-43b3-9704-372520c0c646.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/549d55b0-0dbc-4791-b7f8-bfc2c72529f6.pdf>CAN REQUEST CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:08:54.431652'),
      "id": "e9ec7481607146b89a0598b0412e0688",
      "description": "CAN REQUEST CONVERSATIONS",
      "audiofile": "modules/63fda930-3f2a-43b3-9704-372520c0c646.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/549d55b0-0dbc-4791-b7f8-bfc2c72529f6.pdf>CAN REQUEST CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:08:54.431652'),
      "id": "e9ec7481607146b89a0598b0412e0688",
      "description": "CAN REQUEST CONVERSATIONS",
      "audiofile": "modules/63fda930-3f2a-43b3-9704-372520c0c646.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/549d55b0-0dbc-4791-b7f8-bfc2c72529f6.pdf>CAN REQUEST CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:08:54.431652'),
      "id": "e9ec7481607146b89a0598b0412e0688",
      "description": "CAN REQUEST CONVERSATIONS",
      "audiofile": "modules/63fda930-3f2a-43b3-9704-372520c0c646.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/549d55b0-0dbc-4791-b7f8-bfc2c72529f6.pdf>CAN REQUEST CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:08:54.431652'),
      "id": "e9ec7481607146b89a0598b0412e0688",
      "description": "CAN REQUEST CONVERSATIONS",
      "audiofile": "modules/63fda930-3f2a-43b3-9704-372520c0c646.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/549d55b0-0dbc-4791-b7f8-bfc2c72529f6.pdf>CAN REQUEST CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "28696026382d47229ad95128e880bd4b",
      "timestamp": new Date('2024-03-14 08:08:54.431652'),
      "id": "e9ec7481607146b89a0598b0412e0688",
      "description": "CAN REQUEST CONVERSATIONS",
      "audiofile": "modules/63fda930-3f2a-43b3-9704-372520c0c646.mp3>Copy of A2-19-Also-As-Well-Too.mp3",
      "drillfile": "modules/549d55b0-0dbc-4791-b7f8-bfc2c72529f6.pdf>CAN REQUEST CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:40:26.137972'),
      "id": "9455ea9ace99401db5a15595abdaffca",
      "description": "A SOUND STORY PART 1",
      "audiofile": "modules/9ba2f6fd-2cb5-4aa6-a60c-f189c35576be.mp3>rhshv-1-sst-1-tihlnw (1).mp3",
      "drillfile": "modules/cabe99e0-c050-4c24-aabf-66c439fdff70.pdf>A SOUND STORY PART 1.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:40:26.137972'),
      "id": "9455ea9ace99401db5a15595abdaffca",
      "description": "A SOUND STORY PART 1",
      "audiofile": "modules/9ba2f6fd-2cb5-4aa6-a60c-f189c35576be.mp3>rhshv-1-sst-1-tihlnw (1).mp3",
      "drillfile": "modules/cabe99e0-c050-4c24-aabf-66c439fdff70.pdf>A SOUND STORY PART 1.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:40:26.137972'),
      "id": "9455ea9ace99401db5a15595abdaffca",
      "description": "A SOUND STORY PART 1",
      "audiofile": "modules/9ba2f6fd-2cb5-4aa6-a60c-f189c35576be.mp3>rhshv-1-sst-1-tihlnw (1).mp3",
      "drillfile": "modules/cabe99e0-c050-4c24-aabf-66c439fdff70.pdf>A SOUND STORY PART 1.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:40:26.137972'),
      "id": "9455ea9ace99401db5a15595abdaffca",
      "description": "A SOUND STORY PART 1",
      "audiofile": "modules/9ba2f6fd-2cb5-4aa6-a60c-f189c35576be.mp3>rhshv-1-sst-1-tihlnw (1).mp3",
      "drillfile": "modules/cabe99e0-c050-4c24-aabf-66c439fdff70.pdf>A SOUND STORY PART 1.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:40:26.137972'),
      "id": "9455ea9ace99401db5a15595abdaffca",
      "description": "A SOUND STORY PART 1",
      "audiofile": "modules/9ba2f6fd-2cb5-4aa6-a60c-f189c35576be.mp3>rhshv-1-sst-1-tihlnw (1).mp3",
      "drillfile": "modules/cabe99e0-c050-4c24-aabf-66c439fdff70.pdf>A SOUND STORY PART 1.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:40:26.137972'),
      "id": "9455ea9ace99401db5a15595abdaffca",
      "description": "A SOUND STORY PART 1",
      "audiofile": "modules/9ba2f6fd-2cb5-4aa6-a60c-f189c35576be.mp3>rhshv-1-sst-1-tihlnw (1).mp3",
      "drillfile": "modules/cabe99e0-c050-4c24-aabf-66c439fdff70.pdf>A SOUND STORY PART 1.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:41:56.406704'),
      "id": "28d03beed85340149aced0578702f54b",
      "description": "COORDINATING CONJUNCTIONS",
      "audiofile": "modules/8219122a-4b88-4557-80d0-f150482ebc61.mp3>B1-11-Fanboys (1).mp3",
      "drillfile": "modules/fceb301d-3b9b-42a0-b692-71d862fd7113.pdf>COORDINATING CONJUNCTIONS (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:41:56.406704'),
      "id": "28d03beed85340149aced0578702f54b",
      "description": "COORDINATING CONJUNCTIONS",
      "audiofile": "modules/8219122a-4b88-4557-80d0-f150482ebc61.mp3>B1-11-Fanboys (1).mp3",
      "drillfile": "modules/fceb301d-3b9b-42a0-b692-71d862fd7113.pdf>COORDINATING CONJUNCTIONS (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:41:56.406704'),
      "id": "28d03beed85340149aced0578702f54b",
      "description": "COORDINATING CONJUNCTIONS",
      "audiofile": "modules/8219122a-4b88-4557-80d0-f150482ebc61.mp3>B1-11-Fanboys (1).mp3",
      "drillfile": "modules/fceb301d-3b9b-42a0-b692-71d862fd7113.pdf>COORDINATING CONJUNCTIONS (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:41:56.406704'),
      "id": "28d03beed85340149aced0578702f54b",
      "description": "COORDINATING CONJUNCTIONS",
      "audiofile": "modules/8219122a-4b88-4557-80d0-f150482ebc61.mp3>B1-11-Fanboys (1).mp3",
      "drillfile": "modules/fceb301d-3b9b-42a0-b692-71d862fd7113.pdf>COORDINATING CONJUNCTIONS (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:41:56.406704'),
      "id": "28d03beed85340149aced0578702f54b",
      "description": "COORDINATING CONJUNCTIONS",
      "audiofile": "modules/8219122a-4b88-4557-80d0-f150482ebc61.mp3>B1-11-Fanboys (1).mp3",
      "drillfile": "modules/fceb301d-3b9b-42a0-b692-71d862fd7113.pdf>COORDINATING CONJUNCTIONS (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:41:56.406704'),
      "id": "28d03beed85340149aced0578702f54b",
      "description": "COORDINATING CONJUNCTIONS",
      "audiofile": "modules/8219122a-4b88-4557-80d0-f150482ebc61.mp3>B1-11-Fanboys (1).mp3",
      "drillfile": "modules/fceb301d-3b9b-42a0-b692-71d862fd7113.pdf>COORDINATING CONJUNCTIONS (1).pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:43:48.331839'),
      "id": "1155cda3211244e4aa49dc4e5f1e8a8c",
      "description": "A SOUND STORY PART 2",
      "audiofile": "modules/d8d2c552-201b-480a-879c-d47e136263d3.mp3>rhshv-2-sst-2-ubmrfx (1).mp3",
      "drillfile": "modules/c049e040-ea9d-465a-8e2a-a033c71aa13f.pdf>A SOUND STORY PART 2.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:43:48.331839'),
      "id": "1155cda3211244e4aa49dc4e5f1e8a8c",
      "description": "A SOUND STORY PART 2",
      "audiofile": "modules/d8d2c552-201b-480a-879c-d47e136263d3.mp3>rhshv-2-sst-2-ubmrfx (1).mp3",
      "drillfile": "modules/c049e040-ea9d-465a-8e2a-a033c71aa13f.pdf>A SOUND STORY PART 2.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:43:48.331839'),
      "id": "1155cda3211244e4aa49dc4e5f1e8a8c",
      "description": "A SOUND STORY PART 2",
      "audiofile": "modules/d8d2c552-201b-480a-879c-d47e136263d3.mp3>rhshv-2-sst-2-ubmrfx (1).mp3",
      "drillfile": "modules/c049e040-ea9d-465a-8e2a-a033c71aa13f.pdf>A SOUND STORY PART 2.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:43:48.331839'),
      "id": "1155cda3211244e4aa49dc4e5f1e8a8c",
      "description": "A SOUND STORY PART 2",
      "audiofile": "modules/d8d2c552-201b-480a-879c-d47e136263d3.mp3>rhshv-2-sst-2-ubmrfx (1).mp3",
      "drillfile": "modules/c049e040-ea9d-465a-8e2a-a033c71aa13f.pdf>A SOUND STORY PART 2.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:43:48.331839'),
      "id": "1155cda3211244e4aa49dc4e5f1e8a8c",
      "description": "A SOUND STORY PART 2",
      "audiofile": "modules/d8d2c552-201b-480a-879c-d47e136263d3.mp3>rhshv-2-sst-2-ubmrfx (1).mp3",
      "drillfile": "modules/c049e040-ea9d-465a-8e2a-a033c71aa13f.pdf>A SOUND STORY PART 2.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:43:48.331839'),
      "id": "1155cda3211244e4aa49dc4e5f1e8a8c",
      "description": "A SOUND STORY PART 2",
      "audiofile": "modules/d8d2c552-201b-480a-879c-d47e136263d3.mp3>rhshv-2-sst-2-ubmrfx (1).mp3",
      "drillfile": "modules/c049e040-ea9d-465a-8e2a-a033c71aa13f.pdf>A SOUND STORY PART 2.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:44:06.856703'),
      "id": "189a7e1962ec4d388f91a6af2814173e",
      "description": "DAYS OF THE WEEK CONVERSATION",
      "audiofile": "modules/37753412-ea7c-4506-ac45-12555ac05e7d.mp3>A1-08-Days-of-Week (1).mp3",
      "drillfile": "modules/e0211747-05b2-4e1b-b2ef-45443ce743c7.pdf>DAYS OF THE WEEK CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:44:06.856703'),
      "id": "189a7e1962ec4d388f91a6af2814173e",
      "description": "DAYS OF THE WEEK CONVERSATION",
      "audiofile": "modules/37753412-ea7c-4506-ac45-12555ac05e7d.mp3>A1-08-Days-of-Week (1).mp3",
      "drillfile": "modules/e0211747-05b2-4e1b-b2ef-45443ce743c7.pdf>DAYS OF THE WEEK CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:44:06.856703'),
      "id": "189a7e1962ec4d388f91a6af2814173e",
      "description": "DAYS OF THE WEEK CONVERSATION",
      "audiofile": "modules/37753412-ea7c-4506-ac45-12555ac05e7d.mp3>A1-08-Days-of-Week (1).mp3",
      "drillfile": "modules/e0211747-05b2-4e1b-b2ef-45443ce743c7.pdf>DAYS OF THE WEEK CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:44:06.856703'),
      "id": "189a7e1962ec4d388f91a6af2814173e",
      "description": "DAYS OF THE WEEK CONVERSATION",
      "audiofile": "modules/37753412-ea7c-4506-ac45-12555ac05e7d.mp3>A1-08-Days-of-Week (1).mp3",
      "drillfile": "modules/e0211747-05b2-4e1b-b2ef-45443ce743c7.pdf>DAYS OF THE WEEK CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:44:06.856703'),
      "id": "189a7e1962ec4d388f91a6af2814173e",
      "description": "DAYS OF THE WEEK CONVERSATION",
      "audiofile": "modules/37753412-ea7c-4506-ac45-12555ac05e7d.mp3>A1-08-Days-of-Week (1).mp3",
      "drillfile": "modules/e0211747-05b2-4e1b-b2ef-45443ce743c7.pdf>DAYS OF THE WEEK CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:44:06.856703'),
      "id": "189a7e1962ec4d388f91a6af2814173e",
      "description": "DAYS OF THE WEEK CONVERSATION",
      "audiofile": "modules/37753412-ea7c-4506-ac45-12555ac05e7d.mp3>A1-08-Days-of-Week (1).mp3",
      "drillfile": "modules/e0211747-05b2-4e1b-b2ef-45443ce743c7.pdf>DAYS OF THE WEEK CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:45:47.944319'),
      "id": "af5ef61984e647f1a6d28206d5ec90b4",
      "description": "A SOUND STORY PART 3",
      "audiofile": "modules/c0d8bc88-c153-414a-9c5a-22bf72a4d3d3.mp3>rhshv-3-sst-3-esjocda (1).mp3",
      "drillfile": "modules/0876acf1-005d-4908-9016-11ceff64f9c6.pdf>a sound story 3.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:45:47.944319'),
      "id": "af5ef61984e647f1a6d28206d5ec90b4",
      "description": "A SOUND STORY PART 3",
      "audiofile": "modules/c0d8bc88-c153-414a-9c5a-22bf72a4d3d3.mp3>rhshv-3-sst-3-esjocda (1).mp3",
      "drillfile": "modules/0876acf1-005d-4908-9016-11ceff64f9c6.pdf>a sound story 3.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:45:47.944319'),
      "id": "af5ef61984e647f1a6d28206d5ec90b4",
      "description": "A SOUND STORY PART 3",
      "audiofile": "modules/c0d8bc88-c153-414a-9c5a-22bf72a4d3d3.mp3>rhshv-3-sst-3-esjocda (1).mp3",
      "drillfile": "modules/0876acf1-005d-4908-9016-11ceff64f9c6.pdf>a sound story 3.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:45:47.944319'),
      "id": "af5ef61984e647f1a6d28206d5ec90b4",
      "description": "A SOUND STORY PART 3",
      "audiofile": "modules/c0d8bc88-c153-414a-9c5a-22bf72a4d3d3.mp3>rhshv-3-sst-3-esjocda (1).mp3",
      "drillfile": "modules/0876acf1-005d-4908-9016-11ceff64f9c6.pdf>a sound story 3.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:45:47.944319'),
      "id": "af5ef61984e647f1a6d28206d5ec90b4",
      "description": "A SOUND STORY PART 3",
      "audiofile": "modules/c0d8bc88-c153-414a-9c5a-22bf72a4d3d3.mp3>rhshv-3-sst-3-esjocda (1).mp3",
      "drillfile": "modules/0876acf1-005d-4908-9016-11ceff64f9c6.pdf>a sound story 3.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:45:47.944319'),
      "id": "af5ef61984e647f1a6d28206d5ec90b4",
      "description": "A SOUND STORY PART 3",
      "audiofile": "modules/c0d8bc88-c153-414a-9c5a-22bf72a4d3d3.mp3>rhshv-3-sst-3-esjocda (1).mp3",
      "drillfile": "modules/0876acf1-005d-4908-9016-11ceff64f9c6.pdf>a sound story 3.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:15:54.222682'),
      "id": "72b0420a1aa04268ba6fb8732f6d047a",
      "description": "HOSPITALITY",
      "audiofile": "modules/b215936c-2871-4e8c-b017-614bb2e7f412.mp3>DRINK.mp3",
      "drillfile": "modules/28d646e5-c7a7-42db-9283-da24aaf5f609.pdf>10 HOSPITALITY.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:15:54.222682'),
      "id": "72b0420a1aa04268ba6fb8732f6d047a",
      "description": "HOSPITALITY",
      "audiofile": "modules/b215936c-2871-4e8c-b017-614bb2e7f412.mp3>DRINK.mp3",
      "drillfile": "modules/28d646e5-c7a7-42db-9283-da24aaf5f609.pdf>10 HOSPITALITY.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:15:54.222682'),
      "id": "72b0420a1aa04268ba6fb8732f6d047a",
      "description": "HOSPITALITY",
      "audiofile": "modules/b215936c-2871-4e8c-b017-614bb2e7f412.mp3>DRINK.mp3",
      "drillfile": "modules/28d646e5-c7a7-42db-9283-da24aaf5f609.pdf>10 HOSPITALITY.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:15:54.222682'),
      "id": "72b0420a1aa04268ba6fb8732f6d047a",
      "description": "HOSPITALITY",
      "audiofile": "modules/b215936c-2871-4e8c-b017-614bb2e7f412.mp3>DRINK.mp3",
      "drillfile": "modules/28d646e5-c7a7-42db-9283-da24aaf5f609.pdf>10 HOSPITALITY.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:15:54.222682'),
      "id": "72b0420a1aa04268ba6fb8732f6d047a",
      "description": "HOSPITALITY",
      "audiofile": "modules/b215936c-2871-4e8c-b017-614bb2e7f412.mp3>DRINK.mp3",
      "drillfile": "modules/28d646e5-c7a7-42db-9283-da24aaf5f609.pdf>10 HOSPITALITY.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:15:54.222682'),
      "id": "72b0420a1aa04268ba6fb8732f6d047a",
      "description": "HOSPITALITY",
      "audiofile": "modules/b215936c-2871-4e8c-b017-614bb2e7f412.mp3>DRINK.mp3",
      "drillfile": "modules/28d646e5-c7a7-42db-9283-da24aaf5f609.pdf>10 HOSPITALITY.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:46:33.306641'),
      "id": "2a6178821b6f43e397e47707002eabca",
      "description": "A SOUND STORY PART 4",
      "audiofile": "modules/445576d3-5fa9-4c76-8b59-e0564b727278.mp3>rhshv-4-sst-4-vgpkyqz (1).mp3",
      "drillfile": "modules/8fff24e9-6fa5-4605-b3eb-aa733bd2c803.pdf>a sound story 4 (1).pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:46:33.306641'),
      "id": "2a6178821b6f43e397e47707002eabca",
      "description": "A SOUND STORY PART 4",
      "audiofile": "modules/445576d3-5fa9-4c76-8b59-e0564b727278.mp3>rhshv-4-sst-4-vgpkyqz (1).mp3",
      "drillfile": "modules/8fff24e9-6fa5-4605-b3eb-aa733bd2c803.pdf>a sound story 4 (1).pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:46:33.306641'),
      "id": "2a6178821b6f43e397e47707002eabca",
      "description": "A SOUND STORY PART 4",
      "audiofile": "modules/445576d3-5fa9-4c76-8b59-e0564b727278.mp3>rhshv-4-sst-4-vgpkyqz (1).mp3",
      "drillfile": "modules/8fff24e9-6fa5-4605-b3eb-aa733bd2c803.pdf>a sound story 4 (1).pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:46:33.306641'),
      "id": "2a6178821b6f43e397e47707002eabca",
      "description": "A SOUND STORY PART 4",
      "audiofile": "modules/445576d3-5fa9-4c76-8b59-e0564b727278.mp3>rhshv-4-sst-4-vgpkyqz (1).mp3",
      "drillfile": "modules/8fff24e9-6fa5-4605-b3eb-aa733bd2c803.pdf>a sound story 4 (1).pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:46:33.306641'),
      "id": "2a6178821b6f43e397e47707002eabca",
      "description": "A SOUND STORY PART 4",
      "audiofile": "modules/445576d3-5fa9-4c76-8b59-e0564b727278.mp3>rhshv-4-sst-4-vgpkyqz (1).mp3",
      "drillfile": "modules/8fff24e9-6fa5-4605-b3eb-aa733bd2c803.pdf>a sound story 4 (1).pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:46:33.306641'),
      "id": "2a6178821b6f43e397e47707002eabca",
      "description": "A SOUND STORY PART 4",
      "audiofile": "modules/445576d3-5fa9-4c76-8b59-e0564b727278.mp3>rhshv-4-sst-4-vgpkyqz (1).mp3",
      "drillfile": "modules/8fff24e9-6fa5-4605-b3eb-aa733bd2c803.pdf>a sound story 4 (1).pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:46:37.675839'),
      "id": "1f48668248d44d6084875659e539defd",
      "description": "Consonant Blends Part 1 Beginning",
      "audiofile": "modules/23de1874-abb2-4678-b786-046c501a30d6.mp3>w-ch-pp1-begbl.mp3",
      "drillfile": "modules/645c4dfb-8017-47d0-85bb-6ab948816c67.pdf>CONSONANT BLENDS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:46:37.675839'),
      "id": "1f48668248d44d6084875659e539defd",
      "description": "Consonant Blends Part 1 Beginning",
      "audiofile": "modules/23de1874-abb2-4678-b786-046c501a30d6.mp3>w-ch-pp1-begbl.mp3",
      "drillfile": "modules/645c4dfb-8017-47d0-85bb-6ab948816c67.pdf>CONSONANT BLENDS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:46:37.675839'),
      "id": "1f48668248d44d6084875659e539defd",
      "description": "Consonant Blends Part 1 Beginning",
      "audiofile": "modules/23de1874-abb2-4678-b786-046c501a30d6.mp3>w-ch-pp1-begbl.mp3",
      "drillfile": "modules/645c4dfb-8017-47d0-85bb-6ab948816c67.pdf>CONSONANT BLENDS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:46:37.675839'),
      "id": "1f48668248d44d6084875659e539defd",
      "description": "Consonant Blends Part 1 Beginning",
      "audiofile": "modules/23de1874-abb2-4678-b786-046c501a30d6.mp3>w-ch-pp1-begbl.mp3",
      "drillfile": "modules/645c4dfb-8017-47d0-85bb-6ab948816c67.pdf>CONSONANT BLENDS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:46:37.675839'),
      "id": "1f48668248d44d6084875659e539defd",
      "description": "Consonant Blends Part 1 Beginning",
      "audiofile": "modules/23de1874-abb2-4678-b786-046c501a30d6.mp3>w-ch-pp1-begbl.mp3",
      "drillfile": "modules/645c4dfb-8017-47d0-85bb-6ab948816c67.pdf>CONSONANT BLENDS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:46:37.675839'),
      "id": "1f48668248d44d6084875659e539defd",
      "description": "Consonant Blends Part 1 Beginning",
      "audiofile": "modules/23de1874-abb2-4678-b786-046c501a30d6.mp3>w-ch-pp1-begbl.mp3",
      "drillfile": "modules/645c4dfb-8017-47d0-85bb-6ab948816c67.pdf>CONSONANT BLENDS.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:47:16.65841'),
      "id": "00e456bc1e1e4467900b2098fa1555a2",
      "description": "A SOUND STORY PART 5",
      "audiofile": "modules/14af00f8-f4ee-4626-8b82-a2b65882be56.mp3>rhshv-8-sdst2-sh-th (2).mp3",
      "drillfile": "modules/eee1d30c-46aa-47a3-a7e2-6cc58da33453.pdf>A SOUND STORY 5.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:47:16.65841'),
      "id": "00e456bc1e1e4467900b2098fa1555a2",
      "description": "A SOUND STORY PART 5",
      "audiofile": "modules/14af00f8-f4ee-4626-8b82-a2b65882be56.mp3>rhshv-8-sdst2-sh-th (2).mp3",
      "drillfile": "modules/eee1d30c-46aa-47a3-a7e2-6cc58da33453.pdf>A SOUND STORY 5.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:47:16.65841'),
      "id": "00e456bc1e1e4467900b2098fa1555a2",
      "description": "A SOUND STORY PART 5",
      "audiofile": "modules/14af00f8-f4ee-4626-8b82-a2b65882be56.mp3>rhshv-8-sdst2-sh-th (2).mp3",
      "drillfile": "modules/eee1d30c-46aa-47a3-a7e2-6cc58da33453.pdf>A SOUND STORY 5.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:47:16.65841'),
      "id": "00e456bc1e1e4467900b2098fa1555a2",
      "description": "A SOUND STORY PART 5",
      "audiofile": "modules/14af00f8-f4ee-4626-8b82-a2b65882be56.mp3>rhshv-8-sdst2-sh-th (2).mp3",
      "drillfile": "modules/eee1d30c-46aa-47a3-a7e2-6cc58da33453.pdf>A SOUND STORY 5.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:47:16.65841'),
      "id": "00e456bc1e1e4467900b2098fa1555a2",
      "description": "A SOUND STORY PART 5",
      "audiofile": "modules/14af00f8-f4ee-4626-8b82-a2b65882be56.mp3>rhshv-8-sdst2-sh-th (2).mp3",
      "drillfile": "modules/eee1d30c-46aa-47a3-a7e2-6cc58da33453.pdf>A SOUND STORY 5.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:47:16.65841'),
      "id": "00e456bc1e1e4467900b2098fa1555a2",
      "description": "A SOUND STORY PART 5",
      "audiofile": "modules/14af00f8-f4ee-4626-8b82-a2b65882be56.mp3>rhshv-8-sdst2-sh-th (2).mp3",
      "drillfile": "modules/eee1d30c-46aa-47a3-a7e2-6cc58da33453.pdf>A SOUND STORY 5.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:48:02.618455'),
      "id": "51db02b95d854bcc82b8d904910211b8",
      "description": "ADVERBS OF FREQUENCY CONVERSATION",
      "audiofile": "modules/b40a2f86-8b95-4b49-8a7e-9fd501aea74b.mp3>Copy of A1-20-Adverbs-Frequency.mp3",
      "drillfile": "modules/8d827b25-4ff3-44d2-a2d7-b414979eb340.pdf>ADVERBS OF FREQUENCY CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:48:02.618455'),
      "id": "51db02b95d854bcc82b8d904910211b8",
      "description": "ADVERBS OF FREQUENCY CONVERSATION",
      "audiofile": "modules/b40a2f86-8b95-4b49-8a7e-9fd501aea74b.mp3>Copy of A1-20-Adverbs-Frequency.mp3",
      "drillfile": "modules/8d827b25-4ff3-44d2-a2d7-b414979eb340.pdf>ADVERBS OF FREQUENCY CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:48:02.618455'),
      "id": "51db02b95d854bcc82b8d904910211b8",
      "description": "ADVERBS OF FREQUENCY CONVERSATION",
      "audiofile": "modules/b40a2f86-8b95-4b49-8a7e-9fd501aea74b.mp3>Copy of A1-20-Adverbs-Frequency.mp3",
      "drillfile": "modules/8d827b25-4ff3-44d2-a2d7-b414979eb340.pdf>ADVERBS OF FREQUENCY CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:48:02.618455'),
      "id": "51db02b95d854bcc82b8d904910211b8",
      "description": "ADVERBS OF FREQUENCY CONVERSATION",
      "audiofile": "modules/b40a2f86-8b95-4b49-8a7e-9fd501aea74b.mp3>Copy of A1-20-Adverbs-Frequency.mp3",
      "drillfile": "modules/8d827b25-4ff3-44d2-a2d7-b414979eb340.pdf>ADVERBS OF FREQUENCY CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:48:02.618455'),
      "id": "51db02b95d854bcc82b8d904910211b8",
      "description": "ADVERBS OF FREQUENCY CONVERSATION",
      "audiofile": "modules/b40a2f86-8b95-4b49-8a7e-9fd501aea74b.mp3>Copy of A1-20-Adverbs-Frequency.mp3",
      "drillfile": "modules/8d827b25-4ff3-44d2-a2d7-b414979eb340.pdf>ADVERBS OF FREQUENCY CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:48:02.618455'),
      "id": "51db02b95d854bcc82b8d904910211b8",
      "description": "ADVERBS OF FREQUENCY CONVERSATION",
      "audiofile": "modules/b40a2f86-8b95-4b49-8a7e-9fd501aea74b.mp3>Copy of A1-20-Adverbs-Frequency.mp3",
      "drillfile": "modules/8d827b25-4ff3-44d2-a2d7-b414979eb340.pdf>ADVERBS OF FREQUENCY CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:48:31.458919'),
      "id": "42ef7dbabc8b4af2a2576cfdca248d89",
      "description": "Consonant Blends Part 2 Ending",
      "audiofile": "modules/f585a640-662a-4ab8-a30f-1935f992ee53.mp3>w-ch-pp1-endbl.mp3",
      "drillfile": "modules/662b9f00-cc7e-4834-8ae4-95760e5fb436.pdf>ENDING CONSONANT BLENDS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:48:31.458919'),
      "id": "42ef7dbabc8b4af2a2576cfdca248d89",
      "description": "Consonant Blends Part 2 Ending",
      "audiofile": "modules/f585a640-662a-4ab8-a30f-1935f992ee53.mp3>w-ch-pp1-endbl.mp3",
      "drillfile": "modules/662b9f00-cc7e-4834-8ae4-95760e5fb436.pdf>ENDING CONSONANT BLENDS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:48:31.458919'),
      "id": "42ef7dbabc8b4af2a2576cfdca248d89",
      "description": "Consonant Blends Part 2 Ending",
      "audiofile": "modules/f585a640-662a-4ab8-a30f-1935f992ee53.mp3>w-ch-pp1-endbl.mp3",
      "drillfile": "modules/662b9f00-cc7e-4834-8ae4-95760e5fb436.pdf>ENDING CONSONANT BLENDS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:48:31.458919'),
      "id": "42ef7dbabc8b4af2a2576cfdca248d89",
      "description": "Consonant Blends Part 2 Ending",
      "audiofile": "modules/f585a640-662a-4ab8-a30f-1935f992ee53.mp3>w-ch-pp1-endbl.mp3",
      "drillfile": "modules/662b9f00-cc7e-4834-8ae4-95760e5fb436.pdf>ENDING CONSONANT BLENDS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:48:31.458919'),
      "id": "42ef7dbabc8b4af2a2576cfdca248d89",
      "description": "Consonant Blends Part 2 Ending",
      "audiofile": "modules/f585a640-662a-4ab8-a30f-1935f992ee53.mp3>w-ch-pp1-endbl.mp3",
      "drillfile": "modules/662b9f00-cc7e-4834-8ae4-95760e5fb436.pdf>ENDING CONSONANT BLENDS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:48:31.458919'),
      "id": "42ef7dbabc8b4af2a2576cfdca248d89",
      "description": "Consonant Blends Part 2 Ending",
      "audiofile": "modules/f585a640-662a-4ab8-a30f-1935f992ee53.mp3>w-ch-pp1-endbl.mp3",
      "drillfile": "modules/662b9f00-cc7e-4834-8ae4-95760e5fb436.pdf>ENDING CONSONANT BLENDS.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:48:42.342577'),
      "id": "1281ea0ed9374cbd97d40fccf7572170",
      "description": "A SOUND STORY PART 6",
      "audiofile": "modules/ae50df15-bceb-4fb9-8edd-c8cceac90ebc.mp3>rhshv-9-sdst2-2-o-u (2).mp3",
      "drillfile": "modules/beda7a5b-7307-43af-8c03-c0370f6ce040.pdf>A SOUND STORY PART 6.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:48:42.342577'),
      "id": "1281ea0ed9374cbd97d40fccf7572170",
      "description": "A SOUND STORY PART 6",
      "audiofile": "modules/ae50df15-bceb-4fb9-8edd-c8cceac90ebc.mp3>rhshv-9-sdst2-2-o-u (2).mp3",
      "drillfile": "modules/beda7a5b-7307-43af-8c03-c0370f6ce040.pdf>A SOUND STORY PART 6.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:48:42.342577'),
      "id": "1281ea0ed9374cbd97d40fccf7572170",
      "description": "A SOUND STORY PART 6",
      "audiofile": "modules/ae50df15-bceb-4fb9-8edd-c8cceac90ebc.mp3>rhshv-9-sdst2-2-o-u (2).mp3",
      "drillfile": "modules/beda7a5b-7307-43af-8c03-c0370f6ce040.pdf>A SOUND STORY PART 6.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:48:42.342577'),
      "id": "1281ea0ed9374cbd97d40fccf7572170",
      "description": "A SOUND STORY PART 6",
      "audiofile": "modules/ae50df15-bceb-4fb9-8edd-c8cceac90ebc.mp3>rhshv-9-sdst2-2-o-u (2).mp3",
      "drillfile": "modules/beda7a5b-7307-43af-8c03-c0370f6ce040.pdf>A SOUND STORY PART 6.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:48:42.342577'),
      "id": "1281ea0ed9374cbd97d40fccf7572170",
      "description": "A SOUND STORY PART 6",
      "audiofile": "modules/ae50df15-bceb-4fb9-8edd-c8cceac90ebc.mp3>rhshv-9-sdst2-2-o-u (2).mp3",
      "drillfile": "modules/beda7a5b-7307-43af-8c03-c0370f6ce040.pdf>A SOUND STORY PART 6.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:48:42.342577'),
      "id": "1281ea0ed9374cbd97d40fccf7572170",
      "description": "A SOUND STORY PART 6",
      "audiofile": "modules/ae50df15-bceb-4fb9-8edd-c8cceac90ebc.mp3>rhshv-9-sdst2-2-o-u (2).mp3",
      "drillfile": "modules/beda7a5b-7307-43af-8c03-c0370f6ce040.pdf>A SOUND STORY PART 6.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:49:24.551389'),
      "id": "c09d91d6cd354b47b8004a9ff61577a1",
      "description": "A SOUND STORY PART 7",
      "audiofile": "modules/4e50e521-ca5a-436c-a785-2218fbda57d0.mp3>rhshv-10-sdst2-3-oi-meas (1).mp3",
      "drillfile": "modules/d9e10272-29a6-47eb-8e39-649cb403523a.pdf>a sound story part 7.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:49:24.551389'),
      "id": "c09d91d6cd354b47b8004a9ff61577a1",
      "description": "A SOUND STORY PART 7",
      "audiofile": "modules/4e50e521-ca5a-436c-a785-2218fbda57d0.mp3>rhshv-10-sdst2-3-oi-meas (1).mp3",
      "drillfile": "modules/d9e10272-29a6-47eb-8e39-649cb403523a.pdf>a sound story part 7.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:49:24.551389'),
      "id": "c09d91d6cd354b47b8004a9ff61577a1",
      "description": "A SOUND STORY PART 7",
      "audiofile": "modules/4e50e521-ca5a-436c-a785-2218fbda57d0.mp3>rhshv-10-sdst2-3-oi-meas (1).mp3",
      "drillfile": "modules/d9e10272-29a6-47eb-8e39-649cb403523a.pdf>a sound story part 7.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:49:24.551389'),
      "id": "c09d91d6cd354b47b8004a9ff61577a1",
      "description": "A SOUND STORY PART 7",
      "audiofile": "modules/4e50e521-ca5a-436c-a785-2218fbda57d0.mp3>rhshv-10-sdst2-3-oi-meas (1).mp3",
      "drillfile": "modules/d9e10272-29a6-47eb-8e39-649cb403523a.pdf>a sound story part 7.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:49:24.551389'),
      "id": "c09d91d6cd354b47b8004a9ff61577a1",
      "description": "A SOUND STORY PART 7",
      "audiofile": "modules/4e50e521-ca5a-436c-a785-2218fbda57d0.mp3>rhshv-10-sdst2-3-oi-meas (1).mp3",
      "drillfile": "modules/d9e10272-29a6-47eb-8e39-649cb403523a.pdf>a sound story part 7.pdf"
    },
    {
      "practiceid": "97c56577b22640c58559e5469064fffe",
      "timestamp": new Date('2024-03-14 08:49:24.551389'),
      "id": "c09d91d6cd354b47b8004a9ff61577a1",
      "description": "A SOUND STORY PART 7",
      "audiofile": "modules/4e50e521-ca5a-436c-a785-2218fbda57d0.mp3>rhshv-10-sdst2-3-oi-meas (1).mp3",
      "drillfile": "modules/d9e10272-29a6-47eb-8e39-649cb403523a.pdf>a sound story part 7.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:49:31.134166'),
      "id": "615e5376d65c4783bf6699405aee9e15",
      "description": "Consonant Combinations",
      "audiofile": "modules/f838d375-6bd8-4676-a1a6-296f4fa20d6b.mp3>CONSONANT COMBINATIONS SOUNDS.mp3",
      "drillfile": "modules/4e84acbe-c593-413a-ac67-e871d3a60fda.pdf>CONSONANT COMBINATIONS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:49:31.134166'),
      "id": "615e5376d65c4783bf6699405aee9e15",
      "description": "Consonant Combinations",
      "audiofile": "modules/f838d375-6bd8-4676-a1a6-296f4fa20d6b.mp3>CONSONANT COMBINATIONS SOUNDS.mp3",
      "drillfile": "modules/4e84acbe-c593-413a-ac67-e871d3a60fda.pdf>CONSONANT COMBINATIONS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:49:31.134166'),
      "id": "615e5376d65c4783bf6699405aee9e15",
      "description": "Consonant Combinations",
      "audiofile": "modules/f838d375-6bd8-4676-a1a6-296f4fa20d6b.mp3>CONSONANT COMBINATIONS SOUNDS.mp3",
      "drillfile": "modules/4e84acbe-c593-413a-ac67-e871d3a60fda.pdf>CONSONANT COMBINATIONS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:49:31.134166'),
      "id": "615e5376d65c4783bf6699405aee9e15",
      "description": "Consonant Combinations",
      "audiofile": "modules/f838d375-6bd8-4676-a1a6-296f4fa20d6b.mp3>CONSONANT COMBINATIONS SOUNDS.mp3",
      "drillfile": "modules/4e84acbe-c593-413a-ac67-e871d3a60fda.pdf>CONSONANT COMBINATIONS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:49:31.134166'),
      "id": "615e5376d65c4783bf6699405aee9e15",
      "description": "Consonant Combinations",
      "audiofile": "modules/f838d375-6bd8-4676-a1a6-296f4fa20d6b.mp3>CONSONANT COMBINATIONS SOUNDS.mp3",
      "drillfile": "modules/4e84acbe-c593-413a-ac67-e871d3a60fda.pdf>CONSONANT COMBINATIONS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:49:31.134166'),
      "id": "615e5376d65c4783bf6699405aee9e15",
      "description": "Consonant Combinations",
      "audiofile": "modules/f838d375-6bd8-4676-a1a6-296f4fa20d6b.mp3>CONSONANT COMBINATIONS SOUNDS.mp3",
      "drillfile": "modules/4e84acbe-c593-413a-ac67-e871d3a60fda.pdf>CONSONANT COMBINATIONS.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:49:41.752268'),
      "id": "ca2b54854eed43d0aae48ebabfcf7de8",
      "description": "ADVERBS OF QTY CONVERSATIONS",
      "audiofile": "modules/f5d5d07e-c017-4fe5-8238-813bbfb45fdc.mp3>Copy of A2-18-Adverbs-Much-A-Lot.mp3",
      "drillfile": "modules/974d0810-77ce-4cee-829e-456932cd00ef.pdf>ADVERBS OF QTY CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:49:41.752268'),
      "id": "ca2b54854eed43d0aae48ebabfcf7de8",
      "description": "ADVERBS OF QTY CONVERSATIONS",
      "audiofile": "modules/f5d5d07e-c017-4fe5-8238-813bbfb45fdc.mp3>Copy of A2-18-Adverbs-Much-A-Lot.mp3",
      "drillfile": "modules/974d0810-77ce-4cee-829e-456932cd00ef.pdf>ADVERBS OF QTY CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:49:41.752268'),
      "id": "ca2b54854eed43d0aae48ebabfcf7de8",
      "description": "ADVERBS OF QTY CONVERSATIONS",
      "audiofile": "modules/f5d5d07e-c017-4fe5-8238-813bbfb45fdc.mp3>Copy of A2-18-Adverbs-Much-A-Lot.mp3",
      "drillfile": "modules/974d0810-77ce-4cee-829e-456932cd00ef.pdf>ADVERBS OF QTY CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:49:41.752268'),
      "id": "ca2b54854eed43d0aae48ebabfcf7de8",
      "description": "ADVERBS OF QTY CONVERSATIONS",
      "audiofile": "modules/f5d5d07e-c017-4fe5-8238-813bbfb45fdc.mp3>Copy of A2-18-Adverbs-Much-A-Lot.mp3",
      "drillfile": "modules/974d0810-77ce-4cee-829e-456932cd00ef.pdf>ADVERBS OF QTY CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:49:41.752268'),
      "id": "ca2b54854eed43d0aae48ebabfcf7de8",
      "description": "ADVERBS OF QTY CONVERSATIONS",
      "audiofile": "modules/f5d5d07e-c017-4fe5-8238-813bbfb45fdc.mp3>Copy of A2-18-Adverbs-Much-A-Lot.mp3",
      "drillfile": "modules/974d0810-77ce-4cee-829e-456932cd00ef.pdf>ADVERBS OF QTY CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:49:41.752268'),
      "id": "ca2b54854eed43d0aae48ebabfcf7de8",
      "description": "ADVERBS OF QTY CONVERSATIONS",
      "audiofile": "modules/f5d5d07e-c017-4fe5-8238-813bbfb45fdc.mp3>Copy of A2-18-Adverbs-Much-A-Lot.mp3",
      "drillfile": "modules/974d0810-77ce-4cee-829e-456932cd00ef.pdf>ADVERBS OF QTY CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:51:28.424571'),
      "id": "35a2c3837bcb4ab88c2bb69acdbf6b56",
      "description": "ADVERBS OF TIME CONVERSATION",
      "audiofile": "modules/ba5a64ce-faef-423c-9511-103d9212b2b0.mp3>Copy of A2-16-Adverbs-of-Time.mp3",
      "drillfile": "modules/550870a9-0844-43c0-9508-4a3f1126b386.pdf>ADVERBS OF TIME CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:51:28.424571'),
      "id": "35a2c3837bcb4ab88c2bb69acdbf6b56",
      "description": "ADVERBS OF TIME CONVERSATION",
      "audiofile": "modules/ba5a64ce-faef-423c-9511-103d9212b2b0.mp3>Copy of A2-16-Adverbs-of-Time.mp3",
      "drillfile": "modules/550870a9-0844-43c0-9508-4a3f1126b386.pdf>ADVERBS OF TIME CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:51:28.424571'),
      "id": "35a2c3837bcb4ab88c2bb69acdbf6b56",
      "description": "ADVERBS OF TIME CONVERSATION",
      "audiofile": "modules/ba5a64ce-faef-423c-9511-103d9212b2b0.mp3>Copy of A2-16-Adverbs-of-Time.mp3",
      "drillfile": "modules/550870a9-0844-43c0-9508-4a3f1126b386.pdf>ADVERBS OF TIME CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:51:28.424571'),
      "id": "35a2c3837bcb4ab88c2bb69acdbf6b56",
      "description": "ADVERBS OF TIME CONVERSATION",
      "audiofile": "modules/ba5a64ce-faef-423c-9511-103d9212b2b0.mp3>Copy of A2-16-Adverbs-of-Time.mp3",
      "drillfile": "modules/550870a9-0844-43c0-9508-4a3f1126b386.pdf>ADVERBS OF TIME CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:51:28.424571'),
      "id": "35a2c3837bcb4ab88c2bb69acdbf6b56",
      "description": "ADVERBS OF TIME CONVERSATION",
      "audiofile": "modules/ba5a64ce-faef-423c-9511-103d9212b2b0.mp3>Copy of A2-16-Adverbs-of-Time.mp3",
      "drillfile": "modules/550870a9-0844-43c0-9508-4a3f1126b386.pdf>ADVERBS OF TIME CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:51:28.424571'),
      "id": "35a2c3837bcb4ab88c2bb69acdbf6b56",
      "description": "ADVERBS OF TIME CONVERSATION",
      "audiofile": "modules/ba5a64ce-faef-423c-9511-103d9212b2b0.mp3>Copy of A2-16-Adverbs-of-Time.mp3",
      "drillfile": "modules/550870a9-0844-43c0-9508-4a3f1126b386.pdf>ADVERBS OF TIME CONVERSATION - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:52:56.824446'),
      "id": "6ef97318d8554d59886f9216e2066bdb",
      "description": "BE VERBS CONVERSATIONS",
      "audiofile": "modules/cb93a02c-03ab-4d5c-963e-f7d600ece8d1.mp3>Copy of A1-01-Be-Verbs-Introduction.mp3",
      "drillfile": "modules/700aba69-7df9-4926-b52b-b876c2cd7bff.pdf>BE VERBS CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:52:56.824446'),
      "id": "6ef97318d8554d59886f9216e2066bdb",
      "description": "BE VERBS CONVERSATIONS",
      "audiofile": "modules/cb93a02c-03ab-4d5c-963e-f7d600ece8d1.mp3>Copy of A1-01-Be-Verbs-Introduction.mp3",
      "drillfile": "modules/700aba69-7df9-4926-b52b-b876c2cd7bff.pdf>BE VERBS CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:52:56.824446'),
      "id": "6ef97318d8554d59886f9216e2066bdb",
      "description": "BE VERBS CONVERSATIONS",
      "audiofile": "modules/cb93a02c-03ab-4d5c-963e-f7d600ece8d1.mp3>Copy of A1-01-Be-Verbs-Introduction.mp3",
      "drillfile": "modules/700aba69-7df9-4926-b52b-b876c2cd7bff.pdf>BE VERBS CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:52:56.824446'),
      "id": "6ef97318d8554d59886f9216e2066bdb",
      "description": "BE VERBS CONVERSATIONS",
      "audiofile": "modules/cb93a02c-03ab-4d5c-963e-f7d600ece8d1.mp3>Copy of A1-01-Be-Verbs-Introduction.mp3",
      "drillfile": "modules/700aba69-7df9-4926-b52b-b876c2cd7bff.pdf>BE VERBS CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:52:56.824446'),
      "id": "6ef97318d8554d59886f9216e2066bdb",
      "description": "BE VERBS CONVERSATIONS",
      "audiofile": "modules/cb93a02c-03ab-4d5c-963e-f7d600ece8d1.mp3>Copy of A1-01-Be-Verbs-Introduction.mp3",
      "drillfile": "modules/700aba69-7df9-4926-b52b-b876c2cd7bff.pdf>BE VERBS CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "7a54957effe6432ebec94791e4eac63a",
      "timestamp": new Date('2024-03-14 08:52:56.824446'),
      "id": "6ef97318d8554d59886f9216e2066bdb",
      "description": "BE VERBS CONVERSATIONS",
      "audiofile": "modules/cb93a02c-03ab-4d5c-963e-f7d600ece8d1.mp3>Copy of A1-01-Be-Verbs-Introduction.mp3",
      "drillfile": "modules/700aba69-7df9-4926-b52b-b876c2cd7bff.pdf>BE VERBS CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:53:07.000102'),
      "id": "f1244e3c26274ac887e7843338ffe8eb",
      "description": "DEMONSTRATIVE ADJECTIVES",
      "audiofile": "modules/d7827cda-828a-4378-81aa-19edd0b2be95.mp3>A1-01-Be-Verbs-Jobs-Family.mp3",
      "drillfile": "modules/89812913-e22b-4af6-839f-c4538f8111a9.pdf>DEMONSTRATIVE ADJECTIVES.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:53:07.000102'),
      "id": "f1244e3c26274ac887e7843338ffe8eb",
      "description": "DEMONSTRATIVE ADJECTIVES",
      "audiofile": "modules/d7827cda-828a-4378-81aa-19edd0b2be95.mp3>A1-01-Be-Verbs-Jobs-Family.mp3",
      "drillfile": "modules/89812913-e22b-4af6-839f-c4538f8111a9.pdf>DEMONSTRATIVE ADJECTIVES.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:53:07.000102'),
      "id": "f1244e3c26274ac887e7843338ffe8eb",
      "description": "DEMONSTRATIVE ADJECTIVES",
      "audiofile": "modules/d7827cda-828a-4378-81aa-19edd0b2be95.mp3>A1-01-Be-Verbs-Jobs-Family.mp3",
      "drillfile": "modules/89812913-e22b-4af6-839f-c4538f8111a9.pdf>DEMONSTRATIVE ADJECTIVES.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:53:07.000102'),
      "id": "f1244e3c26274ac887e7843338ffe8eb",
      "description": "DEMONSTRATIVE ADJECTIVES",
      "audiofile": "modules/d7827cda-828a-4378-81aa-19edd0b2be95.mp3>A1-01-Be-Verbs-Jobs-Family.mp3",
      "drillfile": "modules/89812913-e22b-4af6-839f-c4538f8111a9.pdf>DEMONSTRATIVE ADJECTIVES.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:53:07.000102'),
      "id": "f1244e3c26274ac887e7843338ffe8eb",
      "description": "DEMONSTRATIVE ADJECTIVES",
      "audiofile": "modules/d7827cda-828a-4378-81aa-19edd0b2be95.mp3>A1-01-Be-Verbs-Jobs-Family.mp3",
      "drillfile": "modules/89812913-e22b-4af6-839f-c4538f8111a9.pdf>DEMONSTRATIVE ADJECTIVES.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:53:07.000102'),
      "id": "f1244e3c26274ac887e7843338ffe8eb",
      "description": "DEMONSTRATIVE ADJECTIVES",
      "audiofile": "modules/d7827cda-828a-4378-81aa-19edd0b2be95.mp3>A1-01-Be-Verbs-Jobs-Family.mp3",
      "drillfile": "modules/89812913-e22b-4af6-839f-c4538f8111a9.pdf>DEMONSTRATIVE ADJECTIVES.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:53:58.964015'),
      "id": "b0071aeca87943febc5a67995c23b6bb",
      "description": "DEMONSTRATIVE PRONOUNS",
      "audiofile": "modules/9358ed20-895a-43ad-b01d-6c5f4f247ebd.mp3>A1-11-Demonstratives (1).mp3",
      "drillfile": "modules/9bb57c1b-5e0d-42b8-95d0-f31cac946f4f.pdf>DEMONSTRATIVE PRONOUNS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:53:58.964015'),
      "id": "b0071aeca87943febc5a67995c23b6bb",
      "description": "DEMONSTRATIVE PRONOUNS",
      "audiofile": "modules/9358ed20-895a-43ad-b01d-6c5f4f247ebd.mp3>A1-11-Demonstratives (1).mp3",
      "drillfile": "modules/9bb57c1b-5e0d-42b8-95d0-f31cac946f4f.pdf>DEMONSTRATIVE PRONOUNS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:53:58.964015'),
      "id": "b0071aeca87943febc5a67995c23b6bb",
      "description": "DEMONSTRATIVE PRONOUNS",
      "audiofile": "modules/9358ed20-895a-43ad-b01d-6c5f4f247ebd.mp3>A1-11-Demonstratives (1).mp3",
      "drillfile": "modules/9bb57c1b-5e0d-42b8-95d0-f31cac946f4f.pdf>DEMONSTRATIVE PRONOUNS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:53:58.964015'),
      "id": "b0071aeca87943febc5a67995c23b6bb",
      "description": "DEMONSTRATIVE PRONOUNS",
      "audiofile": "modules/9358ed20-895a-43ad-b01d-6c5f4f247ebd.mp3>A1-11-Demonstratives (1).mp3",
      "drillfile": "modules/9bb57c1b-5e0d-42b8-95d0-f31cac946f4f.pdf>DEMONSTRATIVE PRONOUNS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:53:58.964015'),
      "id": "b0071aeca87943febc5a67995c23b6bb",
      "description": "DEMONSTRATIVE PRONOUNS",
      "audiofile": "modules/9358ed20-895a-43ad-b01d-6c5f4f247ebd.mp3>A1-11-Demonstratives (1).mp3",
      "drillfile": "modules/9bb57c1b-5e0d-42b8-95d0-f31cac946f4f.pdf>DEMONSTRATIVE PRONOUNS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:53:58.964015'),
      "id": "b0071aeca87943febc5a67995c23b6bb",
      "description": "DEMONSTRATIVE PRONOUNS",
      "audiofile": "modules/9358ed20-895a-43ad-b01d-6c5f4f247ebd.mp3>A1-11-Demonstratives (1).mp3",
      "drillfile": "modules/9bb57c1b-5e0d-42b8-95d0-f31cac946f4f.pdf>DEMONSTRATIVE PRONOUNS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:54:38.874073'),
      "id": "152edb5a47274b19b7d8de1ceb1c55fa",
      "description": "ELEGANT SPEAKING TIPS",
      "audiofile": "modules/1134e74d-c925-4ad5-ab30-ad8e2b08b63f.mp3>drama.mp3",
      "drillfile": "modules/8e971d2c-f902-47a9-8f32-1024cb20d70b.pdf>ELEGANT SPEAKING TIPS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:54:38.874073'),
      "id": "152edb5a47274b19b7d8de1ceb1c55fa",
      "description": "ELEGANT SPEAKING TIPS",
      "audiofile": "modules/1134e74d-c925-4ad5-ab30-ad8e2b08b63f.mp3>drama.mp3",
      "drillfile": "modules/8e971d2c-f902-47a9-8f32-1024cb20d70b.pdf>ELEGANT SPEAKING TIPS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:54:38.874073'),
      "id": "152edb5a47274b19b7d8de1ceb1c55fa",
      "description": "ELEGANT SPEAKING TIPS",
      "audiofile": "modules/1134e74d-c925-4ad5-ab30-ad8e2b08b63f.mp3>drama.mp3",
      "drillfile": "modules/8e971d2c-f902-47a9-8f32-1024cb20d70b.pdf>ELEGANT SPEAKING TIPS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:54:38.874073'),
      "id": "152edb5a47274b19b7d8de1ceb1c55fa",
      "description": "ELEGANT SPEAKING TIPS",
      "audiofile": "modules/1134e74d-c925-4ad5-ab30-ad8e2b08b63f.mp3>drama.mp3",
      "drillfile": "modules/8e971d2c-f902-47a9-8f32-1024cb20d70b.pdf>ELEGANT SPEAKING TIPS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:54:38.874073'),
      "id": "152edb5a47274b19b7d8de1ceb1c55fa",
      "description": "ELEGANT SPEAKING TIPS",
      "audiofile": "modules/1134e74d-c925-4ad5-ab30-ad8e2b08b63f.mp3>drama.mp3",
      "drillfile": "modules/8e971d2c-f902-47a9-8f32-1024cb20d70b.pdf>ELEGANT SPEAKING TIPS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:54:38.874073'),
      "id": "152edb5a47274b19b7d8de1ceb1c55fa",
      "description": "ELEGANT SPEAKING TIPS",
      "audiofile": "modules/1134e74d-c925-4ad5-ab30-ad8e2b08b63f.mp3>drama.mp3",
      "drillfile": "modules/8e971d2c-f902-47a9-8f32-1024cb20d70b.pdf>ELEGANT SPEAKING TIPS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:55:07.809701'),
      "id": "f0ec04b4c3054625a93cbac58ebaca0c",
      "description": "EMPHATIC PRONOUN",
      "audiofile": "modules/79dfcfc0-cfb7-4e59-9faa-f0204f4bf739.mp3>B2-17-Emphatic-Pronoun (1).mp3",
      "drillfile": "modules/86622a35-2bf4-4f74-bf14-d3f6c6b2daac.pdf>EMPHATIC PRONOUN.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:55:07.809701'),
      "id": "f0ec04b4c3054625a93cbac58ebaca0c",
      "description": "EMPHATIC PRONOUN",
      "audiofile": "modules/79dfcfc0-cfb7-4e59-9faa-f0204f4bf739.mp3>B2-17-Emphatic-Pronoun (1).mp3",
      "drillfile": "modules/86622a35-2bf4-4f74-bf14-d3f6c6b2daac.pdf>EMPHATIC PRONOUN.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:55:07.809701'),
      "id": "f0ec04b4c3054625a93cbac58ebaca0c",
      "description": "EMPHATIC PRONOUN",
      "audiofile": "modules/79dfcfc0-cfb7-4e59-9faa-f0204f4bf739.mp3>B2-17-Emphatic-Pronoun (1).mp3",
      "drillfile": "modules/86622a35-2bf4-4f74-bf14-d3f6c6b2daac.pdf>EMPHATIC PRONOUN.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:55:07.809701'),
      "id": "f0ec04b4c3054625a93cbac58ebaca0c",
      "description": "EMPHATIC PRONOUN",
      "audiofile": "modules/79dfcfc0-cfb7-4e59-9faa-f0204f4bf739.mp3>B2-17-Emphatic-Pronoun (1).mp3",
      "drillfile": "modules/86622a35-2bf4-4f74-bf14-d3f6c6b2daac.pdf>EMPHATIC PRONOUN.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:55:07.809701'),
      "id": "f0ec04b4c3054625a93cbac58ebaca0c",
      "description": "EMPHATIC PRONOUN",
      "audiofile": "modules/79dfcfc0-cfb7-4e59-9faa-f0204f4bf739.mp3>B2-17-Emphatic-Pronoun (1).mp3",
      "drillfile": "modules/86622a35-2bf4-4f74-bf14-d3f6c6b2daac.pdf>EMPHATIC PRONOUN.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:55:07.809701'),
      "id": "f0ec04b4c3054625a93cbac58ebaca0c",
      "description": "EMPHATIC PRONOUN",
      "audiofile": "modules/79dfcfc0-cfb7-4e59-9faa-f0204f4bf739.mp3>B2-17-Emphatic-Pronoun (1).mp3",
      "drillfile": "modules/86622a35-2bf4-4f74-bf14-d3f6c6b2daac.pdf>EMPHATIC PRONOUN.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 08:55:26.119363'),
      "id": "c12513a07d76486d87b841f6254bb8ee",
      "description": "Common Pronunciation Mistakes",
      "audiofile": "modules/ed59107a-15b6-46cd-a469-7eaf2d73d909.mp3>intonation.mp3",
      "drillfile": "modules/0872e88e-1d8b-4bbc-8277-aaf6d8a8ccd9.pdf>Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 08:55:26.119363'),
      "id": "c12513a07d76486d87b841f6254bb8ee",
      "description": "Common Pronunciation Mistakes",
      "audiofile": "modules/ed59107a-15b6-46cd-a469-7eaf2d73d909.mp3>intonation.mp3",
      "drillfile": "modules/0872e88e-1d8b-4bbc-8277-aaf6d8a8ccd9.pdf>Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 08:55:26.119363'),
      "id": "c12513a07d76486d87b841f6254bb8ee",
      "description": "Common Pronunciation Mistakes",
      "audiofile": "modules/ed59107a-15b6-46cd-a469-7eaf2d73d909.mp3>intonation.mp3",
      "drillfile": "modules/0872e88e-1d8b-4bbc-8277-aaf6d8a8ccd9.pdf>Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 08:55:26.119363'),
      "id": "c12513a07d76486d87b841f6254bb8ee",
      "description": "Common Pronunciation Mistakes",
      "audiofile": "modules/ed59107a-15b6-46cd-a469-7eaf2d73d909.mp3>intonation.mp3",
      "drillfile": "modules/0872e88e-1d8b-4bbc-8277-aaf6d8a8ccd9.pdf>Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 08:55:26.119363'),
      "id": "c12513a07d76486d87b841f6254bb8ee",
      "description": "Common Pronunciation Mistakes",
      "audiofile": "modules/ed59107a-15b6-46cd-a469-7eaf2d73d909.mp3>intonation.mp3",
      "drillfile": "modules/0872e88e-1d8b-4bbc-8277-aaf6d8a8ccd9.pdf>Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 08:55:26.119363'),
      "id": "c12513a07d76486d87b841f6254bb8ee",
      "description": "Common Pronunciation Mistakes",
      "audiofile": "modules/ed59107a-15b6-46cd-a469-7eaf2d73d909.mp3>intonation.mp3",
      "drillfile": "modules/0872e88e-1d8b-4bbc-8277-aaf6d8a8ccd9.pdf>Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:56:04.331684'),
      "id": "0d2288fe46d84154bf4eb11d17dbdd85",
      "description": "DEMONSTRAIVE PRONOUNS",
      "audiofile": "modules/8c7e2ca2-34c1-4f69-b9c6-670be446ae59.mp3>A1-01-Be-Verbs-Jobs-Family.mp3",
      "drillfile": "modules/92b6c47d-8fa1-42e2-8265-8717ce42919f.pdf>DEMONSTRATIVE PRONOUNS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:56:04.331684'),
      "id": "0d2288fe46d84154bf4eb11d17dbdd85",
      "description": "DEMONSTRAIVE PRONOUNS",
      "audiofile": "modules/8c7e2ca2-34c1-4f69-b9c6-670be446ae59.mp3>A1-01-Be-Verbs-Jobs-Family.mp3",
      "drillfile": "modules/92b6c47d-8fa1-42e2-8265-8717ce42919f.pdf>DEMONSTRATIVE PRONOUNS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:56:04.331684'),
      "id": "0d2288fe46d84154bf4eb11d17dbdd85",
      "description": "DEMONSTRAIVE PRONOUNS",
      "audiofile": "modules/8c7e2ca2-34c1-4f69-b9c6-670be446ae59.mp3>A1-01-Be-Verbs-Jobs-Family.mp3",
      "drillfile": "modules/92b6c47d-8fa1-42e2-8265-8717ce42919f.pdf>DEMONSTRATIVE PRONOUNS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:56:04.331684'),
      "id": "0d2288fe46d84154bf4eb11d17dbdd85",
      "description": "DEMONSTRAIVE PRONOUNS",
      "audiofile": "modules/8c7e2ca2-34c1-4f69-b9c6-670be446ae59.mp3>A1-01-Be-Verbs-Jobs-Family.mp3",
      "drillfile": "modules/92b6c47d-8fa1-42e2-8265-8717ce42919f.pdf>DEMONSTRATIVE PRONOUNS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:56:04.331684'),
      "id": "0d2288fe46d84154bf4eb11d17dbdd85",
      "description": "DEMONSTRAIVE PRONOUNS",
      "audiofile": "modules/8c7e2ca2-34c1-4f69-b9c6-670be446ae59.mp3>A1-01-Be-Verbs-Jobs-Family.mp3",
      "drillfile": "modules/92b6c47d-8fa1-42e2-8265-8717ce42919f.pdf>DEMONSTRATIVE PRONOUNS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:56:04.331684'),
      "id": "0d2288fe46d84154bf4eb11d17dbdd85",
      "description": "DEMONSTRAIVE PRONOUNS",
      "audiofile": "modules/8c7e2ca2-34c1-4f69-b9c6-670be446ae59.mp3>A1-01-Be-Verbs-Jobs-Family.mp3",
      "drillfile": "modules/92b6c47d-8fa1-42e2-8265-8717ce42919f.pdf>DEMONSTRATIVE PRONOUNS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:56:35.312465'),
      "id": "4c116d09f34f4208a886b73b535629de",
      "description": "DETERMINERS",
      "audiofile": "modules/8052cc8b-12da-467c-821f-3f363f940e1c.mp3>A1-11-Demonstratives (1).mp3",
      "drillfile": "modules/3ce31859-4dce-4fe6-847c-fb4bfd492e44.pdf>DETERMINERS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:56:35.312465'),
      "id": "4c116d09f34f4208a886b73b535629de",
      "description": "DETERMINERS",
      "audiofile": "modules/8052cc8b-12da-467c-821f-3f363f940e1c.mp3>A1-11-Demonstratives (1).mp3",
      "drillfile": "modules/3ce31859-4dce-4fe6-847c-fb4bfd492e44.pdf>DETERMINERS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:56:35.312465'),
      "id": "4c116d09f34f4208a886b73b535629de",
      "description": "DETERMINERS",
      "audiofile": "modules/8052cc8b-12da-467c-821f-3f363f940e1c.mp3>A1-11-Demonstratives (1).mp3",
      "drillfile": "modules/3ce31859-4dce-4fe6-847c-fb4bfd492e44.pdf>DETERMINERS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:56:35.312465'),
      "id": "4c116d09f34f4208a886b73b535629de",
      "description": "DETERMINERS",
      "audiofile": "modules/8052cc8b-12da-467c-821f-3f363f940e1c.mp3>A1-11-Demonstratives (1).mp3",
      "drillfile": "modules/3ce31859-4dce-4fe6-847c-fb4bfd492e44.pdf>DETERMINERS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:56:35.312465'),
      "id": "4c116d09f34f4208a886b73b535629de",
      "description": "DETERMINERS",
      "audiofile": "modules/8052cc8b-12da-467c-821f-3f363f940e1c.mp3>A1-11-Demonstratives (1).mp3",
      "drillfile": "modules/3ce31859-4dce-4fe6-847c-fb4bfd492e44.pdf>DETERMINERS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:56:35.312465'),
      "id": "4c116d09f34f4208a886b73b535629de",
      "description": "DETERMINERS",
      "audiofile": "modules/8052cc8b-12da-467c-821f-3f363f940e1c.mp3>A1-11-Demonstratives (1).mp3",
      "drillfile": "modules/3ce31859-4dce-4fe6-847c-fb4bfd492e44.pdf>DETERMINERS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:57:12.109248'),
      "id": "ac459888f3cb4a3ba161f8edd91b882a",
      "description": "ENGLISH SPEAKING TECHNIQUES REPETITION",
      "audiofile": "modules/b8ee24ac-83a4-40c6-9965-97aa751f710c.mp3>repetition.mp3",
      "drillfile": "modules/9439c45b-df9f-489c-b5ad-ca5c0b47d0b5.pdf>\u2018Simple But Genius\u2019 Advanced English Speaking Techniques - Google Docs.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:57:12.109248'),
      "id": "ac459888f3cb4a3ba161f8edd91b882a",
      "description": "ENGLISH SPEAKING TECHNIQUES REPETITION",
      "audiofile": "modules/b8ee24ac-83a4-40c6-9965-97aa751f710c.mp3>repetition.mp3",
      "drillfile": "modules/9439c45b-df9f-489c-b5ad-ca5c0b47d0b5.pdf>\u2018Simple But Genius\u2019 Advanced English Speaking Techniques - Google Docs.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:57:12.109248'),
      "id": "ac459888f3cb4a3ba161f8edd91b882a",
      "description": "ENGLISH SPEAKING TECHNIQUES REPETITION",
      "audiofile": "modules/b8ee24ac-83a4-40c6-9965-97aa751f710c.mp3>repetition.mp3",
      "drillfile": "modules/9439c45b-df9f-489c-b5ad-ca5c0b47d0b5.pdf>\u2018Simple But Genius\u2019 Advanced English Speaking Techniques - Google Docs.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:57:12.109248'),
      "id": "ac459888f3cb4a3ba161f8edd91b882a",
      "description": "ENGLISH SPEAKING TECHNIQUES REPETITION",
      "audiofile": "modules/b8ee24ac-83a4-40c6-9965-97aa751f710c.mp3>repetition.mp3",
      "drillfile": "modules/9439c45b-df9f-489c-b5ad-ca5c0b47d0b5.pdf>\u2018Simple But Genius\u2019 Advanced English Speaking Techniques - Google Docs.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:57:12.109248'),
      "id": "ac459888f3cb4a3ba161f8edd91b882a",
      "description": "ENGLISH SPEAKING TECHNIQUES REPETITION",
      "audiofile": "modules/b8ee24ac-83a4-40c6-9965-97aa751f710c.mp3>repetition.mp3",
      "drillfile": "modules/9439c45b-df9f-489c-b5ad-ca5c0b47d0b5.pdf>\u2018Simple But Genius\u2019 Advanced English Speaking Techniques - Google Docs.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:57:12.109248'),
      "id": "ac459888f3cb4a3ba161f8edd91b882a",
      "description": "ENGLISH SPEAKING TECHNIQUES REPETITION",
      "audiofile": "modules/b8ee24ac-83a4-40c6-9965-97aa751f710c.mp3>repetition.mp3",
      "drillfile": "modules/9439c45b-df9f-489c-b5ad-ca5c0b47d0b5.pdf>\u2018Simple But Genius\u2019 Advanced English Speaking Techniques - Google Docs.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:57:24.971478'),
      "id": "8005eb7b5cb846129dfbfa6fc498c9f2",
      "description": "DISCUSSING THE NEWS",
      "audiofile": "modules/80272f0c-9f7c-4259-a18c-6ed0e440b05f.mp3>DISCUSSING THE NEWS (1).mp3",
      "drillfile": "modules/887384d4-9082-4aea-b049-7240634000be.pdf>DISCUSSING THE NEWS (2).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:57:24.971478'),
      "id": "8005eb7b5cb846129dfbfa6fc498c9f2",
      "description": "DISCUSSING THE NEWS",
      "audiofile": "modules/80272f0c-9f7c-4259-a18c-6ed0e440b05f.mp3>DISCUSSING THE NEWS (1).mp3",
      "drillfile": "modules/887384d4-9082-4aea-b049-7240634000be.pdf>DISCUSSING THE NEWS (2).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:57:24.971478'),
      "id": "8005eb7b5cb846129dfbfa6fc498c9f2",
      "description": "DISCUSSING THE NEWS",
      "audiofile": "modules/80272f0c-9f7c-4259-a18c-6ed0e440b05f.mp3>DISCUSSING THE NEWS (1).mp3",
      "drillfile": "modules/887384d4-9082-4aea-b049-7240634000be.pdf>DISCUSSING THE NEWS (2).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:57:24.971478'),
      "id": "8005eb7b5cb846129dfbfa6fc498c9f2",
      "description": "DISCUSSING THE NEWS",
      "audiofile": "modules/80272f0c-9f7c-4259-a18c-6ed0e440b05f.mp3>DISCUSSING THE NEWS (1).mp3",
      "drillfile": "modules/887384d4-9082-4aea-b049-7240634000be.pdf>DISCUSSING THE NEWS (2).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:57:24.971478'),
      "id": "8005eb7b5cb846129dfbfa6fc498c9f2",
      "description": "DISCUSSING THE NEWS",
      "audiofile": "modules/80272f0c-9f7c-4259-a18c-6ed0e440b05f.mp3>DISCUSSING THE NEWS (1).mp3",
      "drillfile": "modules/887384d4-9082-4aea-b049-7240634000be.pdf>DISCUSSING THE NEWS (2).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 08:57:24.971478'),
      "id": "8005eb7b5cb846129dfbfa6fc498c9f2",
      "description": "DISCUSSING THE NEWS",
      "audiofile": "modules/80272f0c-9f7c-4259-a18c-6ed0e440b05f.mp3>DISCUSSING THE NEWS (1).mp3",
      "drillfile": "modules/887384d4-9082-4aea-b049-7240634000be.pdf>DISCUSSING THE NEWS (2).pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:57:46.045635'),
      "id": "e3ef5104e622426f86c2abd7e2cebd77",
      "description": "EXPRESSING YOURSELF",
      "audiofile": "modules/04f13744-aee9-4929-aab2-11e999b70b1d.mp3>Express-yourself-sentence-starters-2022.mp3",
      "drillfile": "modules/1a453945-3fd2-4bb4-a206-79c6ababab55.pdf>Expressing-Yourself-2022.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:57:46.045635'),
      "id": "e3ef5104e622426f86c2abd7e2cebd77",
      "description": "EXPRESSING YOURSELF",
      "audiofile": "modules/04f13744-aee9-4929-aab2-11e999b70b1d.mp3>Express-yourself-sentence-starters-2022.mp3",
      "drillfile": "modules/1a453945-3fd2-4bb4-a206-79c6ababab55.pdf>Expressing-Yourself-2022.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:57:46.045635'),
      "id": "e3ef5104e622426f86c2abd7e2cebd77",
      "description": "EXPRESSING YOURSELF",
      "audiofile": "modules/04f13744-aee9-4929-aab2-11e999b70b1d.mp3>Express-yourself-sentence-starters-2022.mp3",
      "drillfile": "modules/1a453945-3fd2-4bb4-a206-79c6ababab55.pdf>Expressing-Yourself-2022.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:57:46.045635'),
      "id": "e3ef5104e622426f86c2abd7e2cebd77",
      "description": "EXPRESSING YOURSELF",
      "audiofile": "modules/04f13744-aee9-4929-aab2-11e999b70b1d.mp3>Express-yourself-sentence-starters-2022.mp3",
      "drillfile": "modules/1a453945-3fd2-4bb4-a206-79c6ababab55.pdf>Expressing-Yourself-2022.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:57:46.045635'),
      "id": "e3ef5104e622426f86c2abd7e2cebd77",
      "description": "EXPRESSING YOURSELF",
      "audiofile": "modules/04f13744-aee9-4929-aab2-11e999b70b1d.mp3>Express-yourself-sentence-starters-2022.mp3",
      "drillfile": "modules/1a453945-3fd2-4bb4-a206-79c6ababab55.pdf>Expressing-Yourself-2022.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:57:46.045635'),
      "id": "e3ef5104e622426f86c2abd7e2cebd77",
      "description": "EXPRESSING YOURSELF",
      "audiofile": "modules/04f13744-aee9-4929-aab2-11e999b70b1d.mp3>Express-yourself-sentence-starters-2022.mp3",
      "drillfile": "modules/1a453945-3fd2-4bb4-a206-79c6ababab55.pdf>Expressing-Yourself-2022.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:58:16.550179'),
      "id": "b9429c3e357c40a99d803ef31a65edcd",
      "description": "FIRST CONDITIONAL",
      "audiofile": "modules/f4eae7cb-2772-4909-934f-1f8f81adea64.mp3>B1-10-First-Conditional (2).mp3",
      "drillfile": "modules/e21b7245-862f-4406-a917-5c1b12da4bea.pdf>FIRST CONDITIONAL.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:58:16.550179'),
      "id": "b9429c3e357c40a99d803ef31a65edcd",
      "description": "FIRST CONDITIONAL",
      "audiofile": "modules/f4eae7cb-2772-4909-934f-1f8f81adea64.mp3>B1-10-First-Conditional (2).mp3",
      "drillfile": "modules/e21b7245-862f-4406-a917-5c1b12da4bea.pdf>FIRST CONDITIONAL.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:58:16.550179'),
      "id": "b9429c3e357c40a99d803ef31a65edcd",
      "description": "FIRST CONDITIONAL",
      "audiofile": "modules/f4eae7cb-2772-4909-934f-1f8f81adea64.mp3>B1-10-First-Conditional (2).mp3",
      "drillfile": "modules/e21b7245-862f-4406-a917-5c1b12da4bea.pdf>FIRST CONDITIONAL.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:58:16.550179'),
      "id": "b9429c3e357c40a99d803ef31a65edcd",
      "description": "FIRST CONDITIONAL",
      "audiofile": "modules/f4eae7cb-2772-4909-934f-1f8f81adea64.mp3>B1-10-First-Conditional (2).mp3",
      "drillfile": "modules/e21b7245-862f-4406-a917-5c1b12da4bea.pdf>FIRST CONDITIONAL.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:58:16.550179'),
      "id": "b9429c3e357c40a99d803ef31a65edcd",
      "description": "FIRST CONDITIONAL",
      "audiofile": "modules/f4eae7cb-2772-4909-934f-1f8f81adea64.mp3>B1-10-First-Conditional (2).mp3",
      "drillfile": "modules/e21b7245-862f-4406-a917-5c1b12da4bea.pdf>FIRST CONDITIONAL.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:58:16.550179'),
      "id": "b9429c3e357c40a99d803ef31a65edcd",
      "description": "FIRST CONDITIONAL",
      "audiofile": "modules/f4eae7cb-2772-4909-934f-1f8f81adea64.mp3>B1-10-First-Conditional (2).mp3",
      "drillfile": "modules/e21b7245-862f-4406-a917-5c1b12da4bea.pdf>FIRST CONDITIONAL.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:59:09.321841'),
      "id": "ba1de9396ca7471280310b1030108216",
      "description": "GET USED TO",
      "audiofile": "modules/74115936-49ab-49ff-a1f4-efcc75c69fac.mp3>B2-07-Get-Used-To (2).mp3",
      "drillfile": "modules/7be215a9-d044-45c2-8864-194e7cb8c1ad.pdf>GET USED TO.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:59:09.321841'),
      "id": "ba1de9396ca7471280310b1030108216",
      "description": "GET USED TO",
      "audiofile": "modules/74115936-49ab-49ff-a1f4-efcc75c69fac.mp3>B2-07-Get-Used-To (2).mp3",
      "drillfile": "modules/7be215a9-d044-45c2-8864-194e7cb8c1ad.pdf>GET USED TO.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:59:09.321841'),
      "id": "ba1de9396ca7471280310b1030108216",
      "description": "GET USED TO",
      "audiofile": "modules/74115936-49ab-49ff-a1f4-efcc75c69fac.mp3>B2-07-Get-Used-To (2).mp3",
      "drillfile": "modules/7be215a9-d044-45c2-8864-194e7cb8c1ad.pdf>GET USED TO.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:59:09.321841'),
      "id": "ba1de9396ca7471280310b1030108216",
      "description": "GET USED TO",
      "audiofile": "modules/74115936-49ab-49ff-a1f4-efcc75c69fac.mp3>B2-07-Get-Used-To (2).mp3",
      "drillfile": "modules/7be215a9-d044-45c2-8864-194e7cb8c1ad.pdf>GET USED TO.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:59:09.321841'),
      "id": "ba1de9396ca7471280310b1030108216",
      "description": "GET USED TO",
      "audiofile": "modules/74115936-49ab-49ff-a1f4-efcc75c69fac.mp3>B2-07-Get-Used-To (2).mp3",
      "drillfile": "modules/7be215a9-d044-45c2-8864-194e7cb8c1ad.pdf>GET USED TO.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:59:09.321841'),
      "id": "ba1de9396ca7471280310b1030108216",
      "description": "GET USED TO",
      "audiofile": "modules/74115936-49ab-49ff-a1f4-efcc75c69fac.mp3>B2-07-Get-Used-To (2).mp3",
      "drillfile": "modules/7be215a9-d044-45c2-8864-194e7cb8c1ad.pdf>GET USED TO.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:59:42.480109'),
      "id": "027cb63834c7421eac30a406c21e9453",
      "description": "GOING TO",
      "audiofile": "modules/befceaff-fcdf-40cc-bed2-5cfabd62b8c2.mp3>Copy of A2-05-Going-To.mp3",
      "drillfile": "modules/e626e284-7fe8-447d-9b3c-4a97d0d55bc0.pdf>GOING TO CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:59:42.480109'),
      "id": "027cb63834c7421eac30a406c21e9453",
      "description": "GOING TO",
      "audiofile": "modules/befceaff-fcdf-40cc-bed2-5cfabd62b8c2.mp3>Copy of A2-05-Going-To.mp3",
      "drillfile": "modules/e626e284-7fe8-447d-9b3c-4a97d0d55bc0.pdf>GOING TO CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:59:42.480109'),
      "id": "027cb63834c7421eac30a406c21e9453",
      "description": "GOING TO",
      "audiofile": "modules/befceaff-fcdf-40cc-bed2-5cfabd62b8c2.mp3>Copy of A2-05-Going-To.mp3",
      "drillfile": "modules/e626e284-7fe8-447d-9b3c-4a97d0d55bc0.pdf>GOING TO CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:59:42.480109'),
      "id": "027cb63834c7421eac30a406c21e9453",
      "description": "GOING TO",
      "audiofile": "modules/befceaff-fcdf-40cc-bed2-5cfabd62b8c2.mp3>Copy of A2-05-Going-To.mp3",
      "drillfile": "modules/e626e284-7fe8-447d-9b3c-4a97d0d55bc0.pdf>GOING TO CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:59:42.480109'),
      "id": "027cb63834c7421eac30a406c21e9453",
      "description": "GOING TO",
      "audiofile": "modules/befceaff-fcdf-40cc-bed2-5cfabd62b8c2.mp3>Copy of A2-05-Going-To.mp3",
      "drillfile": "modules/e626e284-7fe8-447d-9b3c-4a97d0d55bc0.pdf>GOING TO CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 08:59:42.480109'),
      "id": "027cb63834c7421eac30a406c21e9453",
      "description": "GOING TO",
      "audiofile": "modules/befceaff-fcdf-40cc-bed2-5cfabd62b8c2.mp3>Copy of A2-05-Going-To.mp3",
      "drillfile": "modules/e626e284-7fe8-447d-9b3c-4a97d0d55bc0.pdf>GOING TO CONVERSATIONS - Google Docs.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 09:00:08.846848'),
      "id": "f8408c3697a041ec885ae48659e65aa9",
      "description": "HONYOKS",
      "audiofile": "modules/8bb7ecc0-6031-4031-944d-30e90e973908.mp3>1581-Caller-Kyle-Honyock.mp3",
      "drillfile": "modules/0451298b-fe72-4592-b73c-092eca715f2f.pdf>HONYOKS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 09:00:08.846848'),
      "id": "f8408c3697a041ec885ae48659e65aa9",
      "description": "HONYOKS",
      "audiofile": "modules/8bb7ecc0-6031-4031-944d-30e90e973908.mp3>1581-Caller-Kyle-Honyock.mp3",
      "drillfile": "modules/0451298b-fe72-4592-b73c-092eca715f2f.pdf>HONYOKS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 09:00:08.846848'),
      "id": "f8408c3697a041ec885ae48659e65aa9",
      "description": "HONYOKS",
      "audiofile": "modules/8bb7ecc0-6031-4031-944d-30e90e973908.mp3>1581-Caller-Kyle-Honyock.mp3",
      "drillfile": "modules/0451298b-fe72-4592-b73c-092eca715f2f.pdf>HONYOKS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 09:00:08.846848'),
      "id": "f8408c3697a041ec885ae48659e65aa9",
      "description": "HONYOKS",
      "audiofile": "modules/8bb7ecc0-6031-4031-944d-30e90e973908.mp3>1581-Caller-Kyle-Honyock.mp3",
      "drillfile": "modules/0451298b-fe72-4592-b73c-092eca715f2f.pdf>HONYOKS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 09:00:08.846848'),
      "id": "f8408c3697a041ec885ae48659e65aa9",
      "description": "HONYOKS",
      "audiofile": "modules/8bb7ecc0-6031-4031-944d-30e90e973908.mp3>1581-Caller-Kyle-Honyock.mp3",
      "drillfile": "modules/0451298b-fe72-4592-b73c-092eca715f2f.pdf>HONYOKS.pdf"
    },
    {
      "practiceid": "fc1400db4e1a4db08fa19725ec74ef34",
      "timestamp": new Date('2024-03-14 09:00:08.846848'),
      "id": "f8408c3697a041ec885ae48659e65aa9",
      "description": "HONYOKS",
      "audiofile": "modules/8bb7ecc0-6031-4031-944d-30e90e973908.mp3>1581-Caller-Kyle-Honyock.mp3",
      "drillfile": "modules/0451298b-fe72-4592-b73c-092eca715f2f.pdf>HONYOKS.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 09:00:16.408011'),
      "id": "77f912197fb14242be688f8cb924c0b8",
      "description": "Common Pronunciation Mistakes Vowels",
      "audiofile": "modules/113d48e9-d140-4f43-b51c-d33af7992eb5.mp3>vowel.mp3",
      "drillfile": "modules/046e48eb-463a-410b-bd43-d76301605878.pdf>5 Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 09:00:16.408011'),
      "id": "77f912197fb14242be688f8cb924c0b8",
      "description": "Common Pronunciation Mistakes Vowels",
      "audiofile": "modules/113d48e9-d140-4f43-b51c-d33af7992eb5.mp3>vowel.mp3",
      "drillfile": "modules/046e48eb-463a-410b-bd43-d76301605878.pdf>5 Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 09:00:16.408011'),
      "id": "77f912197fb14242be688f8cb924c0b8",
      "description": "Common Pronunciation Mistakes Vowels",
      "audiofile": "modules/113d48e9-d140-4f43-b51c-d33af7992eb5.mp3>vowel.mp3",
      "drillfile": "modules/046e48eb-463a-410b-bd43-d76301605878.pdf>5 Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 09:00:16.408011'),
      "id": "77f912197fb14242be688f8cb924c0b8",
      "description": "Common Pronunciation Mistakes Vowels",
      "audiofile": "modules/113d48e9-d140-4f43-b51c-d33af7992eb5.mp3>vowel.mp3",
      "drillfile": "modules/046e48eb-463a-410b-bd43-d76301605878.pdf>5 Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 09:00:16.408011'),
      "id": "77f912197fb14242be688f8cb924c0b8",
      "description": "Common Pronunciation Mistakes Vowels",
      "audiofile": "modules/113d48e9-d140-4f43-b51c-d33af7992eb5.mp3>vowel.mp3",
      "drillfile": "modules/046e48eb-463a-410b-bd43-d76301605878.pdf>5 Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 09:00:16.408011'),
      "id": "77f912197fb14242be688f8cb924c0b8",
      "description": "Common Pronunciation Mistakes Vowels",
      "audiofile": "modules/113d48e9-d140-4f43-b51c-d33af7992eb5.mp3>vowel.mp3",
      "drillfile": "modules/046e48eb-463a-410b-bd43-d76301605878.pdf>5 Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:01:10.697336'),
      "id": "745e7836f0644e56aab2b6a52d05b805",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH FINAL S",
      "audiofile": "modules/36389ed8-f665-4992-83c8-60528f37a37b.mp3>s-final-clusters (1).mp3",
      "drillfile": "modules/f472a6e0-a98a-455f-9d50-02401a74031a.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:01:10.697336'),
      "id": "745e7836f0644e56aab2b6a52d05b805",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH FINAL S",
      "audiofile": "modules/36389ed8-f665-4992-83c8-60528f37a37b.mp3>s-final-clusters (1).mp3",
      "drillfile": "modules/f472a6e0-a98a-455f-9d50-02401a74031a.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:01:10.697336'),
      "id": "745e7836f0644e56aab2b6a52d05b805",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH FINAL S",
      "audiofile": "modules/36389ed8-f665-4992-83c8-60528f37a37b.mp3>s-final-clusters (1).mp3",
      "drillfile": "modules/f472a6e0-a98a-455f-9d50-02401a74031a.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:01:10.697336'),
      "id": "745e7836f0644e56aab2b6a52d05b805",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH FINAL S",
      "audiofile": "modules/36389ed8-f665-4992-83c8-60528f37a37b.mp3>s-final-clusters (1).mp3",
      "drillfile": "modules/f472a6e0-a98a-455f-9d50-02401a74031a.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:01:10.697336'),
      "id": "745e7836f0644e56aab2b6a52d05b805",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH FINAL S",
      "audiofile": "modules/36389ed8-f665-4992-83c8-60528f37a37b.mp3>s-final-clusters (1).mp3",
      "drillfile": "modules/f472a6e0-a98a-455f-9d50-02401a74031a.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:01:10.697336'),
      "id": "745e7836f0644e56aab2b6a52d05b805",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH FINAL S",
      "audiofile": "modules/36389ed8-f665-4992-83c8-60528f37a37b.mp3>s-final-clusters (1).mp3",
      "drillfile": "modules/f472a6e0-a98a-455f-9d50-02401a74031a.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 09:02:03.074099'),
      "id": "5b4ad608ce434564806754206539cbaa",
      "description": "Common Pronunciation Mistakes Stressed",
      "audiofile": "modules/12f9d82c-a6f0-4098-ad6c-95914f1fc1d2.mp3>stressed.mp3",
      "drillfile": "modules/d4db56b6-e63f-46f2-af78-28f9be018fe0.pdf>Copy of 5 Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 09:02:03.074099'),
      "id": "5b4ad608ce434564806754206539cbaa",
      "description": "Common Pronunciation Mistakes Stressed",
      "audiofile": "modules/12f9d82c-a6f0-4098-ad6c-95914f1fc1d2.mp3>stressed.mp3",
      "drillfile": "modules/d4db56b6-e63f-46f2-af78-28f9be018fe0.pdf>Copy of 5 Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 09:02:03.074099'),
      "id": "5b4ad608ce434564806754206539cbaa",
      "description": "Common Pronunciation Mistakes Stressed",
      "audiofile": "modules/12f9d82c-a6f0-4098-ad6c-95914f1fc1d2.mp3>stressed.mp3",
      "drillfile": "modules/d4db56b6-e63f-46f2-af78-28f9be018fe0.pdf>Copy of 5 Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 09:02:03.074099'),
      "id": "5b4ad608ce434564806754206539cbaa",
      "description": "Common Pronunciation Mistakes Stressed",
      "audiofile": "modules/12f9d82c-a6f0-4098-ad6c-95914f1fc1d2.mp3>stressed.mp3",
      "drillfile": "modules/d4db56b6-e63f-46f2-af78-28f9be018fe0.pdf>Copy of 5 Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 09:02:03.074099'),
      "id": "5b4ad608ce434564806754206539cbaa",
      "description": "Common Pronunciation Mistakes Stressed",
      "audiofile": "modules/12f9d82c-a6f0-4098-ad6c-95914f1fc1d2.mp3>stressed.mp3",
      "drillfile": "modules/d4db56b6-e63f-46f2-af78-28f9be018fe0.pdf>Copy of 5 Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "6718884c9c9a40e984e242e1ea389aa1",
      "timestamp": new Date('2024-03-14 09:02:03.074099'),
      "id": "5b4ad608ce434564806754206539cbaa",
      "description": "Common Pronunciation Mistakes Stressed",
      "audiofile": "modules/12f9d82c-a6f0-4098-ad6c-95914f1fc1d2.mp3>stressed.mp3",
      "drillfile": "modules/d4db56b6-e63f-46f2-af78-28f9be018fe0.pdf>Copy of 5 Common Pronunciation Mistakes.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:02:09.274454'),
      "id": "7d0b0d8a893d40fbb49ace8b1be5ca42",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH KS",
      "audiofile": "modules/5a536704-28d8-4e4c-8df1-4f19403f074e.mp3>ks-clusters.mp3",
      "drillfile": "modules/1489c735-643e-49ff-b231-452df39deef4.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:02:09.274454'),
      "id": "7d0b0d8a893d40fbb49ace8b1be5ca42",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH KS",
      "audiofile": "modules/5a536704-28d8-4e4c-8df1-4f19403f074e.mp3>ks-clusters.mp3",
      "drillfile": "modules/1489c735-643e-49ff-b231-452df39deef4.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:02:09.274454'),
      "id": "7d0b0d8a893d40fbb49ace8b1be5ca42",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH KS",
      "audiofile": "modules/5a536704-28d8-4e4c-8df1-4f19403f074e.mp3>ks-clusters.mp3",
      "drillfile": "modules/1489c735-643e-49ff-b231-452df39deef4.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:02:09.274454'),
      "id": "7d0b0d8a893d40fbb49ace8b1be5ca42",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH KS",
      "audiofile": "modules/5a536704-28d8-4e4c-8df1-4f19403f074e.mp3>ks-clusters.mp3",
      "drillfile": "modules/1489c735-643e-49ff-b231-452df39deef4.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:02:09.274454'),
      "id": "7d0b0d8a893d40fbb49ace8b1be5ca42",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH KS",
      "audiofile": "modules/5a536704-28d8-4e4c-8df1-4f19403f074e.mp3>ks-clusters.mp3",
      "drillfile": "modules/1489c735-643e-49ff-b231-452df39deef4.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:02:09.274454'),
      "id": "7d0b0d8a893d40fbb49ace8b1be5ca42",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH KS",
      "audiofile": "modules/5a536704-28d8-4e4c-8df1-4f19403f074e.mp3>ks-clusters.mp3",
      "drillfile": "modules/1489c735-643e-49ff-b231-452df39deef4.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:02:34.512762'),
      "id": "adb4f57b28b540a88dde106c09e81017",
      "description": "DREAM HOUSE",
      "audiofile": "modules/3ac696a0-7684-4fd1-aa2b-875dd765d9c9.mp3>B1-01-Do-Emphasis (1).mp3",
      "drillfile": "modules/939018da-79c4-41aa-a7d8-e182ba428ca9.pdf>DREAM HOUSE (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:02:34.512762'),
      "id": "adb4f57b28b540a88dde106c09e81017",
      "description": "DREAM HOUSE",
      "audiofile": "modules/3ac696a0-7684-4fd1-aa2b-875dd765d9c9.mp3>B1-01-Do-Emphasis (1).mp3",
      "drillfile": "modules/939018da-79c4-41aa-a7d8-e182ba428ca9.pdf>DREAM HOUSE (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:02:34.512762'),
      "id": "adb4f57b28b540a88dde106c09e81017",
      "description": "DREAM HOUSE",
      "audiofile": "modules/3ac696a0-7684-4fd1-aa2b-875dd765d9c9.mp3>B1-01-Do-Emphasis (1).mp3",
      "drillfile": "modules/939018da-79c4-41aa-a7d8-e182ba428ca9.pdf>DREAM HOUSE (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:02:34.512762'),
      "id": "adb4f57b28b540a88dde106c09e81017",
      "description": "DREAM HOUSE",
      "audiofile": "modules/3ac696a0-7684-4fd1-aa2b-875dd765d9c9.mp3>B1-01-Do-Emphasis (1).mp3",
      "drillfile": "modules/939018da-79c4-41aa-a7d8-e182ba428ca9.pdf>DREAM HOUSE (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:02:34.512762'),
      "id": "adb4f57b28b540a88dde106c09e81017",
      "description": "DREAM HOUSE",
      "audiofile": "modules/3ac696a0-7684-4fd1-aa2b-875dd765d9c9.mp3>B1-01-Do-Emphasis (1).mp3",
      "drillfile": "modules/939018da-79c4-41aa-a7d8-e182ba428ca9.pdf>DREAM HOUSE (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:02:34.512762'),
      "id": "adb4f57b28b540a88dde106c09e81017",
      "description": "DREAM HOUSE",
      "audiofile": "modules/3ac696a0-7684-4fd1-aa2b-875dd765d9c9.mp3>B1-01-Do-Emphasis (1).mp3",
      "drillfile": "modules/939018da-79c4-41aa-a7d8-e182ba428ca9.pdf>DREAM HOUSE (1).pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:02:48.622893'),
      "id": "a992141a3b6147efac78651fc9340b3f",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH PT",
      "audiofile": "modules/666e44aa-353e-4af2-86c8-006709259a28.mp3>pt-clusters.mp3",
      "drillfile": "modules/e9a2e3bf-1f52-40e4-bc78-261755a21501.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:02:48.622893'),
      "id": "a992141a3b6147efac78651fc9340b3f",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH PT",
      "audiofile": "modules/666e44aa-353e-4af2-86c8-006709259a28.mp3>pt-clusters.mp3",
      "drillfile": "modules/e9a2e3bf-1f52-40e4-bc78-261755a21501.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:02:48.622893'),
      "id": "a992141a3b6147efac78651fc9340b3f",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH PT",
      "audiofile": "modules/666e44aa-353e-4af2-86c8-006709259a28.mp3>pt-clusters.mp3",
      "drillfile": "modules/e9a2e3bf-1f52-40e4-bc78-261755a21501.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:02:48.622893'),
      "id": "a992141a3b6147efac78651fc9340b3f",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH PT",
      "audiofile": "modules/666e44aa-353e-4af2-86c8-006709259a28.mp3>pt-clusters.mp3",
      "drillfile": "modules/e9a2e3bf-1f52-40e4-bc78-261755a21501.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:02:48.622893'),
      "id": "a992141a3b6147efac78651fc9340b3f",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH PT",
      "audiofile": "modules/666e44aa-353e-4af2-86c8-006709259a28.mp3>pt-clusters.mp3",
      "drillfile": "modules/e9a2e3bf-1f52-40e4-bc78-261755a21501.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:02:48.622893'),
      "id": "a992141a3b6147efac78651fc9340b3f",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH PT",
      "audiofile": "modules/666e44aa-353e-4af2-86c8-006709259a28.mp3>pt-clusters.mp3",
      "drillfile": "modules/e9a2e3bf-1f52-40e4-bc78-261755a21501.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:02:57.99364'),
      "id": "bf9daa25685a4d28acaaeb4220abafe3",
      "description": "DO FOR EMPHASIS",
      "audiofile": "modules/90edc070-2121-4547-968d-f07d09608981.mp3>B1-01-Do-Emphasis (1).mp3",
      "drillfile": "modules/2f16a40b-1054-4837-9e83-ae007077e3d4.pdf>DO FOR EMPHASIS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:02:57.99364'),
      "id": "bf9daa25685a4d28acaaeb4220abafe3",
      "description": "DO FOR EMPHASIS",
      "audiofile": "modules/90edc070-2121-4547-968d-f07d09608981.mp3>B1-01-Do-Emphasis (1).mp3",
      "drillfile": "modules/2f16a40b-1054-4837-9e83-ae007077e3d4.pdf>DO FOR EMPHASIS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:02:57.99364'),
      "id": "bf9daa25685a4d28acaaeb4220abafe3",
      "description": "DO FOR EMPHASIS",
      "audiofile": "modules/90edc070-2121-4547-968d-f07d09608981.mp3>B1-01-Do-Emphasis (1).mp3",
      "drillfile": "modules/2f16a40b-1054-4837-9e83-ae007077e3d4.pdf>DO FOR EMPHASIS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:02:57.99364'),
      "id": "bf9daa25685a4d28acaaeb4220abafe3",
      "description": "DO FOR EMPHASIS",
      "audiofile": "modules/90edc070-2121-4547-968d-f07d09608981.mp3>B1-01-Do-Emphasis (1).mp3",
      "drillfile": "modules/2f16a40b-1054-4837-9e83-ae007077e3d4.pdf>DO FOR EMPHASIS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:02:57.99364'),
      "id": "bf9daa25685a4d28acaaeb4220abafe3",
      "description": "DO FOR EMPHASIS",
      "audiofile": "modules/90edc070-2121-4547-968d-f07d09608981.mp3>B1-01-Do-Emphasis (1).mp3",
      "drillfile": "modules/2f16a40b-1054-4837-9e83-ae007077e3d4.pdf>DO FOR EMPHASIS.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:02:57.99364'),
      "id": "bf9daa25685a4d28acaaeb4220abafe3",
      "description": "DO FOR EMPHASIS",
      "audiofile": "modules/90edc070-2121-4547-968d-f07d09608981.mp3>B1-01-Do-Emphasis (1).mp3",
      "drillfile": "modules/2f16a40b-1054-4837-9e83-ae007077e3d4.pdf>DO FOR EMPHASIS.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:03:29.227657'),
      "id": "4570f24c8cdd49c79c43d8053d051858",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH R",
      "audiofile": "modules/6ccdf540-73c3-4583-827e-bbea087d0e85.mp3>initial-r-clusters.mp3",
      "drillfile": "modules/364cfa10-59a5-4fe5-9156-2d39f795a24b.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:03:29.227657'),
      "id": "4570f24c8cdd49c79c43d8053d051858",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH R",
      "audiofile": "modules/6ccdf540-73c3-4583-827e-bbea087d0e85.mp3>initial-r-clusters.mp3",
      "drillfile": "modules/364cfa10-59a5-4fe5-9156-2d39f795a24b.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:03:29.227657'),
      "id": "4570f24c8cdd49c79c43d8053d051858",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH R",
      "audiofile": "modules/6ccdf540-73c3-4583-827e-bbea087d0e85.mp3>initial-r-clusters.mp3",
      "drillfile": "modules/364cfa10-59a5-4fe5-9156-2d39f795a24b.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:03:29.227657'),
      "id": "4570f24c8cdd49c79c43d8053d051858",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH R",
      "audiofile": "modules/6ccdf540-73c3-4583-827e-bbea087d0e85.mp3>initial-r-clusters.mp3",
      "drillfile": "modules/364cfa10-59a5-4fe5-9156-2d39f795a24b.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:03:29.227657'),
      "id": "4570f24c8cdd49c79c43d8053d051858",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH R",
      "audiofile": "modules/6ccdf540-73c3-4583-827e-bbea087d0e85.mp3>initial-r-clusters.mp3",
      "drillfile": "modules/364cfa10-59a5-4fe5-9156-2d39f795a24b.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:03:29.227657'),
      "id": "4570f24c8cdd49c79c43d8053d051858",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH R",
      "audiofile": "modules/6ccdf540-73c3-4583-827e-bbea087d0e85.mp3>initial-r-clusters.mp3",
      "drillfile": "modules/364cfa10-59a5-4fe5-9156-2d39f795a24b.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:03:29.512582'),
      "id": "f89d59cda4cc4e3c9051d4240acee07a",
      "description": "THE CASK OF Amontillado",
      "audiofile": "modules/1325268a-6dfd-4e23-90e3-1e06458f9977.mp3>The_Cask_of_Amontillado_-_By_Edgar_Allan_Poe (1).mp3",
      "drillfile": "modules/701a299e-8fac-47e4-a840-27d89e2420c1.pdf>The Cask of Amontillado (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:03:29.512582'),
      "id": "f89d59cda4cc4e3c9051d4240acee07a",
      "description": "THE CASK OF Amontillado",
      "audiofile": "modules/1325268a-6dfd-4e23-90e3-1e06458f9977.mp3>The_Cask_of_Amontillado_-_By_Edgar_Allan_Poe (1).mp3",
      "drillfile": "modules/701a299e-8fac-47e4-a840-27d89e2420c1.pdf>The Cask of Amontillado (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:03:29.512582'),
      "id": "f89d59cda4cc4e3c9051d4240acee07a",
      "description": "THE CASK OF Amontillado",
      "audiofile": "modules/1325268a-6dfd-4e23-90e3-1e06458f9977.mp3>The_Cask_of_Amontillado_-_By_Edgar_Allan_Poe (1).mp3",
      "drillfile": "modules/701a299e-8fac-47e4-a840-27d89e2420c1.pdf>The Cask of Amontillado (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:03:29.512582'),
      "id": "f89d59cda4cc4e3c9051d4240acee07a",
      "description": "THE CASK OF Amontillado",
      "audiofile": "modules/1325268a-6dfd-4e23-90e3-1e06458f9977.mp3>The_Cask_of_Amontillado_-_By_Edgar_Allan_Poe (1).mp3",
      "drillfile": "modules/701a299e-8fac-47e4-a840-27d89e2420c1.pdf>The Cask of Amontillado (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:03:29.512582'),
      "id": "f89d59cda4cc4e3c9051d4240acee07a",
      "description": "THE CASK OF Amontillado",
      "audiofile": "modules/1325268a-6dfd-4e23-90e3-1e06458f9977.mp3>The_Cask_of_Amontillado_-_By_Edgar_Allan_Poe (1).mp3",
      "drillfile": "modules/701a299e-8fac-47e4-a840-27d89e2420c1.pdf>The Cask of Amontillado (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:03:29.512582'),
      "id": "f89d59cda4cc4e3c9051d4240acee07a",
      "description": "THE CASK OF Amontillado",
      "audiofile": "modules/1325268a-6dfd-4e23-90e3-1e06458f9977.mp3>The_Cask_of_Amontillado_-_By_Edgar_Allan_Poe (1).mp3",
      "drillfile": "modules/701a299e-8fac-47e4-a840-27d89e2420c1.pdf>The Cask of Amontillado (1).pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:04:07.544824'),
      "id": "62db087b54ca4f8bbf5d00cca1e45f6b",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH S",
      "audiofile": "modules/f0ddac47-48e3-404b-a106-756aef623927.mp3>s.mp3",
      "drillfile": "modules/bc582cec-7d83-4e3d-9a50-07fc42205a68.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:04:07.544824'),
      "id": "62db087b54ca4f8bbf5d00cca1e45f6b",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH S",
      "audiofile": "modules/f0ddac47-48e3-404b-a106-756aef623927.mp3>s.mp3",
      "drillfile": "modules/bc582cec-7d83-4e3d-9a50-07fc42205a68.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:04:07.544824'),
      "id": "62db087b54ca4f8bbf5d00cca1e45f6b",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH S",
      "audiofile": "modules/f0ddac47-48e3-404b-a106-756aef623927.mp3>s.mp3",
      "drillfile": "modules/bc582cec-7d83-4e3d-9a50-07fc42205a68.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:04:07.544824'),
      "id": "62db087b54ca4f8bbf5d00cca1e45f6b",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH S",
      "audiofile": "modules/f0ddac47-48e3-404b-a106-756aef623927.mp3>s.mp3",
      "drillfile": "modules/bc582cec-7d83-4e3d-9a50-07fc42205a68.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:04:07.544824'),
      "id": "62db087b54ca4f8bbf5d00cca1e45f6b",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH S",
      "audiofile": "modules/f0ddac47-48e3-404b-a106-756aef623927.mp3>s.mp3",
      "drillfile": "modules/bc582cec-7d83-4e3d-9a50-07fc42205a68.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:04:07.544824'),
      "id": "62db087b54ca4f8bbf5d00cca1e45f6b",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH S",
      "audiofile": "modules/f0ddac47-48e3-404b-a106-756aef623927.mp3>s.mp3",
      "drillfile": "modules/bc582cec-7d83-4e3d-9a50-07fc42205a68.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:04:18.539371'),
      "id": "0e435a2433f94d389345d6c17ebd0d9a",
      "description": "The Purloined by Edgar Allan Poe",
      "audiofile": "modules/7373d64f-1ed1-47be-b159-feafb5f5f3db.mp3>The_Purloined_Letter_-_By_Edgar_Alen_Poe (1).mp3",
      "drillfile": "modules/b6fdde0b-0847-4074-ba8e-c260a5831d85.pdf>The Purloined Letter (By Edgar Allan Poe) (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:04:18.539371'),
      "id": "0e435a2433f94d389345d6c17ebd0d9a",
      "description": "The Purloined by Edgar Allan Poe",
      "audiofile": "modules/7373d64f-1ed1-47be-b159-feafb5f5f3db.mp3>The_Purloined_Letter_-_By_Edgar_Alen_Poe (1).mp3",
      "drillfile": "modules/b6fdde0b-0847-4074-ba8e-c260a5831d85.pdf>The Purloined Letter (By Edgar Allan Poe) (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:04:18.539371'),
      "id": "0e435a2433f94d389345d6c17ebd0d9a",
      "description": "The Purloined by Edgar Allan Poe",
      "audiofile": "modules/7373d64f-1ed1-47be-b159-feafb5f5f3db.mp3>The_Purloined_Letter_-_By_Edgar_Alen_Poe (1).mp3",
      "drillfile": "modules/b6fdde0b-0847-4074-ba8e-c260a5831d85.pdf>The Purloined Letter (By Edgar Allan Poe) (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:04:18.539371'),
      "id": "0e435a2433f94d389345d6c17ebd0d9a",
      "description": "The Purloined by Edgar Allan Poe",
      "audiofile": "modules/7373d64f-1ed1-47be-b159-feafb5f5f3db.mp3>The_Purloined_Letter_-_By_Edgar_Alen_Poe (1).mp3",
      "drillfile": "modules/b6fdde0b-0847-4074-ba8e-c260a5831d85.pdf>The Purloined Letter (By Edgar Allan Poe) (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:04:18.539371'),
      "id": "0e435a2433f94d389345d6c17ebd0d9a",
      "description": "The Purloined by Edgar Allan Poe",
      "audiofile": "modules/7373d64f-1ed1-47be-b159-feafb5f5f3db.mp3>The_Purloined_Letter_-_By_Edgar_Alen_Poe (1).mp3",
      "drillfile": "modules/b6fdde0b-0847-4074-ba8e-c260a5831d85.pdf>The Purloined Letter (By Edgar Allan Poe) (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:04:18.539371'),
      "id": "0e435a2433f94d389345d6c17ebd0d9a",
      "description": "The Purloined by Edgar Allan Poe",
      "audiofile": "modules/7373d64f-1ed1-47be-b159-feafb5f5f3db.mp3>The_Purloined_Letter_-_By_Edgar_Alen_Poe (1).mp3",
      "drillfile": "modules/b6fdde0b-0847-4074-ba8e-c260a5831d85.pdf>The Purloined Letter (By Edgar Allan Poe) (1).pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:04:32.237604'),
      "id": "8ad394c238d245b7821a65d4e5f3b46b",
      "description": "OFFER ASSISTANCE",
      "audiofile": "modules/95021647-50ee-4e82-b408-2442aaf7da30.mp3>OFFER.mp3",
      "drillfile": "modules/a22f025d-33fc-4a7c-975c-8cf01560d4da.pdf>7 OFFER ASSISTANCE.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:04:32.237604'),
      "id": "8ad394c238d245b7821a65d4e5f3b46b",
      "description": "OFFER ASSISTANCE",
      "audiofile": "modules/95021647-50ee-4e82-b408-2442aaf7da30.mp3>OFFER.mp3",
      "drillfile": "modules/a22f025d-33fc-4a7c-975c-8cf01560d4da.pdf>7 OFFER ASSISTANCE.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:04:32.237604'),
      "id": "8ad394c238d245b7821a65d4e5f3b46b",
      "description": "OFFER ASSISTANCE",
      "audiofile": "modules/95021647-50ee-4e82-b408-2442aaf7da30.mp3>OFFER.mp3",
      "drillfile": "modules/a22f025d-33fc-4a7c-975c-8cf01560d4da.pdf>7 OFFER ASSISTANCE.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:04:32.237604'),
      "id": "8ad394c238d245b7821a65d4e5f3b46b",
      "description": "OFFER ASSISTANCE",
      "audiofile": "modules/95021647-50ee-4e82-b408-2442aaf7da30.mp3>OFFER.mp3",
      "drillfile": "modules/a22f025d-33fc-4a7c-975c-8cf01560d4da.pdf>7 OFFER ASSISTANCE.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:04:32.237604'),
      "id": "8ad394c238d245b7821a65d4e5f3b46b",
      "description": "OFFER ASSISTANCE",
      "audiofile": "modules/95021647-50ee-4e82-b408-2442aaf7da30.mp3>OFFER.mp3",
      "drillfile": "modules/a22f025d-33fc-4a7c-975c-8cf01560d4da.pdf>7 OFFER ASSISTANCE.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:04:32.237604'),
      "id": "8ad394c238d245b7821a65d4e5f3b46b",
      "description": "OFFER ASSISTANCE",
      "audiofile": "modules/95021647-50ee-4e82-b408-2442aaf7da30.mp3>OFFER.mp3",
      "drillfile": "modules/a22f025d-33fc-4a7c-975c-8cf01560d4da.pdf>7 OFFER ASSISTANCE.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:04:55.556716'),
      "id": "146153203e4d4e1b8b513376bd8d6b0f",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH STR",
      "audiofile": "modules/e7adadaf-f31a-41b5-8ff2-efa9c2b0ca04.mp3>str-clusters.mp3",
      "drillfile": "modules/d088c943-9d49-4e4b-9b7e-a613a5f1ede6.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:04:55.556716'),
      "id": "146153203e4d4e1b8b513376bd8d6b0f",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH STR",
      "audiofile": "modules/e7adadaf-f31a-41b5-8ff2-efa9c2b0ca04.mp3>str-clusters.mp3",
      "drillfile": "modules/d088c943-9d49-4e4b-9b7e-a613a5f1ede6.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:04:55.556716'),
      "id": "146153203e4d4e1b8b513376bd8d6b0f",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH STR",
      "audiofile": "modules/e7adadaf-f31a-41b5-8ff2-efa9c2b0ca04.mp3>str-clusters.mp3",
      "drillfile": "modules/d088c943-9d49-4e4b-9b7e-a613a5f1ede6.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:04:55.556716'),
      "id": "146153203e4d4e1b8b513376bd8d6b0f",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH STR",
      "audiofile": "modules/e7adadaf-f31a-41b5-8ff2-efa9c2b0ca04.mp3>str-clusters.mp3",
      "drillfile": "modules/d088c943-9d49-4e4b-9b7e-a613a5f1ede6.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:04:55.556716'),
      "id": "146153203e4d4e1b8b513376bd8d6b0f",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH STR",
      "audiofile": "modules/e7adadaf-f31a-41b5-8ff2-efa9c2b0ca04.mp3>str-clusters.mp3",
      "drillfile": "modules/d088c943-9d49-4e4b-9b7e-a613a5f1ede6.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:04:55.556716'),
      "id": "146153203e4d4e1b8b513376bd8d6b0f",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ CLUSTERS WITH STR",
      "audiofile": "modules/e7adadaf-f31a-41b5-8ff2-efa9c2b0ca04.mp3>str-clusters.mp3",
      "drillfile": "modules/d088c943-9d49-4e4b-9b7e-a613a5f1ede6.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:05:03.92511'),
      "id": "ec37fb78fd7d43dd893e654dbfdca32e",
      "description": "BEHAVE RESPECTFULLY",
      "audiofile": "modules/11498760-a46e-4ccb-986b-1d49f7c0044a.mp3>BEHAVE.mp3",
      "drillfile": "modules/59e7d18f-cd3a-487d-97ab-25c45fb6907f.pdf>8 BEHAVE RESPECTFULLY.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:05:03.92511'),
      "id": "ec37fb78fd7d43dd893e654dbfdca32e",
      "description": "BEHAVE RESPECTFULLY",
      "audiofile": "modules/11498760-a46e-4ccb-986b-1d49f7c0044a.mp3>BEHAVE.mp3",
      "drillfile": "modules/59e7d18f-cd3a-487d-97ab-25c45fb6907f.pdf>8 BEHAVE RESPECTFULLY.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:05:03.92511'),
      "id": "ec37fb78fd7d43dd893e654dbfdca32e",
      "description": "BEHAVE RESPECTFULLY",
      "audiofile": "modules/11498760-a46e-4ccb-986b-1d49f7c0044a.mp3>BEHAVE.mp3",
      "drillfile": "modules/59e7d18f-cd3a-487d-97ab-25c45fb6907f.pdf>8 BEHAVE RESPECTFULLY.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:05:03.92511'),
      "id": "ec37fb78fd7d43dd893e654dbfdca32e",
      "description": "BEHAVE RESPECTFULLY",
      "audiofile": "modules/11498760-a46e-4ccb-986b-1d49f7c0044a.mp3>BEHAVE.mp3",
      "drillfile": "modules/59e7d18f-cd3a-487d-97ab-25c45fb6907f.pdf>8 BEHAVE RESPECTFULLY.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:05:03.92511'),
      "id": "ec37fb78fd7d43dd893e654dbfdca32e",
      "description": "BEHAVE RESPECTFULLY",
      "audiofile": "modules/11498760-a46e-4ccb-986b-1d49f7c0044a.mp3>BEHAVE.mp3",
      "drillfile": "modules/59e7d18f-cd3a-487d-97ab-25c45fb6907f.pdf>8 BEHAVE RESPECTFULLY.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:05:03.92511'),
      "id": "ec37fb78fd7d43dd893e654dbfdca32e",
      "description": "BEHAVE RESPECTFULLY",
      "audiofile": "modules/11498760-a46e-4ccb-986b-1d49f7c0044a.mp3>BEHAVE.mp3",
      "drillfile": "modules/59e7d18f-cd3a-487d-97ab-25c45fb6907f.pdf>8 BEHAVE RESPECTFULLY.pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:05:16.020088'),
      "id": "5036581f64db4705bd14f8eba4ec343d",
      "description": "The Tell-Tale Heart by Edgar Allan Poe",
      "audiofile": "modules/8b0231b1-7c6d-4072-b28f-c7b5f6149afc.mp3>The_Tell-Tale_Heart_-_By_Edgar_Allan_Poe (1).mp3",
      "drillfile": "modules/826134fe-b2c4-4272-a5de-544a4863e82b.pdf>The Tell-Tale Heart (By Edgar Allan Poe) (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:05:16.020088'),
      "id": "5036581f64db4705bd14f8eba4ec343d",
      "description": "The Tell-Tale Heart by Edgar Allan Poe",
      "audiofile": "modules/8b0231b1-7c6d-4072-b28f-c7b5f6149afc.mp3>The_Tell-Tale_Heart_-_By_Edgar_Allan_Poe (1).mp3",
      "drillfile": "modules/826134fe-b2c4-4272-a5de-544a4863e82b.pdf>The Tell-Tale Heart (By Edgar Allan Poe) (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:05:16.020088'),
      "id": "5036581f64db4705bd14f8eba4ec343d",
      "description": "The Tell-Tale Heart by Edgar Allan Poe",
      "audiofile": "modules/8b0231b1-7c6d-4072-b28f-c7b5f6149afc.mp3>The_Tell-Tale_Heart_-_By_Edgar_Allan_Poe (1).mp3",
      "drillfile": "modules/826134fe-b2c4-4272-a5de-544a4863e82b.pdf>The Tell-Tale Heart (By Edgar Allan Poe) (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:05:16.020088'),
      "id": "5036581f64db4705bd14f8eba4ec343d",
      "description": "The Tell-Tale Heart by Edgar Allan Poe",
      "audiofile": "modules/8b0231b1-7c6d-4072-b28f-c7b5f6149afc.mp3>The_Tell-Tale_Heart_-_By_Edgar_Allan_Poe (1).mp3",
      "drillfile": "modules/826134fe-b2c4-4272-a5de-544a4863e82b.pdf>The Tell-Tale Heart (By Edgar Allan Poe) (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:05:16.020088'),
      "id": "5036581f64db4705bd14f8eba4ec343d",
      "description": "The Tell-Tale Heart by Edgar Allan Poe",
      "audiofile": "modules/8b0231b1-7c6d-4072-b28f-c7b5f6149afc.mp3>The_Tell-Tale_Heart_-_By_Edgar_Allan_Poe (1).mp3",
      "drillfile": "modules/826134fe-b2c4-4272-a5de-544a4863e82b.pdf>The Tell-Tale Heart (By Edgar Allan Poe) (1).pdf"
    },
    {
      "practiceid": "1db75639a3884fc1aef7900e2c370ef1",
      "timestamp": new Date('2024-03-14 09:05:16.020088'),
      "id": "5036581f64db4705bd14f8eba4ec343d",
      "description": "The Tell-Tale Heart by Edgar Allan Poe",
      "audiofile": "modules/8b0231b1-7c6d-4072-b28f-c7b5f6149afc.mp3>The_Tell-Tale_Heart_-_By_Edgar_Allan_Poe (1).mp3",
      "drillfile": "modules/826134fe-b2c4-4272-a5de-544a4863e82b.pdf>The Tell-Tale Heart (By Edgar Allan Poe) (1).pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:05:32.134671'),
      "id": "8db1073aeeb346c49adc6db871e7519a",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ FOUR FINAL CONSONANTS",
      "audiofile": "modules/b68af6de-5575-44f7-9099-791d800d741c.mp3>Final-clusters.mp3",
      "drillfile": "modules/4c2929e1-ff5e-45ea-8fce-0b62829d1870.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:05:32.134671'),
      "id": "8db1073aeeb346c49adc6db871e7519a",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ FOUR FINAL CONSONANTS",
      "audiofile": "modules/b68af6de-5575-44f7-9099-791d800d741c.mp3>Final-clusters.mp3",
      "drillfile": "modules/4c2929e1-ff5e-45ea-8fce-0b62829d1870.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:05:32.134671'),
      "id": "8db1073aeeb346c49adc6db871e7519a",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ FOUR FINAL CONSONANTS",
      "audiofile": "modules/b68af6de-5575-44f7-9099-791d800d741c.mp3>Final-clusters.mp3",
      "drillfile": "modules/4c2929e1-ff5e-45ea-8fce-0b62829d1870.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:05:32.134671'),
      "id": "8db1073aeeb346c49adc6db871e7519a",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ FOUR FINAL CONSONANTS",
      "audiofile": "modules/b68af6de-5575-44f7-9099-791d800d741c.mp3>Final-clusters.mp3",
      "drillfile": "modules/4c2929e1-ff5e-45ea-8fce-0b62829d1870.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:05:32.134671'),
      "id": "8db1073aeeb346c49adc6db871e7519a",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ FOUR FINAL CONSONANTS",
      "audiofile": "modules/b68af6de-5575-44f7-9099-791d800d741c.mp3>Final-clusters.mp3",
      "drillfile": "modules/4c2929e1-ff5e-45ea-8fce-0b62829d1870.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:05:32.134671'),
      "id": "8db1073aeeb346c49adc6db871e7519a",
      "description": "HOW TO PRONOUNCE CONSONANT CLUSTERS _ FOUR FINAL CONSONANTS",
      "audiofile": "modules/b68af6de-5575-44f7-9099-791d800d741c.mp3>Final-clusters.mp3",
      "drillfile": "modules/4c2929e1-ff5e-45ea-8fce-0b62829d1870.pdf>How To Pronounce Consonant Clusters.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:05:47.703452'),
      "id": "b56f5b7c0bd74c29a18eb7e114e92d3d",
      "description": "CASUAL CONVERSATIONS",
      "audiofile": "modules/6cd23675-cc67-4d75-ab26-1b09cef7e6cc.mp3>CASUAL.mp3",
      "drillfile": "modules/670ccabc-6bba-46aa-b0e7-0ec176c5c08c.pdf>11 CASUAL CONVERSATIONS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:05:47.703452'),
      "id": "b56f5b7c0bd74c29a18eb7e114e92d3d",
      "description": "CASUAL CONVERSATIONS",
      "audiofile": "modules/6cd23675-cc67-4d75-ab26-1b09cef7e6cc.mp3>CASUAL.mp3",
      "drillfile": "modules/670ccabc-6bba-46aa-b0e7-0ec176c5c08c.pdf>11 CASUAL CONVERSATIONS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:05:47.703452'),
      "id": "b56f5b7c0bd74c29a18eb7e114e92d3d",
      "description": "CASUAL CONVERSATIONS",
      "audiofile": "modules/6cd23675-cc67-4d75-ab26-1b09cef7e6cc.mp3>CASUAL.mp3",
      "drillfile": "modules/670ccabc-6bba-46aa-b0e7-0ec176c5c08c.pdf>11 CASUAL CONVERSATIONS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:05:47.703452'),
      "id": "b56f5b7c0bd74c29a18eb7e114e92d3d",
      "description": "CASUAL CONVERSATIONS",
      "audiofile": "modules/6cd23675-cc67-4d75-ab26-1b09cef7e6cc.mp3>CASUAL.mp3",
      "drillfile": "modules/670ccabc-6bba-46aa-b0e7-0ec176c5c08c.pdf>11 CASUAL CONVERSATIONS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:05:47.703452'),
      "id": "b56f5b7c0bd74c29a18eb7e114e92d3d",
      "description": "CASUAL CONVERSATIONS",
      "audiofile": "modules/6cd23675-cc67-4d75-ab26-1b09cef7e6cc.mp3>CASUAL.mp3",
      "drillfile": "modules/670ccabc-6bba-46aa-b0e7-0ec176c5c08c.pdf>11 CASUAL CONVERSATIONS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:05:47.703452'),
      "id": "b56f5b7c0bd74c29a18eb7e114e92d3d",
      "description": "CASUAL CONVERSATIONS",
      "audiofile": "modules/6cd23675-cc67-4d75-ab26-1b09cef7e6cc.mp3>CASUAL.mp3",
      "drillfile": "modules/670ccabc-6bba-46aa-b0e7-0ec176c5c08c.pdf>11 CASUAL CONVERSATIONS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:06:46.360136'),
      "id": "8798f97dcf5f4302bad69ddf3a382cc9",
      "description": "DONTS",
      "audiofile": "modules/8a0a2f85-445e-4110-b72e-c4a1d948c5b5.mp3>DONTS.mp3",
      "drillfile": "modules/222c6957-d77c-499b-b6f4-05547ec958f1.pdf>12 DON_TS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:06:46.360136'),
      "id": "8798f97dcf5f4302bad69ddf3a382cc9",
      "description": "DONTS",
      "audiofile": "modules/8a0a2f85-445e-4110-b72e-c4a1d948c5b5.mp3>DONTS.mp3",
      "drillfile": "modules/222c6957-d77c-499b-b6f4-05547ec958f1.pdf>12 DON_TS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:06:46.360136'),
      "id": "8798f97dcf5f4302bad69ddf3a382cc9",
      "description": "DONTS",
      "audiofile": "modules/8a0a2f85-445e-4110-b72e-c4a1d948c5b5.mp3>DONTS.mp3",
      "drillfile": "modules/222c6957-d77c-499b-b6f4-05547ec958f1.pdf>12 DON_TS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:06:46.360136'),
      "id": "8798f97dcf5f4302bad69ddf3a382cc9",
      "description": "DONTS",
      "audiofile": "modules/8a0a2f85-445e-4110-b72e-c4a1d948c5b5.mp3>DONTS.mp3",
      "drillfile": "modules/222c6957-d77c-499b-b6f4-05547ec958f1.pdf>12 DON_TS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:06:46.360136'),
      "id": "8798f97dcf5f4302bad69ddf3a382cc9",
      "description": "DONTS",
      "audiofile": "modules/8a0a2f85-445e-4110-b72e-c4a1d948c5b5.mp3>DONTS.mp3",
      "drillfile": "modules/222c6957-d77c-499b-b6f4-05547ec958f1.pdf>12 DON_TS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:06:46.360136'),
      "id": "8798f97dcf5f4302bad69ddf3a382cc9",
      "description": "DONTS",
      "audiofile": "modules/8a0a2f85-445e-4110-b72e-c4a1d948c5b5.mp3>DONTS.mp3",
      "drillfile": "modules/222c6957-d77c-499b-b6f4-05547ec958f1.pdf>12 DON_TS.pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:06:53.934508'),
      "id": "833762aacd764784b18f55d7c31e40df",
      "description": "HOW TO STAY MOTIVATED",
      "audiofile": "modules/4e4e2985-3c25-4ad5-9957-4194e0e32023.mp3>Lesson-20-How-to-stay-motivated (1).mp3",
      "drillfile": "modules/8035bd33-47cd-4acc-b7c0-50e83e765f67.pdf>Lesson-20-Motivation (1).pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:06:53.934508'),
      "id": "833762aacd764784b18f55d7c31e40df",
      "description": "HOW TO STAY MOTIVATED",
      "audiofile": "modules/4e4e2985-3c25-4ad5-9957-4194e0e32023.mp3>Lesson-20-How-to-stay-motivated (1).mp3",
      "drillfile": "modules/8035bd33-47cd-4acc-b7c0-50e83e765f67.pdf>Lesson-20-Motivation (1).pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:06:53.934508'),
      "id": "833762aacd764784b18f55d7c31e40df",
      "description": "HOW TO STAY MOTIVATED",
      "audiofile": "modules/4e4e2985-3c25-4ad5-9957-4194e0e32023.mp3>Lesson-20-How-to-stay-motivated (1).mp3",
      "drillfile": "modules/8035bd33-47cd-4acc-b7c0-50e83e765f67.pdf>Lesson-20-Motivation (1).pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:06:53.934508'),
      "id": "833762aacd764784b18f55d7c31e40df",
      "description": "HOW TO STAY MOTIVATED",
      "audiofile": "modules/4e4e2985-3c25-4ad5-9957-4194e0e32023.mp3>Lesson-20-How-to-stay-motivated (1).mp3",
      "drillfile": "modules/8035bd33-47cd-4acc-b7c0-50e83e765f67.pdf>Lesson-20-Motivation (1).pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:06:53.934508'),
      "id": "833762aacd764784b18f55d7c31e40df",
      "description": "HOW TO STAY MOTIVATED",
      "audiofile": "modules/4e4e2985-3c25-4ad5-9957-4194e0e32023.mp3>Lesson-20-How-to-stay-motivated (1).mp3",
      "drillfile": "modules/8035bd33-47cd-4acc-b7c0-50e83e765f67.pdf>Lesson-20-Motivation (1).pdf"
    },
    {
      "practiceid": "2fa8bafee25e477aa28dc027c8642cdc",
      "timestamp": new Date('2024-03-14 09:06:53.934508'),
      "id": "833762aacd764784b18f55d7c31e40df",
      "description": "HOW TO STAY MOTIVATED",
      "audiofile": "modules/4e4e2985-3c25-4ad5-9957-4194e0e32023.mp3>Lesson-20-How-to-stay-motivated (1).mp3",
      "drillfile": "modules/8035bd33-47cd-4acc-b7c0-50e83e765f67.pdf>Lesson-20-Motivation (1).pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:08:32.125564'),
      "id": "68683ef70ba7416bafb060e5904a2f06",
      "description": "CONGENIAL PHRASES",
      "audiofile": "modules/9b11573d-559c-402f-8081-16c32b732dc0.mp3>congenial.mp3",
      "drillfile": "modules/98521529-bb73-4426-95d6-49b09f8692f6.pdf>CONGENIAL PHRASES.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:08:32.125564'),
      "id": "68683ef70ba7416bafb060e5904a2f06",
      "description": "CONGENIAL PHRASES",
      "audiofile": "modules/9b11573d-559c-402f-8081-16c32b732dc0.mp3>congenial.mp3",
      "drillfile": "modules/98521529-bb73-4426-95d6-49b09f8692f6.pdf>CONGENIAL PHRASES.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:08:32.125564'),
      "id": "68683ef70ba7416bafb060e5904a2f06",
      "description": "CONGENIAL PHRASES",
      "audiofile": "modules/9b11573d-559c-402f-8081-16c32b732dc0.mp3>congenial.mp3",
      "drillfile": "modules/98521529-bb73-4426-95d6-49b09f8692f6.pdf>CONGENIAL PHRASES.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:08:32.125564'),
      "id": "68683ef70ba7416bafb060e5904a2f06",
      "description": "CONGENIAL PHRASES",
      "audiofile": "modules/9b11573d-559c-402f-8081-16c32b732dc0.mp3>congenial.mp3",
      "drillfile": "modules/98521529-bb73-4426-95d6-49b09f8692f6.pdf>CONGENIAL PHRASES.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:08:32.125564'),
      "id": "68683ef70ba7416bafb060e5904a2f06",
      "description": "CONGENIAL PHRASES",
      "audiofile": "modules/9b11573d-559c-402f-8081-16c32b732dc0.mp3>congenial.mp3",
      "drillfile": "modules/98521529-bb73-4426-95d6-49b09f8692f6.pdf>CONGENIAL PHRASES.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:08:32.125564'),
      "id": "68683ef70ba7416bafb060e5904a2f06",
      "description": "CONGENIAL PHRASES",
      "audiofile": "modules/9b11573d-559c-402f-8081-16c32b732dc0.mp3>congenial.mp3",
      "drillfile": "modules/98521529-bb73-4426-95d6-49b09f8692f6.pdf>CONGENIAL PHRASES.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:10:21.232385'),
      "id": "f8e910a9c40440c88491c99f9b85b84b",
      "description": "EXPLORING THE TOWN",
      "audiofile": "modules/eaa32d13-77a5-4eac-b83b-f81947715eb7.mp3>EXPLORING.mp3",
      "drillfile": "modules/69e91757-7815-41c3-a389-bf4d094724d6.pdf>21 EXPLORING THE TOWN.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:10:21.232385'),
      "id": "f8e910a9c40440c88491c99f9b85b84b",
      "description": "EXPLORING THE TOWN",
      "audiofile": "modules/eaa32d13-77a5-4eac-b83b-f81947715eb7.mp3>EXPLORING.mp3",
      "drillfile": "modules/69e91757-7815-41c3-a389-bf4d094724d6.pdf>21 EXPLORING THE TOWN.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:10:21.232385'),
      "id": "f8e910a9c40440c88491c99f9b85b84b",
      "description": "EXPLORING THE TOWN",
      "audiofile": "modules/eaa32d13-77a5-4eac-b83b-f81947715eb7.mp3>EXPLORING.mp3",
      "drillfile": "modules/69e91757-7815-41c3-a389-bf4d094724d6.pdf>21 EXPLORING THE TOWN.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:10:21.232385'),
      "id": "f8e910a9c40440c88491c99f9b85b84b",
      "description": "EXPLORING THE TOWN",
      "audiofile": "modules/eaa32d13-77a5-4eac-b83b-f81947715eb7.mp3>EXPLORING.mp3",
      "drillfile": "modules/69e91757-7815-41c3-a389-bf4d094724d6.pdf>21 EXPLORING THE TOWN.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:10:21.232385'),
      "id": "f8e910a9c40440c88491c99f9b85b84b",
      "description": "EXPLORING THE TOWN",
      "audiofile": "modules/eaa32d13-77a5-4eac-b83b-f81947715eb7.mp3>EXPLORING.mp3",
      "drillfile": "modules/69e91757-7815-41c3-a389-bf4d094724d6.pdf>21 EXPLORING THE TOWN.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:10:21.232385'),
      "id": "f8e910a9c40440c88491c99f9b85b84b",
      "description": "EXPLORING THE TOWN",
      "audiofile": "modules/eaa32d13-77a5-4eac-b83b-f81947715eb7.mp3>EXPLORING.mp3",
      "drillfile": "modules/69e91757-7815-41c3-a389-bf4d094724d6.pdf>21 EXPLORING THE TOWN.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:11:09.278931'),
      "id": "28e0f09a26134356811f7c16e85eb21f",
      "description": "IPA PHONETICS 1",
      "audiofile": "modules/f245424f-7700-4d72-8af4-34468f101153.mp3>cupluck.mp3",
      "drillfile": "modules/5f72afb5-8a1a-4bca-b120-522bc807c6c7.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:11:09.278931'),
      "id": "28e0f09a26134356811f7c16e85eb21f",
      "description": "IPA PHONETICS 1",
      "audiofile": "modules/f245424f-7700-4d72-8af4-34468f101153.mp3>cupluck.mp3",
      "drillfile": "modules/5f72afb5-8a1a-4bca-b120-522bc807c6c7.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:11:09.278931'),
      "id": "28e0f09a26134356811f7c16e85eb21f",
      "description": "IPA PHONETICS 1",
      "audiofile": "modules/f245424f-7700-4d72-8af4-34468f101153.mp3>cupluck.mp3",
      "drillfile": "modules/5f72afb5-8a1a-4bca-b120-522bc807c6c7.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:11:09.278931'),
      "id": "28e0f09a26134356811f7c16e85eb21f",
      "description": "IPA PHONETICS 1",
      "audiofile": "modules/f245424f-7700-4d72-8af4-34468f101153.mp3>cupluck.mp3",
      "drillfile": "modules/5f72afb5-8a1a-4bca-b120-522bc807c6c7.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:11:09.278931'),
      "id": "28e0f09a26134356811f7c16e85eb21f",
      "description": "IPA PHONETICS 1",
      "audiofile": "modules/f245424f-7700-4d72-8af4-34468f101153.mp3>cupluck.mp3",
      "drillfile": "modules/5f72afb5-8a1a-4bca-b120-522bc807c6c7.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:11:09.278931'),
      "id": "28e0f09a26134356811f7c16e85eb21f",
      "description": "IPA PHONETICS 1",
      "audiofile": "modules/f245424f-7700-4d72-8af4-34468f101153.mp3>cupluck.mp3",
      "drillfile": "modules/5f72afb5-8a1a-4bca-b120-522bc807c6c7.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:12:57.148031'),
      "id": "5d7e633bb51e40b58f01afcd4b08d5de",
      "description": "RESPONDING TO RECOMMENDATIONS",
      "audiofile": "modules/e08f8eda-a006-4a8c-90fd-5f16e4fa159b.mp3>RESPONSE.mp3",
      "drillfile": "modules/9fe5ee68-9894-42dc-a974-9b42d80533c3.pdf>24 RESPONDING.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:12:57.148031'),
      "id": "5d7e633bb51e40b58f01afcd4b08d5de",
      "description": "RESPONDING TO RECOMMENDATIONS",
      "audiofile": "modules/e08f8eda-a006-4a8c-90fd-5f16e4fa159b.mp3>RESPONSE.mp3",
      "drillfile": "modules/9fe5ee68-9894-42dc-a974-9b42d80533c3.pdf>24 RESPONDING.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:12:57.148031'),
      "id": "5d7e633bb51e40b58f01afcd4b08d5de",
      "description": "RESPONDING TO RECOMMENDATIONS",
      "audiofile": "modules/e08f8eda-a006-4a8c-90fd-5f16e4fa159b.mp3>RESPONSE.mp3",
      "drillfile": "modules/9fe5ee68-9894-42dc-a974-9b42d80533c3.pdf>24 RESPONDING.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:12:57.148031'),
      "id": "5d7e633bb51e40b58f01afcd4b08d5de",
      "description": "RESPONDING TO RECOMMENDATIONS",
      "audiofile": "modules/e08f8eda-a006-4a8c-90fd-5f16e4fa159b.mp3>RESPONSE.mp3",
      "drillfile": "modules/9fe5ee68-9894-42dc-a974-9b42d80533c3.pdf>24 RESPONDING.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:12:57.148031'),
      "id": "5d7e633bb51e40b58f01afcd4b08d5de",
      "description": "RESPONDING TO RECOMMENDATIONS",
      "audiofile": "modules/e08f8eda-a006-4a8c-90fd-5f16e4fa159b.mp3>RESPONSE.mp3",
      "drillfile": "modules/9fe5ee68-9894-42dc-a974-9b42d80533c3.pdf>24 RESPONDING.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:12:57.148031'),
      "id": "5d7e633bb51e40b58f01afcd4b08d5de",
      "description": "RESPONDING TO RECOMMENDATIONS",
      "audiofile": "modules/e08f8eda-a006-4a8c-90fd-5f16e4fa159b.mp3>RESPONSE.mp3",
      "drillfile": "modules/9fe5ee68-9894-42dc-a974-9b42d80533c3.pdf>24 RESPONDING.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:13:43.616218'),
      "id": "6ed5e59ffb934e0594ab75fdc5971e64",
      "description": "ACCEPTING INVITATION",
      "audiofile": "modules/6c667f4b-8767-428e-a5a6-d844e7abae90.mp3>ACCEPT.mp3",
      "drillfile": "modules/5acb8f97-283f-4aa5-95c5-6395e90aac51.pdf>26 ACCEPTING INVITATION.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:13:43.616218'),
      "id": "6ed5e59ffb934e0594ab75fdc5971e64",
      "description": "ACCEPTING INVITATION",
      "audiofile": "modules/6c667f4b-8767-428e-a5a6-d844e7abae90.mp3>ACCEPT.mp3",
      "drillfile": "modules/5acb8f97-283f-4aa5-95c5-6395e90aac51.pdf>26 ACCEPTING INVITATION.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:13:43.616218'),
      "id": "6ed5e59ffb934e0594ab75fdc5971e64",
      "description": "ACCEPTING INVITATION",
      "audiofile": "modules/6c667f4b-8767-428e-a5a6-d844e7abae90.mp3>ACCEPT.mp3",
      "drillfile": "modules/5acb8f97-283f-4aa5-95c5-6395e90aac51.pdf>26 ACCEPTING INVITATION.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:13:43.616218'),
      "id": "6ed5e59ffb934e0594ab75fdc5971e64",
      "description": "ACCEPTING INVITATION",
      "audiofile": "modules/6c667f4b-8767-428e-a5a6-d844e7abae90.mp3>ACCEPT.mp3",
      "drillfile": "modules/5acb8f97-283f-4aa5-95c5-6395e90aac51.pdf>26 ACCEPTING INVITATION.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:13:43.616218'),
      "id": "6ed5e59ffb934e0594ab75fdc5971e64",
      "description": "ACCEPTING INVITATION",
      "audiofile": "modules/6c667f4b-8767-428e-a5a6-d844e7abae90.mp3>ACCEPT.mp3",
      "drillfile": "modules/5acb8f97-283f-4aa5-95c5-6395e90aac51.pdf>26 ACCEPTING INVITATION.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:13:43.616218'),
      "id": "6ed5e59ffb934e0594ab75fdc5971e64",
      "description": "ACCEPTING INVITATION",
      "audiofile": "modules/6c667f4b-8767-428e-a5a6-d844e7abae90.mp3>ACCEPT.mp3",
      "drillfile": "modules/5acb8f97-283f-4aa5-95c5-6395e90aac51.pdf>26 ACCEPTING INVITATION.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:14:13.267382'),
      "id": "1873c4210064439c969aa5e6b00a0fb3",
      "description": "DECLINING INVITATION",
      "audiofile": "modules/69f024c5-7e8b-4f64-8c50-67a824d78ed1.mp3>DECLINE.mp3",
      "drillfile": "modules/08195cc4-f03a-44be-8140-8faf8d65e2d0.pdf>27 DECLINING INVITATIONS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:14:13.267382'),
      "id": "1873c4210064439c969aa5e6b00a0fb3",
      "description": "DECLINING INVITATION",
      "audiofile": "modules/69f024c5-7e8b-4f64-8c50-67a824d78ed1.mp3>DECLINE.mp3",
      "drillfile": "modules/08195cc4-f03a-44be-8140-8faf8d65e2d0.pdf>27 DECLINING INVITATIONS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:14:13.267382'),
      "id": "1873c4210064439c969aa5e6b00a0fb3",
      "description": "DECLINING INVITATION",
      "audiofile": "modules/69f024c5-7e8b-4f64-8c50-67a824d78ed1.mp3>DECLINE.mp3",
      "drillfile": "modules/08195cc4-f03a-44be-8140-8faf8d65e2d0.pdf>27 DECLINING INVITATIONS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:14:13.267382'),
      "id": "1873c4210064439c969aa5e6b00a0fb3",
      "description": "DECLINING INVITATION",
      "audiofile": "modules/69f024c5-7e8b-4f64-8c50-67a824d78ed1.mp3>DECLINE.mp3",
      "drillfile": "modules/08195cc4-f03a-44be-8140-8faf8d65e2d0.pdf>27 DECLINING INVITATIONS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:14:13.267382'),
      "id": "1873c4210064439c969aa5e6b00a0fb3",
      "description": "DECLINING INVITATION",
      "audiofile": "modules/69f024c5-7e8b-4f64-8c50-67a824d78ed1.mp3>DECLINE.mp3",
      "drillfile": "modules/08195cc4-f03a-44be-8140-8faf8d65e2d0.pdf>27 DECLINING INVITATIONS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:14:13.267382'),
      "id": "1873c4210064439c969aa5e6b00a0fb3",
      "description": "DECLINING INVITATION",
      "audiofile": "modules/69f024c5-7e8b-4f64-8c50-67a824d78ed1.mp3>DECLINE.mp3",
      "drillfile": "modules/08195cc4-f03a-44be-8140-8faf8d65e2d0.pdf>27 DECLINING INVITATIONS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:14:51.780075'),
      "id": "8731930807f14a99bc19a06615cdc3bd",
      "description": "WELCOMING VISITORS",
      "audiofile": "modules/f518fdd8-8e3a-4ad9-97df-474f709cb3c1.mp3>5 WELCOME.mp3",
      "drillfile": "modules/150c1f00-c825-42f4-ac52-fca961e37331.pdf>5 WELCOMING VISITORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:14:51.780075'),
      "id": "8731930807f14a99bc19a06615cdc3bd",
      "description": "WELCOMING VISITORS",
      "audiofile": "modules/f518fdd8-8e3a-4ad9-97df-474f709cb3c1.mp3>5 WELCOME.mp3",
      "drillfile": "modules/150c1f00-c825-42f4-ac52-fca961e37331.pdf>5 WELCOMING VISITORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:14:51.780075'),
      "id": "8731930807f14a99bc19a06615cdc3bd",
      "description": "WELCOMING VISITORS",
      "audiofile": "modules/f518fdd8-8e3a-4ad9-97df-474f709cb3c1.mp3>5 WELCOME.mp3",
      "drillfile": "modules/150c1f00-c825-42f4-ac52-fca961e37331.pdf>5 WELCOMING VISITORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:14:51.780075'),
      "id": "8731930807f14a99bc19a06615cdc3bd",
      "description": "WELCOMING VISITORS",
      "audiofile": "modules/f518fdd8-8e3a-4ad9-97df-474f709cb3c1.mp3>5 WELCOME.mp3",
      "drillfile": "modules/150c1f00-c825-42f4-ac52-fca961e37331.pdf>5 WELCOMING VISITORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:14:51.780075'),
      "id": "8731930807f14a99bc19a06615cdc3bd",
      "description": "WELCOMING VISITORS",
      "audiofile": "modules/f518fdd8-8e3a-4ad9-97df-474f709cb3c1.mp3>5 WELCOME.mp3",
      "drillfile": "modules/150c1f00-c825-42f4-ac52-fca961e37331.pdf>5 WELCOMING VISITORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:14:51.780075'),
      "id": "8731930807f14a99bc19a06615cdc3bd",
      "description": "WELCOMING VISITORS",
      "audiofile": "modules/f518fdd8-8e3a-4ad9-97df-474f709cb3c1.mp3>5 WELCOME.mp3",
      "drillfile": "modules/150c1f00-c825-42f4-ac52-fca961e37331.pdf>5 WELCOMING VISITORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:15:26.525668'),
      "id": "51059b5ee0934f6c9a3fbcaa8735280b",
      "description": "GREET & WELCOME",
      "audiofile": "modules/64cde511-d54f-46d6-b64b-ba7daa1bdc0f.mp3>GREET.mp3",
      "drillfile": "modules/448ad62f-7d65-4996-9d0c-3833a36e9a38.pdf>6 GREET & WELCOME.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:15:26.525668'),
      "id": "51059b5ee0934f6c9a3fbcaa8735280b",
      "description": "GREET & WELCOME",
      "audiofile": "modules/64cde511-d54f-46d6-b64b-ba7daa1bdc0f.mp3>GREET.mp3",
      "drillfile": "modules/448ad62f-7d65-4996-9d0c-3833a36e9a38.pdf>6 GREET & WELCOME.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:15:26.525668'),
      "id": "51059b5ee0934f6c9a3fbcaa8735280b",
      "description": "GREET & WELCOME",
      "audiofile": "modules/64cde511-d54f-46d6-b64b-ba7daa1bdc0f.mp3>GREET.mp3",
      "drillfile": "modules/448ad62f-7d65-4996-9d0c-3833a36e9a38.pdf>6 GREET & WELCOME.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:15:26.525668'),
      "id": "51059b5ee0934f6c9a3fbcaa8735280b",
      "description": "GREET & WELCOME",
      "audiofile": "modules/64cde511-d54f-46d6-b64b-ba7daa1bdc0f.mp3>GREET.mp3",
      "drillfile": "modules/448ad62f-7d65-4996-9d0c-3833a36e9a38.pdf>6 GREET & WELCOME.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:15:26.525668'),
      "id": "51059b5ee0934f6c9a3fbcaa8735280b",
      "description": "GREET & WELCOME",
      "audiofile": "modules/64cde511-d54f-46d6-b64b-ba7daa1bdc0f.mp3>GREET.mp3",
      "drillfile": "modules/448ad62f-7d65-4996-9d0c-3833a36e9a38.pdf>6 GREET & WELCOME.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:15:26.525668'),
      "id": "51059b5ee0934f6c9a3fbcaa8735280b",
      "description": "GREET & WELCOME",
      "audiofile": "modules/64cde511-d54f-46d6-b64b-ba7daa1bdc0f.mp3>GREET.mp3",
      "drillfile": "modules/448ad62f-7d65-4996-9d0c-3833a36e9a38.pdf>6 GREET & WELCOME.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:15:31.344413'),
      "id": "5245b14642e043199c626f6e83b9080d",
      "description": "IPA PHONETICS 2",
      "audiofile": "modules/2065f52c-f9b8-4cf0-b80c-1d84f60f3509.mp3>armfather-am.mp3",
      "drillfile": "modules/f15ad363-fe48-4f00-896d-1d95cd6c62f0.pdf>phonchart2008 (1) (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:15:31.344413'),
      "id": "5245b14642e043199c626f6e83b9080d",
      "description": "IPA PHONETICS 2",
      "audiofile": "modules/2065f52c-f9b8-4cf0-b80c-1d84f60f3509.mp3>armfather-am.mp3",
      "drillfile": "modules/f15ad363-fe48-4f00-896d-1d95cd6c62f0.pdf>phonchart2008 (1) (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:15:31.344413'),
      "id": "5245b14642e043199c626f6e83b9080d",
      "description": "IPA PHONETICS 2",
      "audiofile": "modules/2065f52c-f9b8-4cf0-b80c-1d84f60f3509.mp3>armfather-am.mp3",
      "drillfile": "modules/f15ad363-fe48-4f00-896d-1d95cd6c62f0.pdf>phonchart2008 (1) (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:15:31.344413'),
      "id": "5245b14642e043199c626f6e83b9080d",
      "description": "IPA PHONETICS 2",
      "audiofile": "modules/2065f52c-f9b8-4cf0-b80c-1d84f60f3509.mp3>armfather-am.mp3",
      "drillfile": "modules/f15ad363-fe48-4f00-896d-1d95cd6c62f0.pdf>phonchart2008 (1) (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:15:31.344413'),
      "id": "5245b14642e043199c626f6e83b9080d",
      "description": "IPA PHONETICS 2",
      "audiofile": "modules/2065f52c-f9b8-4cf0-b80c-1d84f60f3509.mp3>armfather-am.mp3",
      "drillfile": "modules/f15ad363-fe48-4f00-896d-1d95cd6c62f0.pdf>phonchart2008 (1) (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:15:31.344413'),
      "id": "5245b14642e043199c626f6e83b9080d",
      "description": "IPA PHONETICS 2",
      "audiofile": "modules/2065f52c-f9b8-4cf0-b80c-1d84f60f3509.mp3>armfather-am.mp3",
      "drillfile": "modules/f15ad363-fe48-4f00-896d-1d95cd6c62f0.pdf>phonchart2008 (1) (1).pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:16:22.44631'),
      "id": "8700f88f71e04d6d8fa253e81f125529",
      "description": "SMALL TALK",
      "audiofile": "modules/3da73b9c-8911-4c7b-ad12-2a3e1768af26.mp3>small talk.mp3",
      "drillfile": "modules/f211b7f0-5145-41ba-8044-0c675e24279e.pdf>15 SMALL TALK.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:16:22.44631'),
      "id": "8700f88f71e04d6d8fa253e81f125529",
      "description": "SMALL TALK",
      "audiofile": "modules/3da73b9c-8911-4c7b-ad12-2a3e1768af26.mp3>small talk.mp3",
      "drillfile": "modules/f211b7f0-5145-41ba-8044-0c675e24279e.pdf>15 SMALL TALK.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:16:22.44631'),
      "id": "8700f88f71e04d6d8fa253e81f125529",
      "description": "SMALL TALK",
      "audiofile": "modules/3da73b9c-8911-4c7b-ad12-2a3e1768af26.mp3>small talk.mp3",
      "drillfile": "modules/f211b7f0-5145-41ba-8044-0c675e24279e.pdf>15 SMALL TALK.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:16:22.44631'),
      "id": "8700f88f71e04d6d8fa253e81f125529",
      "description": "SMALL TALK",
      "audiofile": "modules/3da73b9c-8911-4c7b-ad12-2a3e1768af26.mp3>small talk.mp3",
      "drillfile": "modules/f211b7f0-5145-41ba-8044-0c675e24279e.pdf>15 SMALL TALK.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:16:22.44631'),
      "id": "8700f88f71e04d6d8fa253e81f125529",
      "description": "SMALL TALK",
      "audiofile": "modules/3da73b9c-8911-4c7b-ad12-2a3e1768af26.mp3>small talk.mp3",
      "drillfile": "modules/f211b7f0-5145-41ba-8044-0c675e24279e.pdf>15 SMALL TALK.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:16:22.44631'),
      "id": "8700f88f71e04d6d8fa253e81f125529",
      "description": "SMALL TALK",
      "audiofile": "modules/3da73b9c-8911-4c7b-ad12-2a3e1768af26.mp3>small talk.mp3",
      "drillfile": "modules/f211b7f0-5145-41ba-8044-0c675e24279e.pdf>15 SMALL TALK.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:16:48.549238'),
      "id": "1648d9f87c4f40cca9b63a8cbb0863bf",
      "description": "IPA PHONETICS 3",
      "audiofile": "modules/927a41ba-7acc-468b-a49e-d20584c8c212.mp3>catblack.mp3",
      "drillfile": "modules/00b27c98-16c3-40b3-a239-0c506f231481.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:16:48.549238'),
      "id": "1648d9f87c4f40cca9b63a8cbb0863bf",
      "description": "IPA PHONETICS 3",
      "audiofile": "modules/927a41ba-7acc-468b-a49e-d20584c8c212.mp3>catblack.mp3",
      "drillfile": "modules/00b27c98-16c3-40b3-a239-0c506f231481.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:16:48.549238'),
      "id": "1648d9f87c4f40cca9b63a8cbb0863bf",
      "description": "IPA PHONETICS 3",
      "audiofile": "modules/927a41ba-7acc-468b-a49e-d20584c8c212.mp3>catblack.mp3",
      "drillfile": "modules/00b27c98-16c3-40b3-a239-0c506f231481.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:16:48.549238'),
      "id": "1648d9f87c4f40cca9b63a8cbb0863bf",
      "description": "IPA PHONETICS 3",
      "audiofile": "modules/927a41ba-7acc-468b-a49e-d20584c8c212.mp3>catblack.mp3",
      "drillfile": "modules/00b27c98-16c3-40b3-a239-0c506f231481.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:16:48.549238'),
      "id": "1648d9f87c4f40cca9b63a8cbb0863bf",
      "description": "IPA PHONETICS 3",
      "audiofile": "modules/927a41ba-7acc-468b-a49e-d20584c8c212.mp3>catblack.mp3",
      "drillfile": "modules/00b27c98-16c3-40b3-a239-0c506f231481.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:16:48.549238'),
      "id": "1648d9f87c4f40cca9b63a8cbb0863bf",
      "description": "IPA PHONETICS 3",
      "audiofile": "modules/927a41ba-7acc-468b-a49e-d20584c8c212.mp3>catblack.mp3",
      "drillfile": "modules/00b27c98-16c3-40b3-a239-0c506f231481.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:16:54.64427'),
      "id": "cf57a9799b0f4ca9bdfefcd4a905858a",
      "description": "KEEP SMALL CONVERSATIONS",
      "audiofile": "modules/b29968a0-9947-4ca0-b6ec-db376feabec4.mp3>keep.mp3",
      "drillfile": "modules/9d96264e-0107-4094-92de-a3da3dcc3ba9.pdf>16 KEEP SMALL CONVO GOING.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:16:54.64427'),
      "id": "cf57a9799b0f4ca9bdfefcd4a905858a",
      "description": "KEEP SMALL CONVERSATIONS",
      "audiofile": "modules/b29968a0-9947-4ca0-b6ec-db376feabec4.mp3>keep.mp3",
      "drillfile": "modules/9d96264e-0107-4094-92de-a3da3dcc3ba9.pdf>16 KEEP SMALL CONVO GOING.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:16:54.64427'),
      "id": "cf57a9799b0f4ca9bdfefcd4a905858a",
      "description": "KEEP SMALL CONVERSATIONS",
      "audiofile": "modules/b29968a0-9947-4ca0-b6ec-db376feabec4.mp3>keep.mp3",
      "drillfile": "modules/9d96264e-0107-4094-92de-a3da3dcc3ba9.pdf>16 KEEP SMALL CONVO GOING.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:16:54.64427'),
      "id": "cf57a9799b0f4ca9bdfefcd4a905858a",
      "description": "KEEP SMALL CONVERSATIONS",
      "audiofile": "modules/b29968a0-9947-4ca0-b6ec-db376feabec4.mp3>keep.mp3",
      "drillfile": "modules/9d96264e-0107-4094-92de-a3da3dcc3ba9.pdf>16 KEEP SMALL CONVO GOING.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:16:54.64427'),
      "id": "cf57a9799b0f4ca9bdfefcd4a905858a",
      "description": "KEEP SMALL CONVERSATIONS",
      "audiofile": "modules/b29968a0-9947-4ca0-b6ec-db376feabec4.mp3>keep.mp3",
      "drillfile": "modules/9d96264e-0107-4094-92de-a3da3dcc3ba9.pdf>16 KEEP SMALL CONVO GOING.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:16:54.64427'),
      "id": "cf57a9799b0f4ca9bdfefcd4a905858a",
      "description": "KEEP SMALL CONVERSATIONS",
      "audiofile": "modules/b29968a0-9947-4ca0-b6ec-db376feabec4.mp3>keep.mp3",
      "drillfile": "modules/9d96264e-0107-4094-92de-a3da3dcc3ba9.pdf>16 KEEP SMALL CONVO GOING.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:17:22.20736'),
      "id": "3d0b973778464c9f8c81b679e8d694a5",
      "description": "SMALL TALK  ERRORS",
      "audiofile": "modules/848cacb3-8ed9-4348-954c-a86f84d8daea.mp3>errors.mp3",
      "drillfile": "modules/6ec1fd6c-9edb-4bfe-ae32-81ccd98852ac.pdf>17 SMALL TALK ERRORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:17:22.20736'),
      "id": "3d0b973778464c9f8c81b679e8d694a5",
      "description": "SMALL TALK  ERRORS",
      "audiofile": "modules/848cacb3-8ed9-4348-954c-a86f84d8daea.mp3>errors.mp3",
      "drillfile": "modules/6ec1fd6c-9edb-4bfe-ae32-81ccd98852ac.pdf>17 SMALL TALK ERRORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:17:22.20736'),
      "id": "3d0b973778464c9f8c81b679e8d694a5",
      "description": "SMALL TALK  ERRORS",
      "audiofile": "modules/848cacb3-8ed9-4348-954c-a86f84d8daea.mp3>errors.mp3",
      "drillfile": "modules/6ec1fd6c-9edb-4bfe-ae32-81ccd98852ac.pdf>17 SMALL TALK ERRORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:17:22.20736'),
      "id": "3d0b973778464c9f8c81b679e8d694a5",
      "description": "SMALL TALK  ERRORS",
      "audiofile": "modules/848cacb3-8ed9-4348-954c-a86f84d8daea.mp3>errors.mp3",
      "drillfile": "modules/6ec1fd6c-9edb-4bfe-ae32-81ccd98852ac.pdf>17 SMALL TALK ERRORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:17:22.20736'),
      "id": "3d0b973778464c9f8c81b679e8d694a5",
      "description": "SMALL TALK  ERRORS",
      "audiofile": "modules/848cacb3-8ed9-4348-954c-a86f84d8daea.mp3>errors.mp3",
      "drillfile": "modules/6ec1fd6c-9edb-4bfe-ae32-81ccd98852ac.pdf>17 SMALL TALK ERRORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:17:22.20736'),
      "id": "3d0b973778464c9f8c81b679e8d694a5",
      "description": "SMALL TALK  ERRORS",
      "audiofile": "modules/848cacb3-8ed9-4348-954c-a86f84d8daea.mp3>errors.mp3",
      "drillfile": "modules/6ec1fd6c-9edb-4bfe-ae32-81ccd98852ac.pdf>17 SMALL TALK ERRORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:17:54.589319'),
      "id": "d09c7a8157b34969882cc3013ac45f95",
      "description": "BUSINESS TALK",
      "audiofile": "modules/e72006d4-9b84-4180-9f29-d4028d126d7f.mp3>BUSINESS.mp3",
      "drillfile": "modules/eb3c580c-007c-4a19-b5eb-75e993cafbcd.pdf>18 BUSINESS TALK.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:17:54.589319'),
      "id": "d09c7a8157b34969882cc3013ac45f95",
      "description": "BUSINESS TALK",
      "audiofile": "modules/e72006d4-9b84-4180-9f29-d4028d126d7f.mp3>BUSINESS.mp3",
      "drillfile": "modules/eb3c580c-007c-4a19-b5eb-75e993cafbcd.pdf>18 BUSINESS TALK.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:17:54.589319'),
      "id": "d09c7a8157b34969882cc3013ac45f95",
      "description": "BUSINESS TALK",
      "audiofile": "modules/e72006d4-9b84-4180-9f29-d4028d126d7f.mp3>BUSINESS.mp3",
      "drillfile": "modules/eb3c580c-007c-4a19-b5eb-75e993cafbcd.pdf>18 BUSINESS TALK.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:17:54.589319'),
      "id": "d09c7a8157b34969882cc3013ac45f95",
      "description": "BUSINESS TALK",
      "audiofile": "modules/e72006d4-9b84-4180-9f29-d4028d126d7f.mp3>BUSINESS.mp3",
      "drillfile": "modules/eb3c580c-007c-4a19-b5eb-75e993cafbcd.pdf>18 BUSINESS TALK.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:17:54.589319'),
      "id": "d09c7a8157b34969882cc3013ac45f95",
      "description": "BUSINESS TALK",
      "audiofile": "modules/e72006d4-9b84-4180-9f29-d4028d126d7f.mp3>BUSINESS.mp3",
      "drillfile": "modules/eb3c580c-007c-4a19-b5eb-75e993cafbcd.pdf>18 BUSINESS TALK.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:17:54.589319'),
      "id": "d09c7a8157b34969882cc3013ac45f95",
      "description": "BUSINESS TALK",
      "audiofile": "modules/e72006d4-9b84-4180-9f29-d4028d126d7f.mp3>BUSINESS.mp3",
      "drillfile": "modules/eb3c580c-007c-4a19-b5eb-75e993cafbcd.pdf>18 BUSINESS TALK.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:18:19.332258'),
      "id": "44588ae6078d4494922c942c75031838",
      "description": "MAKING PLANS",
      "audiofile": "modules/7576c0bc-8585-456c-adf4-6e1ce09b4dfa.mp3>PLANS.mp3",
      "drillfile": "modules/99b1f18f-989a-4333-ab79-825a0fcb03a2.pdf>19 MAKING PLANS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:18:19.332258'),
      "id": "44588ae6078d4494922c942c75031838",
      "description": "MAKING PLANS",
      "audiofile": "modules/7576c0bc-8585-456c-adf4-6e1ce09b4dfa.mp3>PLANS.mp3",
      "drillfile": "modules/99b1f18f-989a-4333-ab79-825a0fcb03a2.pdf>19 MAKING PLANS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:18:19.332258'),
      "id": "44588ae6078d4494922c942c75031838",
      "description": "MAKING PLANS",
      "audiofile": "modules/7576c0bc-8585-456c-adf4-6e1ce09b4dfa.mp3>PLANS.mp3",
      "drillfile": "modules/99b1f18f-989a-4333-ab79-825a0fcb03a2.pdf>19 MAKING PLANS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:18:19.332258'),
      "id": "44588ae6078d4494922c942c75031838",
      "description": "MAKING PLANS",
      "audiofile": "modules/7576c0bc-8585-456c-adf4-6e1ce09b4dfa.mp3>PLANS.mp3",
      "drillfile": "modules/99b1f18f-989a-4333-ab79-825a0fcb03a2.pdf>19 MAKING PLANS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:18:19.332258'),
      "id": "44588ae6078d4494922c942c75031838",
      "description": "MAKING PLANS",
      "audiofile": "modules/7576c0bc-8585-456c-adf4-6e1ce09b4dfa.mp3>PLANS.mp3",
      "drillfile": "modules/99b1f18f-989a-4333-ab79-825a0fcb03a2.pdf>19 MAKING PLANS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:18:19.332258'),
      "id": "44588ae6078d4494922c942c75031838",
      "description": "MAKING PLANS",
      "audiofile": "modules/7576c0bc-8585-456c-adf4-6e1ce09b4dfa.mp3>PLANS.mp3",
      "drillfile": "modules/99b1f18f-989a-4333-ab79-825a0fcb03a2.pdf>19 MAKING PLANS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:18:55.350108'),
      "id": "7bcf1fc372114204850a2583abde01f6",
      "description": "TALKING ABOUT BUSINESS",
      "audiofile": "modules/c44c0a55-bbb1-4575-9bd1-89801b64daa1.mp3>talking.mp3",
      "drillfile": "modules/def18dbc-4c34-49f2-b974-d6d7e812d45f.pdf>21 TALKING ABOUT BUSINESS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:18:55.350108'),
      "id": "7bcf1fc372114204850a2583abde01f6",
      "description": "TALKING ABOUT BUSINESS",
      "audiofile": "modules/c44c0a55-bbb1-4575-9bd1-89801b64daa1.mp3>talking.mp3",
      "drillfile": "modules/def18dbc-4c34-49f2-b974-d6d7e812d45f.pdf>21 TALKING ABOUT BUSINESS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:18:55.350108'),
      "id": "7bcf1fc372114204850a2583abde01f6",
      "description": "TALKING ABOUT BUSINESS",
      "audiofile": "modules/c44c0a55-bbb1-4575-9bd1-89801b64daa1.mp3>talking.mp3",
      "drillfile": "modules/def18dbc-4c34-49f2-b974-d6d7e812d45f.pdf>21 TALKING ABOUT BUSINESS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:18:55.350108'),
      "id": "7bcf1fc372114204850a2583abde01f6",
      "description": "TALKING ABOUT BUSINESS",
      "audiofile": "modules/c44c0a55-bbb1-4575-9bd1-89801b64daa1.mp3>talking.mp3",
      "drillfile": "modules/def18dbc-4c34-49f2-b974-d6d7e812d45f.pdf>21 TALKING ABOUT BUSINESS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:18:55.350108'),
      "id": "7bcf1fc372114204850a2583abde01f6",
      "description": "TALKING ABOUT BUSINESS",
      "audiofile": "modules/c44c0a55-bbb1-4575-9bd1-89801b64daa1.mp3>talking.mp3",
      "drillfile": "modules/def18dbc-4c34-49f2-b974-d6d7e812d45f.pdf>21 TALKING ABOUT BUSINESS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:18:55.350108'),
      "id": "7bcf1fc372114204850a2583abde01f6",
      "description": "TALKING ABOUT BUSINESS",
      "audiofile": "modules/c44c0a55-bbb1-4575-9bd1-89801b64daa1.mp3>talking.mp3",
      "drillfile": "modules/def18dbc-4c34-49f2-b974-d6d7e812d45f.pdf>21 TALKING ABOUT BUSINESS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:19:22.936132'),
      "id": "68292c3b1bcd461e82326879c3b4c3eb",
      "description": "GIVING TOURS",
      "audiofile": "modules/e49f98e5-b0df-423d-b9ef-03378ecb0a70.mp3>TOURS.mp3",
      "drillfile": "modules/b717b805-e3e4-4b24-a443-4cd4944522b2.pdf>25 GIVING TOURS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:19:22.936132'),
      "id": "68292c3b1bcd461e82326879c3b4c3eb",
      "description": "GIVING TOURS",
      "audiofile": "modules/e49f98e5-b0df-423d-b9ef-03378ecb0a70.mp3>TOURS.mp3",
      "drillfile": "modules/b717b805-e3e4-4b24-a443-4cd4944522b2.pdf>25 GIVING TOURS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:19:22.936132'),
      "id": "68292c3b1bcd461e82326879c3b4c3eb",
      "description": "GIVING TOURS",
      "audiofile": "modules/e49f98e5-b0df-423d-b9ef-03378ecb0a70.mp3>TOURS.mp3",
      "drillfile": "modules/b717b805-e3e4-4b24-a443-4cd4944522b2.pdf>25 GIVING TOURS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:19:22.936132'),
      "id": "68292c3b1bcd461e82326879c3b4c3eb",
      "description": "GIVING TOURS",
      "audiofile": "modules/e49f98e5-b0df-423d-b9ef-03378ecb0a70.mp3>TOURS.mp3",
      "drillfile": "modules/b717b805-e3e4-4b24-a443-4cd4944522b2.pdf>25 GIVING TOURS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:19:22.936132'),
      "id": "68292c3b1bcd461e82326879c3b4c3eb",
      "description": "GIVING TOURS",
      "audiofile": "modules/e49f98e5-b0df-423d-b9ef-03378ecb0a70.mp3>TOURS.mp3",
      "drillfile": "modules/b717b805-e3e4-4b24-a443-4cd4944522b2.pdf>25 GIVING TOURS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:19:22.936132'),
      "id": "68292c3b1bcd461e82326879c3b4c3eb",
      "description": "GIVING TOURS",
      "audiofile": "modules/e49f98e5-b0df-423d-b9ef-03378ecb0a70.mp3>TOURS.mp3",
      "drillfile": "modules/b717b805-e3e4-4b24-a443-4cd4944522b2.pdf>25 GIVING TOURS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:19:51.959483'),
      "id": "a0b5679d16cc41a99af04a42f7622413",
      "description": "ANSWERING PHONE CALL",
      "audiofile": "modules/d223493d-e079-4011-ab8d-eb7270259850.mp3>PHONE CALL.mp3",
      "drillfile": "modules/ad3428b6-de62-4940-98c8-f9cccfd47c75.pdf>ANSWERING PHONE CALL.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:19:51.959483'),
      "id": "a0b5679d16cc41a99af04a42f7622413",
      "description": "ANSWERING PHONE CALL",
      "audiofile": "modules/d223493d-e079-4011-ab8d-eb7270259850.mp3>PHONE CALL.mp3",
      "drillfile": "modules/ad3428b6-de62-4940-98c8-f9cccfd47c75.pdf>ANSWERING PHONE CALL.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:19:51.959483'),
      "id": "a0b5679d16cc41a99af04a42f7622413",
      "description": "ANSWERING PHONE CALL",
      "audiofile": "modules/d223493d-e079-4011-ab8d-eb7270259850.mp3>PHONE CALL.mp3",
      "drillfile": "modules/ad3428b6-de62-4940-98c8-f9cccfd47c75.pdf>ANSWERING PHONE CALL.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:19:51.959483'),
      "id": "a0b5679d16cc41a99af04a42f7622413",
      "description": "ANSWERING PHONE CALL",
      "audiofile": "modules/d223493d-e079-4011-ab8d-eb7270259850.mp3>PHONE CALL.mp3",
      "drillfile": "modules/ad3428b6-de62-4940-98c8-f9cccfd47c75.pdf>ANSWERING PHONE CALL.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:19:51.959483'),
      "id": "a0b5679d16cc41a99af04a42f7622413",
      "description": "ANSWERING PHONE CALL",
      "audiofile": "modules/d223493d-e079-4011-ab8d-eb7270259850.mp3>PHONE CALL.mp3",
      "drillfile": "modules/ad3428b6-de62-4940-98c8-f9cccfd47c75.pdf>ANSWERING PHONE CALL.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:19:51.959483'),
      "id": "a0b5679d16cc41a99af04a42f7622413",
      "description": "ANSWERING PHONE CALL",
      "audiofile": "modules/d223493d-e079-4011-ab8d-eb7270259850.mp3>PHONE CALL.mp3",
      "drillfile": "modules/ad3428b6-de62-4940-98c8-f9cccfd47c75.pdf>ANSWERING PHONE CALL.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:20:20.873945'),
      "id": "d0113184098d4148ab3af725f3dc2295",
      "description": "GIVING DIRECTION",
      "audiofile": "modules/e4c5a977-fb70-46bb-b06e-d09d1547ef67.mp3>direction.mp3",
      "drillfile": "modules/124b2de0-37ea-4186-bbee-2873eeb171c0.pdf>9 GIVING DIRECTION.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:20:20.873945'),
      "id": "d0113184098d4148ab3af725f3dc2295",
      "description": "GIVING DIRECTION",
      "audiofile": "modules/e4c5a977-fb70-46bb-b06e-d09d1547ef67.mp3>direction.mp3",
      "drillfile": "modules/124b2de0-37ea-4186-bbee-2873eeb171c0.pdf>9 GIVING DIRECTION.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:20:20.873945'),
      "id": "d0113184098d4148ab3af725f3dc2295",
      "description": "GIVING DIRECTION",
      "audiofile": "modules/e4c5a977-fb70-46bb-b06e-d09d1547ef67.mp3>direction.mp3",
      "drillfile": "modules/124b2de0-37ea-4186-bbee-2873eeb171c0.pdf>9 GIVING DIRECTION.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:20:20.873945'),
      "id": "d0113184098d4148ab3af725f3dc2295",
      "description": "GIVING DIRECTION",
      "audiofile": "modules/e4c5a977-fb70-46bb-b06e-d09d1547ef67.mp3>direction.mp3",
      "drillfile": "modules/124b2de0-37ea-4186-bbee-2873eeb171c0.pdf>9 GIVING DIRECTION.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:20:20.873945'),
      "id": "d0113184098d4148ab3af725f3dc2295",
      "description": "GIVING DIRECTION",
      "audiofile": "modules/e4c5a977-fb70-46bb-b06e-d09d1547ef67.mp3>direction.mp3",
      "drillfile": "modules/124b2de0-37ea-4186-bbee-2873eeb171c0.pdf>9 GIVING DIRECTION.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:20:20.873945'),
      "id": "d0113184098d4148ab3af725f3dc2295",
      "description": "GIVING DIRECTION",
      "audiofile": "modules/e4c5a977-fb70-46bb-b06e-d09d1547ef67.mp3>direction.mp3",
      "drillfile": "modules/124b2de0-37ea-4186-bbee-2873eeb171c0.pdf>9 GIVING DIRECTION.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:21:31.092527'),
      "id": "e024356a13c7457ab4eba9d544a71446",
      "description": "28 SOME COMMON ERRORS",
      "audiofile": "modules/19eb6024-1ddc-4c2d-88f2-358615ea9282.mp3>COMMON.mp3",
      "drillfile": "modules/d3d8b437-dfa8-4f96-ae4a-1231f837fd99.pdf>28 SOME COMMON ERRORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:21:31.092527'),
      "id": "e024356a13c7457ab4eba9d544a71446",
      "description": "28 SOME COMMON ERRORS",
      "audiofile": "modules/19eb6024-1ddc-4c2d-88f2-358615ea9282.mp3>COMMON.mp3",
      "drillfile": "modules/d3d8b437-dfa8-4f96-ae4a-1231f837fd99.pdf>28 SOME COMMON ERRORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:21:31.092527'),
      "id": "e024356a13c7457ab4eba9d544a71446",
      "description": "28 SOME COMMON ERRORS",
      "audiofile": "modules/19eb6024-1ddc-4c2d-88f2-358615ea9282.mp3>COMMON.mp3",
      "drillfile": "modules/d3d8b437-dfa8-4f96-ae4a-1231f837fd99.pdf>28 SOME COMMON ERRORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:21:31.092527'),
      "id": "e024356a13c7457ab4eba9d544a71446",
      "description": "28 SOME COMMON ERRORS",
      "audiofile": "modules/19eb6024-1ddc-4c2d-88f2-358615ea9282.mp3>COMMON.mp3",
      "drillfile": "modules/d3d8b437-dfa8-4f96-ae4a-1231f837fd99.pdf>28 SOME COMMON ERRORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:21:31.092527'),
      "id": "e024356a13c7457ab4eba9d544a71446",
      "description": "28 SOME COMMON ERRORS",
      "audiofile": "modules/19eb6024-1ddc-4c2d-88f2-358615ea9282.mp3>COMMON.mp3",
      "drillfile": "modules/d3d8b437-dfa8-4f96-ae4a-1231f837fd99.pdf>28 SOME COMMON ERRORS.pdf"
    },
    {
      "practiceid": "0aba8af91b31479e9ba67a7ab53997ea",
      "timestamp": new Date('2024-03-14 09:21:31.092527'),
      "id": "e024356a13c7457ab4eba9d544a71446",
      "description": "28 SOME COMMON ERRORS",
      "audiofile": "modules/19eb6024-1ddc-4c2d-88f2-358615ea9282.mp3>COMMON.mp3",
      "drillfile": "modules/d3d8b437-dfa8-4f96-ae4a-1231f837fd99.pdf>28 SOME COMMON ERRORS.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:22:09.328434'),
      "id": "f07310b327524e04aac0f54172681620",
      "description": "CONVERSATION DRILL",
      "audiofile": "modules/17e93ed5-96b6-4e88-a646-ad19e529e316.mp3>bconverse.mp3",
      "drillfile": "modules/e950ce2a-488e-4171-a007-8aba574cd129.pdf>CONVERSATION TRANSCRIPT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:22:09.328434'),
      "id": "f07310b327524e04aac0f54172681620",
      "description": "CONVERSATION DRILL",
      "audiofile": "modules/17e93ed5-96b6-4e88-a646-ad19e529e316.mp3>bconverse.mp3",
      "drillfile": "modules/e950ce2a-488e-4171-a007-8aba574cd129.pdf>CONVERSATION TRANSCRIPT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:22:09.328434'),
      "id": "f07310b327524e04aac0f54172681620",
      "description": "CONVERSATION DRILL",
      "audiofile": "modules/17e93ed5-96b6-4e88-a646-ad19e529e316.mp3>bconverse.mp3",
      "drillfile": "modules/e950ce2a-488e-4171-a007-8aba574cd129.pdf>CONVERSATION TRANSCRIPT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:22:09.328434'),
      "id": "f07310b327524e04aac0f54172681620",
      "description": "CONVERSATION DRILL",
      "audiofile": "modules/17e93ed5-96b6-4e88-a646-ad19e529e316.mp3>bconverse.mp3",
      "drillfile": "modules/e950ce2a-488e-4171-a007-8aba574cd129.pdf>CONVERSATION TRANSCRIPT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:22:09.328434'),
      "id": "f07310b327524e04aac0f54172681620",
      "description": "CONVERSATION DRILL",
      "audiofile": "modules/17e93ed5-96b6-4e88-a646-ad19e529e316.mp3>bconverse.mp3",
      "drillfile": "modules/e950ce2a-488e-4171-a007-8aba574cd129.pdf>CONVERSATION TRANSCRIPT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:22:09.328434'),
      "id": "f07310b327524e04aac0f54172681620",
      "description": "CONVERSATION DRILL",
      "audiofile": "modules/17e93ed5-96b6-4e88-a646-ad19e529e316.mp3>bconverse.mp3",
      "drillfile": "modules/e950ce2a-488e-4171-a007-8aba574cd129.pdf>CONVERSATION TRANSCRIPT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:23:05.112259'),
      "id": "e1e3c8fa74494ae98b2325d3dfabef85",
      "description": "CONVERSATION DRILLS - AIRPORT",
      "audiofile": "modules/6a4ed815-ebf7-47ee-be4c-3db4d4a36ef6.mp3>Lesson-16-Airport-Part-1.mp3",
      "drillfile": "modules/f5043563-42d1-42d8-8808-e6db9d13ec08.pdf>QUIZ _ AIRPORT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:23:05.112259'),
      "id": "e1e3c8fa74494ae98b2325d3dfabef85",
      "description": "CONVERSATION DRILLS - AIRPORT",
      "audiofile": "modules/6a4ed815-ebf7-47ee-be4c-3db4d4a36ef6.mp3>Lesson-16-Airport-Part-1.mp3",
      "drillfile": "modules/f5043563-42d1-42d8-8808-e6db9d13ec08.pdf>QUIZ _ AIRPORT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:23:05.112259'),
      "id": "e1e3c8fa74494ae98b2325d3dfabef85",
      "description": "CONVERSATION DRILLS - AIRPORT",
      "audiofile": "modules/6a4ed815-ebf7-47ee-be4c-3db4d4a36ef6.mp3>Lesson-16-Airport-Part-1.mp3",
      "drillfile": "modules/f5043563-42d1-42d8-8808-e6db9d13ec08.pdf>QUIZ _ AIRPORT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:23:05.112259'),
      "id": "e1e3c8fa74494ae98b2325d3dfabef85",
      "description": "CONVERSATION DRILLS - AIRPORT",
      "audiofile": "modules/6a4ed815-ebf7-47ee-be4c-3db4d4a36ef6.mp3>Lesson-16-Airport-Part-1.mp3",
      "drillfile": "modules/f5043563-42d1-42d8-8808-e6db9d13ec08.pdf>QUIZ _ AIRPORT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:23:05.112259'),
      "id": "e1e3c8fa74494ae98b2325d3dfabef85",
      "description": "CONVERSATION DRILLS - AIRPORT",
      "audiofile": "modules/6a4ed815-ebf7-47ee-be4c-3db4d4a36ef6.mp3>Lesson-16-Airport-Part-1.mp3",
      "drillfile": "modules/f5043563-42d1-42d8-8808-e6db9d13ec08.pdf>QUIZ _ AIRPORT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:23:05.112259'),
      "id": "e1e3c8fa74494ae98b2325d3dfabef85",
      "description": "CONVERSATION DRILLS - AIRPORT",
      "audiofile": "modules/6a4ed815-ebf7-47ee-be4c-3db4d4a36ef6.mp3>Lesson-16-Airport-Part-1.mp3",
      "drillfile": "modules/f5043563-42d1-42d8-8808-e6db9d13ec08.pdf>QUIZ _ AIRPORT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:23:32.093206'),
      "id": "b77cac9092c54a2ba5d1cacdfe3ab788",
      "description": "CONVERSATION DRILLS - BUSY ON FRIDAY",
      "audiofile": "modules/0424bd45-7dfe-4f02-9f39-5835707e055a.mp3>0-12-im-busy-on-friday.mp3",
      "drillfile": "modules/cc81e936-2ed3-4aca-b6b9-63a257ca79a0.pdf>BUSY ON FRIDAY.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:23:32.093206'),
      "id": "b77cac9092c54a2ba5d1cacdfe3ab788",
      "description": "CONVERSATION DRILLS - BUSY ON FRIDAY",
      "audiofile": "modules/0424bd45-7dfe-4f02-9f39-5835707e055a.mp3>0-12-im-busy-on-friday.mp3",
      "drillfile": "modules/cc81e936-2ed3-4aca-b6b9-63a257ca79a0.pdf>BUSY ON FRIDAY.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:23:32.093206'),
      "id": "b77cac9092c54a2ba5d1cacdfe3ab788",
      "description": "CONVERSATION DRILLS - BUSY ON FRIDAY",
      "audiofile": "modules/0424bd45-7dfe-4f02-9f39-5835707e055a.mp3>0-12-im-busy-on-friday.mp3",
      "drillfile": "modules/cc81e936-2ed3-4aca-b6b9-63a257ca79a0.pdf>BUSY ON FRIDAY.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:23:32.093206'),
      "id": "b77cac9092c54a2ba5d1cacdfe3ab788",
      "description": "CONVERSATION DRILLS - BUSY ON FRIDAY",
      "audiofile": "modules/0424bd45-7dfe-4f02-9f39-5835707e055a.mp3>0-12-im-busy-on-friday.mp3",
      "drillfile": "modules/cc81e936-2ed3-4aca-b6b9-63a257ca79a0.pdf>BUSY ON FRIDAY.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:23:32.093206'),
      "id": "b77cac9092c54a2ba5d1cacdfe3ab788",
      "description": "CONVERSATION DRILLS - BUSY ON FRIDAY",
      "audiofile": "modules/0424bd45-7dfe-4f02-9f39-5835707e055a.mp3>0-12-im-busy-on-friday.mp3",
      "drillfile": "modules/cc81e936-2ed3-4aca-b6b9-63a257ca79a0.pdf>BUSY ON FRIDAY.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:23:32.093206'),
      "id": "b77cac9092c54a2ba5d1cacdfe3ab788",
      "description": "CONVERSATION DRILLS - BUSY ON FRIDAY",
      "audiofile": "modules/0424bd45-7dfe-4f02-9f39-5835707e055a.mp3>0-12-im-busy-on-friday.mp3",
      "drillfile": "modules/cc81e936-2ed3-4aca-b6b9-63a257ca79a0.pdf>BUSY ON FRIDAY.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:24:00.201262'),
      "id": "b3849b12cf6f4fcea3a6f51468d0c9d5",
      "description": "CONVERSATION DRILLS - AFRAID OF FLYING",
      "audiofile": "modules/49b37450-584c-45df-9b24-6a3aa665bdeb.mp3>0-61-afraid-of-flying.mp3",
      "drillfile": "modules/8c78307a-663c-4780-9bb6-d9d4a0bbf4d5.pdf>Afraid of Flying.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:24:00.201262'),
      "id": "b3849b12cf6f4fcea3a6f51468d0c9d5",
      "description": "CONVERSATION DRILLS - AFRAID OF FLYING",
      "audiofile": "modules/49b37450-584c-45df-9b24-6a3aa665bdeb.mp3>0-61-afraid-of-flying.mp3",
      "drillfile": "modules/8c78307a-663c-4780-9bb6-d9d4a0bbf4d5.pdf>Afraid of Flying.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:24:00.201262'),
      "id": "b3849b12cf6f4fcea3a6f51468d0c9d5",
      "description": "CONVERSATION DRILLS - AFRAID OF FLYING",
      "audiofile": "modules/49b37450-584c-45df-9b24-6a3aa665bdeb.mp3>0-61-afraid-of-flying.mp3",
      "drillfile": "modules/8c78307a-663c-4780-9bb6-d9d4a0bbf4d5.pdf>Afraid of Flying.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:24:00.201262'),
      "id": "b3849b12cf6f4fcea3a6f51468d0c9d5",
      "description": "CONVERSATION DRILLS - AFRAID OF FLYING",
      "audiofile": "modules/49b37450-584c-45df-9b24-6a3aa665bdeb.mp3>0-61-afraid-of-flying.mp3",
      "drillfile": "modules/8c78307a-663c-4780-9bb6-d9d4a0bbf4d5.pdf>Afraid of Flying.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:24:00.201262'),
      "id": "b3849b12cf6f4fcea3a6f51468d0c9d5",
      "description": "CONVERSATION DRILLS - AFRAID OF FLYING",
      "audiofile": "modules/49b37450-584c-45df-9b24-6a3aa665bdeb.mp3>0-61-afraid-of-flying.mp3",
      "drillfile": "modules/8c78307a-663c-4780-9bb6-d9d4a0bbf4d5.pdf>Afraid of Flying.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:24:00.201262'),
      "id": "b3849b12cf6f4fcea3a6f51468d0c9d5",
      "description": "CONVERSATION DRILLS - AFRAID OF FLYING",
      "audiofile": "modules/49b37450-584c-45df-9b24-6a3aa665bdeb.mp3>0-61-afraid-of-flying.mp3",
      "drillfile": "modules/8c78307a-663c-4780-9bb6-d9d4a0bbf4d5.pdf>Afraid of Flying.pdf"
    },
    {
      "practiceid": "93d06ce0904d4ab894c9c48ffd0cab38",
      "timestamp": new Date('2024-03-14 09:24:23.41898'),
      "id": "e6295b79af1c4ca490491ba5930e9b1e",
      "description": "A Piece of Red Calico (By Frank Stockton)",
      "audiofile": "modules/c3703d89-917a-471e-97a1-00a5d82188f8.mp3>se-as-a-piece-of-red-calico-21-aug-10.mp3",
      "drillfile": "modules/2f7a6924-f924-41dc-a9b4-626995562ebf.pdf>A Piece of Red Calico (By Frank Stockton).pdf"
    },
    {
      "practiceid": "93d06ce0904d4ab894c9c48ffd0cab38",
      "timestamp": new Date('2024-03-14 09:24:23.41898'),
      "id": "e6295b79af1c4ca490491ba5930e9b1e",
      "description": "A Piece of Red Calico (By Frank Stockton)",
      "audiofile": "modules/c3703d89-917a-471e-97a1-00a5d82188f8.mp3>se-as-a-piece-of-red-calico-21-aug-10.mp3",
      "drillfile": "modules/2f7a6924-f924-41dc-a9b4-626995562ebf.pdf>A Piece of Red Calico (By Frank Stockton).pdf"
    },
    {
      "practiceid": "93d06ce0904d4ab894c9c48ffd0cab38",
      "timestamp": new Date('2024-03-14 09:24:23.41898'),
      "id": "e6295b79af1c4ca490491ba5930e9b1e",
      "description": "A Piece of Red Calico (By Frank Stockton)",
      "audiofile": "modules/c3703d89-917a-471e-97a1-00a5d82188f8.mp3>se-as-a-piece-of-red-calico-21-aug-10.mp3",
      "drillfile": "modules/2f7a6924-f924-41dc-a9b4-626995562ebf.pdf>A Piece of Red Calico (By Frank Stockton).pdf"
    },
    {
      "practiceid": "93d06ce0904d4ab894c9c48ffd0cab38",
      "timestamp": new Date('2024-03-14 09:24:23.41898'),
      "id": "e6295b79af1c4ca490491ba5930e9b1e",
      "description": "A Piece of Red Calico (By Frank Stockton)",
      "audiofile": "modules/c3703d89-917a-471e-97a1-00a5d82188f8.mp3>se-as-a-piece-of-red-calico-21-aug-10.mp3",
      "drillfile": "modules/2f7a6924-f924-41dc-a9b4-626995562ebf.pdf>A Piece of Red Calico (By Frank Stockton).pdf"
    },
    {
      "practiceid": "93d06ce0904d4ab894c9c48ffd0cab38",
      "timestamp": new Date('2024-03-14 09:24:23.41898'),
      "id": "e6295b79af1c4ca490491ba5930e9b1e",
      "description": "A Piece of Red Calico (By Frank Stockton)",
      "audiofile": "modules/c3703d89-917a-471e-97a1-00a5d82188f8.mp3>se-as-a-piece-of-red-calico-21-aug-10.mp3",
      "drillfile": "modules/2f7a6924-f924-41dc-a9b4-626995562ebf.pdf>A Piece of Red Calico (By Frank Stockton).pdf"
    },
    {
      "practiceid": "93d06ce0904d4ab894c9c48ffd0cab38",
      "timestamp": new Date('2024-03-14 09:24:23.41898'),
      "id": "e6295b79af1c4ca490491ba5930e9b1e",
      "description": "A Piece of Red Calico (By Frank Stockton)",
      "audiofile": "modules/c3703d89-917a-471e-97a1-00a5d82188f8.mp3>se-as-a-piece-of-red-calico-21-aug-10.mp3",
      "drillfile": "modules/2f7a6924-f924-41dc-a9b4-626995562ebf.pdf>A Piece of Red Calico (By Frank Stockton).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:24:34.338149'),
      "id": "4bcb161dc49b4698be6fbd979b9cc149",
      "description": "CONVERSATION DRILLS - GRANT",
      "audiofile": "modules/9acf90a5-2528-4260-8b89-68738da30e8f.mp3>0-11-whats-a-grant.mp3",
      "drillfile": "modules/df61d3d3-dacb-4a14-9596-43786ac801af.pdf>GRANT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:24:34.338149'),
      "id": "4bcb161dc49b4698be6fbd979b9cc149",
      "description": "CONVERSATION DRILLS - GRANT",
      "audiofile": "modules/9acf90a5-2528-4260-8b89-68738da30e8f.mp3>0-11-whats-a-grant.mp3",
      "drillfile": "modules/df61d3d3-dacb-4a14-9596-43786ac801af.pdf>GRANT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:24:34.338149'),
      "id": "4bcb161dc49b4698be6fbd979b9cc149",
      "description": "CONVERSATION DRILLS - GRANT",
      "audiofile": "modules/9acf90a5-2528-4260-8b89-68738da30e8f.mp3>0-11-whats-a-grant.mp3",
      "drillfile": "modules/df61d3d3-dacb-4a14-9596-43786ac801af.pdf>GRANT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:24:34.338149'),
      "id": "4bcb161dc49b4698be6fbd979b9cc149",
      "description": "CONVERSATION DRILLS - GRANT",
      "audiofile": "modules/9acf90a5-2528-4260-8b89-68738da30e8f.mp3>0-11-whats-a-grant.mp3",
      "drillfile": "modules/df61d3d3-dacb-4a14-9596-43786ac801af.pdf>GRANT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:24:34.338149'),
      "id": "4bcb161dc49b4698be6fbd979b9cc149",
      "description": "CONVERSATION DRILLS - GRANT",
      "audiofile": "modules/9acf90a5-2528-4260-8b89-68738da30e8f.mp3>0-11-whats-a-grant.mp3",
      "drillfile": "modules/df61d3d3-dacb-4a14-9596-43786ac801af.pdf>GRANT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:24:34.338149'),
      "id": "4bcb161dc49b4698be6fbd979b9cc149",
      "description": "CONVERSATION DRILLS - GRANT",
      "audiofile": "modules/9acf90a5-2528-4260-8b89-68738da30e8f.mp3>0-11-whats-a-grant.mp3",
      "drillfile": "modules/df61d3d3-dacb-4a14-9596-43786ac801af.pdf>GRANT.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:24:39.033521'),
      "id": "5274af08495a4cd4b3607469dd64660c",
      "description": "IPA PHONETICS 4",
      "audiofile": "modules/64ce222a-f93e-4e6c-b572-1be8bf285af1.mp3>metbed.mp3",
      "drillfile": "modules/7f8ef95d-5af1-4ff7-af5e-7c34faf6f77a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:24:39.033521'),
      "id": "5274af08495a4cd4b3607469dd64660c",
      "description": "IPA PHONETICS 4",
      "audiofile": "modules/64ce222a-f93e-4e6c-b572-1be8bf285af1.mp3>metbed.mp3",
      "drillfile": "modules/7f8ef95d-5af1-4ff7-af5e-7c34faf6f77a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:24:39.033521'),
      "id": "5274af08495a4cd4b3607469dd64660c",
      "description": "IPA PHONETICS 4",
      "audiofile": "modules/64ce222a-f93e-4e6c-b572-1be8bf285af1.mp3>metbed.mp3",
      "drillfile": "modules/7f8ef95d-5af1-4ff7-af5e-7c34faf6f77a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:24:39.033521'),
      "id": "5274af08495a4cd4b3607469dd64660c",
      "description": "IPA PHONETICS 4",
      "audiofile": "modules/64ce222a-f93e-4e6c-b572-1be8bf285af1.mp3>metbed.mp3",
      "drillfile": "modules/7f8ef95d-5af1-4ff7-af5e-7c34faf6f77a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:24:39.033521'),
      "id": "5274af08495a4cd4b3607469dd64660c",
      "description": "IPA PHONETICS 4",
      "audiofile": "modules/64ce222a-f93e-4e6c-b572-1be8bf285af1.mp3>metbed.mp3",
      "drillfile": "modules/7f8ef95d-5af1-4ff7-af5e-7c34faf6f77a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:24:39.033521'),
      "id": "5274af08495a4cd4b3607469dd64660c",
      "description": "IPA PHONETICS 4",
      "audiofile": "modules/64ce222a-f93e-4e6c-b572-1be8bf285af1.mp3>metbed.mp3",
      "drillfile": "modules/7f8ef95d-5af1-4ff7-af5e-7c34faf6f77a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:24:42.478988'),
      "id": "775b36945fdb4e0388e04470064fb431",
      "description": "IDIOMS_ ACTING HIS AGE",
      "audiofile": "modules/fba497b5-943e-4e5a-9ccb-1bd3ab017405.mp3>id_1_2_acthisage_us.mp3",
      "drillfile": "modules/ee7d6c1b-6258-40aa-b25f-6ecd593b11ad.pdf>ACT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:24:42.478988'),
      "id": "775b36945fdb4e0388e04470064fb431",
      "description": "IDIOMS_ ACTING HIS AGE",
      "audiofile": "modules/fba497b5-943e-4e5a-9ccb-1bd3ab017405.mp3>id_1_2_acthisage_us.mp3",
      "drillfile": "modules/ee7d6c1b-6258-40aa-b25f-6ecd593b11ad.pdf>ACT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:24:42.478988'),
      "id": "775b36945fdb4e0388e04470064fb431",
      "description": "IDIOMS_ ACTING HIS AGE",
      "audiofile": "modules/fba497b5-943e-4e5a-9ccb-1bd3ab017405.mp3>id_1_2_acthisage_us.mp3",
      "drillfile": "modules/ee7d6c1b-6258-40aa-b25f-6ecd593b11ad.pdf>ACT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:24:42.478988'),
      "id": "775b36945fdb4e0388e04470064fb431",
      "description": "IDIOMS_ ACTING HIS AGE",
      "audiofile": "modules/fba497b5-943e-4e5a-9ccb-1bd3ab017405.mp3>id_1_2_acthisage_us.mp3",
      "drillfile": "modules/ee7d6c1b-6258-40aa-b25f-6ecd593b11ad.pdf>ACT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:24:42.478988'),
      "id": "775b36945fdb4e0388e04470064fb431",
      "description": "IDIOMS_ ACTING HIS AGE",
      "audiofile": "modules/fba497b5-943e-4e5a-9ccb-1bd3ab017405.mp3>id_1_2_acthisage_us.mp3",
      "drillfile": "modules/ee7d6c1b-6258-40aa-b25f-6ecd593b11ad.pdf>ACT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:24:42.478988'),
      "id": "775b36945fdb4e0388e04470064fb431",
      "description": "IDIOMS_ ACTING HIS AGE",
      "audiofile": "modules/fba497b5-943e-4e5a-9ccb-1bd3ab017405.mp3>id_1_2_acthisage_us.mp3",
      "drillfile": "modules/ee7d6c1b-6258-40aa-b25f-6ecd593b11ad.pdf>ACT.pdf"
    },
    {
      "practiceid": "93d06ce0904d4ab894c9c48ffd0cab38",
      "timestamp": new Date('2024-03-14 09:25:04.207937'),
      "id": "dc32e6a903de4a48bdaba5a8560c3f92",
      "description": "THE LADY OR  THE TIGER",
      "audiofile": "modules/ec961dc4-aef2-49ad-85d5-2524f4819013.mp3>The_Lady_or_the_Tiger_-__By_Frank_R_Stockton.mp3",
      "drillfile": "modules/23c81c5a-4e9b-4ac7-9a96-d5199ee83077.pdf>The Lady, or the Tiger.pdf"
    },
    {
      "practiceid": "93d06ce0904d4ab894c9c48ffd0cab38",
      "timestamp": new Date('2024-03-14 09:25:04.207937'),
      "id": "dc32e6a903de4a48bdaba5a8560c3f92",
      "description": "THE LADY OR  THE TIGER",
      "audiofile": "modules/ec961dc4-aef2-49ad-85d5-2524f4819013.mp3>The_Lady_or_the_Tiger_-__By_Frank_R_Stockton.mp3",
      "drillfile": "modules/23c81c5a-4e9b-4ac7-9a96-d5199ee83077.pdf>The Lady, or the Tiger.pdf"
    },
    {
      "practiceid": "93d06ce0904d4ab894c9c48ffd0cab38",
      "timestamp": new Date('2024-03-14 09:25:04.207937'),
      "id": "dc32e6a903de4a48bdaba5a8560c3f92",
      "description": "THE LADY OR  THE TIGER",
      "audiofile": "modules/ec961dc4-aef2-49ad-85d5-2524f4819013.mp3>The_Lady_or_the_Tiger_-__By_Frank_R_Stockton.mp3",
      "drillfile": "modules/23c81c5a-4e9b-4ac7-9a96-d5199ee83077.pdf>The Lady, or the Tiger.pdf"
    },
    {
      "practiceid": "93d06ce0904d4ab894c9c48ffd0cab38",
      "timestamp": new Date('2024-03-14 09:25:04.207937'),
      "id": "dc32e6a903de4a48bdaba5a8560c3f92",
      "description": "THE LADY OR  THE TIGER",
      "audiofile": "modules/ec961dc4-aef2-49ad-85d5-2524f4819013.mp3>The_Lady_or_the_Tiger_-__By_Frank_R_Stockton.mp3",
      "drillfile": "modules/23c81c5a-4e9b-4ac7-9a96-d5199ee83077.pdf>The Lady, or the Tiger.pdf"
    },
    {
      "practiceid": "93d06ce0904d4ab894c9c48ffd0cab38",
      "timestamp": new Date('2024-03-14 09:25:04.207937'),
      "id": "dc32e6a903de4a48bdaba5a8560c3f92",
      "description": "THE LADY OR  THE TIGER",
      "audiofile": "modules/ec961dc4-aef2-49ad-85d5-2524f4819013.mp3>The_Lady_or_the_Tiger_-__By_Frank_R_Stockton.mp3",
      "drillfile": "modules/23c81c5a-4e9b-4ac7-9a96-d5199ee83077.pdf>The Lady, or the Tiger.pdf"
    },
    {
      "practiceid": "93d06ce0904d4ab894c9c48ffd0cab38",
      "timestamp": new Date('2024-03-14 09:25:04.207937'),
      "id": "dc32e6a903de4a48bdaba5a8560c3f92",
      "description": "THE LADY OR  THE TIGER",
      "audiofile": "modules/ec961dc4-aef2-49ad-85d5-2524f4819013.mp3>The_Lady_or_the_Tiger_-__By_Frank_R_Stockton.mp3",
      "drillfile": "modules/23c81c5a-4e9b-4ac7-9a96-d5199ee83077.pdf>The Lady, or the Tiger.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:25:12.573201'),
      "id": "5fd75f64b115447582beb6f9022c63e4",
      "description": "CONVERSATION DRILLS - I DON'T FEEL WELL",
      "audiofile": "modules/db40cf0a-4956-4687-9aa8-58d1d4d75517.mp3>0-14-i-dont-feel-well.mp3",
      "drillfile": "modules/3257908f-5749-4051-9447-351606854990.pdf>I DON_T FEEL WELL.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:25:12.573201'),
      "id": "5fd75f64b115447582beb6f9022c63e4",
      "description": "CONVERSATION DRILLS - I DON'T FEEL WELL",
      "audiofile": "modules/db40cf0a-4956-4687-9aa8-58d1d4d75517.mp3>0-14-i-dont-feel-well.mp3",
      "drillfile": "modules/3257908f-5749-4051-9447-351606854990.pdf>I DON_T FEEL WELL.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:25:12.573201'),
      "id": "5fd75f64b115447582beb6f9022c63e4",
      "description": "CONVERSATION DRILLS - I DON'T FEEL WELL",
      "audiofile": "modules/db40cf0a-4956-4687-9aa8-58d1d4d75517.mp3>0-14-i-dont-feel-well.mp3",
      "drillfile": "modules/3257908f-5749-4051-9447-351606854990.pdf>I DON_T FEEL WELL.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:25:12.573201'),
      "id": "5fd75f64b115447582beb6f9022c63e4",
      "description": "CONVERSATION DRILLS - I DON'T FEEL WELL",
      "audiofile": "modules/db40cf0a-4956-4687-9aa8-58d1d4d75517.mp3>0-14-i-dont-feel-well.mp3",
      "drillfile": "modules/3257908f-5749-4051-9447-351606854990.pdf>I DON_T FEEL WELL.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:25:12.573201'),
      "id": "5fd75f64b115447582beb6f9022c63e4",
      "description": "CONVERSATION DRILLS - I DON'T FEEL WELL",
      "audiofile": "modules/db40cf0a-4956-4687-9aa8-58d1d4d75517.mp3>0-14-i-dont-feel-well.mp3",
      "drillfile": "modules/3257908f-5749-4051-9447-351606854990.pdf>I DON_T FEEL WELL.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:25:12.573201'),
      "id": "5fd75f64b115447582beb6f9022c63e4",
      "description": "CONVERSATION DRILLS - I DON'T FEEL WELL",
      "audiofile": "modules/db40cf0a-4956-4687-9aa8-58d1d4d75517.mp3>0-14-i-dont-feel-well.mp3",
      "drillfile": "modules/3257908f-5749-4051-9447-351606854990.pdf>I DON_T FEEL WELL.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:25:17.079899'),
      "id": "e89f272440a94371b556e6a0ec0d8910",
      "description": "IPA PHONETICS 5",
      "audiofile": "modules/4675756c-cf92-4be1-bd6d-13064ce706fc.mp3>awaycinema.mp3",
      "drillfile": "modules/7a7908e0-468b-4106-b13b-e3d60f5d85a0.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:25:17.079899'),
      "id": "e89f272440a94371b556e6a0ec0d8910",
      "description": "IPA PHONETICS 5",
      "audiofile": "modules/4675756c-cf92-4be1-bd6d-13064ce706fc.mp3>awaycinema.mp3",
      "drillfile": "modules/7a7908e0-468b-4106-b13b-e3d60f5d85a0.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:25:17.079899'),
      "id": "e89f272440a94371b556e6a0ec0d8910",
      "description": "IPA PHONETICS 5",
      "audiofile": "modules/4675756c-cf92-4be1-bd6d-13064ce706fc.mp3>awaycinema.mp3",
      "drillfile": "modules/7a7908e0-468b-4106-b13b-e3d60f5d85a0.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:25:17.079899'),
      "id": "e89f272440a94371b556e6a0ec0d8910",
      "description": "IPA PHONETICS 5",
      "audiofile": "modules/4675756c-cf92-4be1-bd6d-13064ce706fc.mp3>awaycinema.mp3",
      "drillfile": "modules/7a7908e0-468b-4106-b13b-e3d60f5d85a0.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:25:17.079899'),
      "id": "e89f272440a94371b556e6a0ec0d8910",
      "description": "IPA PHONETICS 5",
      "audiofile": "modules/4675756c-cf92-4be1-bd6d-13064ce706fc.mp3>awaycinema.mp3",
      "drillfile": "modules/7a7908e0-468b-4106-b13b-e3d60f5d85a0.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:25:17.079899'),
      "id": "e89f272440a94371b556e6a0ec0d8910",
      "description": "IPA PHONETICS 5",
      "audiofile": "modules/4675756c-cf92-4be1-bd6d-13064ce706fc.mp3>awaycinema.mp3",
      "drillfile": "modules/7a7908e0-468b-4106-b13b-e3d60f5d85a0.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:25:25.355155'),
      "id": "9b8a21a38fdd4cd081dc91297e5d8b0c",
      "description": "IDIOMS_ AS OLD AS THE HILLS",
      "audiofile": "modules/8fb8b24f-c2d0-43a1-8292-32ef9a60361c.mp3>id_1_1_oldashills_us.mp3",
      "drillfile": "modules/56106dd4-f61b-4204-96ae-151cf1275631.pdf>OLD.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:25:25.355155'),
      "id": "9b8a21a38fdd4cd081dc91297e5d8b0c",
      "description": "IDIOMS_ AS OLD AS THE HILLS",
      "audiofile": "modules/8fb8b24f-c2d0-43a1-8292-32ef9a60361c.mp3>id_1_1_oldashills_us.mp3",
      "drillfile": "modules/56106dd4-f61b-4204-96ae-151cf1275631.pdf>OLD.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:25:25.355155'),
      "id": "9b8a21a38fdd4cd081dc91297e5d8b0c",
      "description": "IDIOMS_ AS OLD AS THE HILLS",
      "audiofile": "modules/8fb8b24f-c2d0-43a1-8292-32ef9a60361c.mp3>id_1_1_oldashills_us.mp3",
      "drillfile": "modules/56106dd4-f61b-4204-96ae-151cf1275631.pdf>OLD.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:25:25.355155'),
      "id": "9b8a21a38fdd4cd081dc91297e5d8b0c",
      "description": "IDIOMS_ AS OLD AS THE HILLS",
      "audiofile": "modules/8fb8b24f-c2d0-43a1-8292-32ef9a60361c.mp3>id_1_1_oldashills_us.mp3",
      "drillfile": "modules/56106dd4-f61b-4204-96ae-151cf1275631.pdf>OLD.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:25:25.355155'),
      "id": "9b8a21a38fdd4cd081dc91297e5d8b0c",
      "description": "IDIOMS_ AS OLD AS THE HILLS",
      "audiofile": "modules/8fb8b24f-c2d0-43a1-8292-32ef9a60361c.mp3>id_1_1_oldashills_us.mp3",
      "drillfile": "modules/56106dd4-f61b-4204-96ae-151cf1275631.pdf>OLD.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:25:25.355155'),
      "id": "9b8a21a38fdd4cd081dc91297e5d8b0c",
      "description": "IDIOMS_ AS OLD AS THE HILLS",
      "audiofile": "modules/8fb8b24f-c2d0-43a1-8292-32ef9a60361c.mp3>id_1_1_oldashills_us.mp3",
      "drillfile": "modules/56106dd4-f61b-4204-96ae-151cf1275631.pdf>OLD.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:25:40.245185'),
      "id": "6158d353ed1b459788cdfc47f55cbbdd",
      "description": "IPA PHONETICS 6",
      "audiofile": "modules/83130c31-754e-4c2d-ac53-76f927391ac5.mp3>turnlearn-am.mp3",
      "drillfile": "modules/07445e93-73f4-4cc3-9e6d-00b74fa5e85a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:25:40.245185'),
      "id": "6158d353ed1b459788cdfc47f55cbbdd",
      "description": "IPA PHONETICS 6",
      "audiofile": "modules/83130c31-754e-4c2d-ac53-76f927391ac5.mp3>turnlearn-am.mp3",
      "drillfile": "modules/07445e93-73f4-4cc3-9e6d-00b74fa5e85a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:25:40.245185'),
      "id": "6158d353ed1b459788cdfc47f55cbbdd",
      "description": "IPA PHONETICS 6",
      "audiofile": "modules/83130c31-754e-4c2d-ac53-76f927391ac5.mp3>turnlearn-am.mp3",
      "drillfile": "modules/07445e93-73f4-4cc3-9e6d-00b74fa5e85a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:25:40.245185'),
      "id": "6158d353ed1b459788cdfc47f55cbbdd",
      "description": "IPA PHONETICS 6",
      "audiofile": "modules/83130c31-754e-4c2d-ac53-76f927391ac5.mp3>turnlearn-am.mp3",
      "drillfile": "modules/07445e93-73f4-4cc3-9e6d-00b74fa5e85a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:25:40.245185'),
      "id": "6158d353ed1b459788cdfc47f55cbbdd",
      "description": "IPA PHONETICS 6",
      "audiofile": "modules/83130c31-754e-4c2d-ac53-76f927391ac5.mp3>turnlearn-am.mp3",
      "drillfile": "modules/07445e93-73f4-4cc3-9e6d-00b74fa5e85a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:25:40.245185'),
      "id": "6158d353ed1b459788cdfc47f55cbbdd",
      "description": "IPA PHONETICS 6",
      "audiofile": "modules/83130c31-754e-4c2d-ac53-76f927391ac5.mp3>turnlearn-am.mp3",
      "drillfile": "modules/07445e93-73f4-4cc3-9e6d-00b74fa5e85a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:25:42.517797'),
      "id": "144ca80550d3409eb3d64ba65a11940f",
      "description": "CONVERSATION DRILLS",
      "audiofile": "modules/a1327553-911d-4200-b4e4-4ed0d4adf8ea.mp3>0-17-i-hate-to-get-up.mp3",
      "drillfile": "modules/247a926b-bd3a-4b76-a09d-fd07ac507613.pdf>I HATE TO GET UP IN THE MORNING.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:25:42.517797'),
      "id": "144ca80550d3409eb3d64ba65a11940f",
      "description": "CONVERSATION DRILLS",
      "audiofile": "modules/a1327553-911d-4200-b4e4-4ed0d4adf8ea.mp3>0-17-i-hate-to-get-up.mp3",
      "drillfile": "modules/247a926b-bd3a-4b76-a09d-fd07ac507613.pdf>I HATE TO GET UP IN THE MORNING.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:25:42.517797'),
      "id": "144ca80550d3409eb3d64ba65a11940f",
      "description": "CONVERSATION DRILLS",
      "audiofile": "modules/a1327553-911d-4200-b4e4-4ed0d4adf8ea.mp3>0-17-i-hate-to-get-up.mp3",
      "drillfile": "modules/247a926b-bd3a-4b76-a09d-fd07ac507613.pdf>I HATE TO GET UP IN THE MORNING.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:25:42.517797'),
      "id": "144ca80550d3409eb3d64ba65a11940f",
      "description": "CONVERSATION DRILLS",
      "audiofile": "modules/a1327553-911d-4200-b4e4-4ed0d4adf8ea.mp3>0-17-i-hate-to-get-up.mp3",
      "drillfile": "modules/247a926b-bd3a-4b76-a09d-fd07ac507613.pdf>I HATE TO GET UP IN THE MORNING.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:25:42.517797'),
      "id": "144ca80550d3409eb3d64ba65a11940f",
      "description": "CONVERSATION DRILLS",
      "audiofile": "modules/a1327553-911d-4200-b4e4-4ed0d4adf8ea.mp3>0-17-i-hate-to-get-up.mp3",
      "drillfile": "modules/247a926b-bd3a-4b76-a09d-fd07ac507613.pdf>I HATE TO GET UP IN THE MORNING.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:25:42.517797'),
      "id": "144ca80550d3409eb3d64ba65a11940f",
      "description": "CONVERSATION DRILLS",
      "audiofile": "modules/a1327553-911d-4200-b4e4-4ed0d4adf8ea.mp3>0-17-i-hate-to-get-up.mp3",
      "drillfile": "modules/247a926b-bd3a-4b76-a09d-fd07ac507613.pdf>I HATE TO GET UP IN THE MORNING.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:26:10.764086'),
      "id": "08e34b664fdd4f41bd7f3cd5a94a0b77",
      "description": "IDIOMS_ AWKWARD AGE",
      "audiofile": "modules/c9915528-2ec0-4c43-8d07-30a067ab27f0.mp3>id_1_2_awkwardage_us.mp3",
      "drillfile": "modules/d7f772e2-4142-4d9f-bfa3-4aa45091e721.pdf>AWKWARD.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:26:10.764086'),
      "id": "08e34b664fdd4f41bd7f3cd5a94a0b77",
      "description": "IDIOMS_ AWKWARD AGE",
      "audiofile": "modules/c9915528-2ec0-4c43-8d07-30a067ab27f0.mp3>id_1_2_awkwardage_us.mp3",
      "drillfile": "modules/d7f772e2-4142-4d9f-bfa3-4aa45091e721.pdf>AWKWARD.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:26:10.764086'),
      "id": "08e34b664fdd4f41bd7f3cd5a94a0b77",
      "description": "IDIOMS_ AWKWARD AGE",
      "audiofile": "modules/c9915528-2ec0-4c43-8d07-30a067ab27f0.mp3>id_1_2_awkwardage_us.mp3",
      "drillfile": "modules/d7f772e2-4142-4d9f-bfa3-4aa45091e721.pdf>AWKWARD.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:26:10.764086'),
      "id": "08e34b664fdd4f41bd7f3cd5a94a0b77",
      "description": "IDIOMS_ AWKWARD AGE",
      "audiofile": "modules/c9915528-2ec0-4c43-8d07-30a067ab27f0.mp3>id_1_2_awkwardage_us.mp3",
      "drillfile": "modules/d7f772e2-4142-4d9f-bfa3-4aa45091e721.pdf>AWKWARD.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:26:10.764086'),
      "id": "08e34b664fdd4f41bd7f3cd5a94a0b77",
      "description": "IDIOMS_ AWKWARD AGE",
      "audiofile": "modules/c9915528-2ec0-4c43-8d07-30a067ab27f0.mp3>id_1_2_awkwardage_us.mp3",
      "drillfile": "modules/d7f772e2-4142-4d9f-bfa3-4aa45091e721.pdf>AWKWARD.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:26:10.764086'),
      "id": "08e34b664fdd4f41bd7f3cd5a94a0b77",
      "description": "IDIOMS_ AWKWARD AGE",
      "audiofile": "modules/c9915528-2ec0-4c43-8d07-30a067ab27f0.mp3>id_1_2_awkwardage_us.mp3",
      "drillfile": "modules/d7f772e2-4142-4d9f-bfa3-4aa45091e721.pdf>AWKWARD.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:26:50.832452'),
      "id": "2af38f83c43b4cfc8462a61da3d4693e",
      "description": "IDIOMS_ BRIGHT YOUNG THINGS",
      "audiofile": "modules/55489037-7a6b-49a6-b295-e168a28e3088.mp3>id_1_1_brightyoung_us.mp3",
      "drillfile": "modules/c0bed51a-e756-4757-9ea4-5f27ca70f3b6.pdf>BRIGHT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:26:50.832452'),
      "id": "2af38f83c43b4cfc8462a61da3d4693e",
      "description": "IDIOMS_ BRIGHT YOUNG THINGS",
      "audiofile": "modules/55489037-7a6b-49a6-b295-e168a28e3088.mp3>id_1_1_brightyoung_us.mp3",
      "drillfile": "modules/c0bed51a-e756-4757-9ea4-5f27ca70f3b6.pdf>BRIGHT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:26:50.832452'),
      "id": "2af38f83c43b4cfc8462a61da3d4693e",
      "description": "IDIOMS_ BRIGHT YOUNG THINGS",
      "audiofile": "modules/55489037-7a6b-49a6-b295-e168a28e3088.mp3>id_1_1_brightyoung_us.mp3",
      "drillfile": "modules/c0bed51a-e756-4757-9ea4-5f27ca70f3b6.pdf>BRIGHT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:26:50.832452'),
      "id": "2af38f83c43b4cfc8462a61da3d4693e",
      "description": "IDIOMS_ BRIGHT YOUNG THINGS",
      "audiofile": "modules/55489037-7a6b-49a6-b295-e168a28e3088.mp3>id_1_1_brightyoung_us.mp3",
      "drillfile": "modules/c0bed51a-e756-4757-9ea4-5f27ca70f3b6.pdf>BRIGHT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:26:50.832452'),
      "id": "2af38f83c43b4cfc8462a61da3d4693e",
      "description": "IDIOMS_ BRIGHT YOUNG THINGS",
      "audiofile": "modules/55489037-7a6b-49a6-b295-e168a28e3088.mp3>id_1_1_brightyoung_us.mp3",
      "drillfile": "modules/c0bed51a-e756-4757-9ea4-5f27ca70f3b6.pdf>BRIGHT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:26:50.832452'),
      "id": "2af38f83c43b4cfc8462a61da3d4693e",
      "description": "IDIOMS_ BRIGHT YOUNG THINGS",
      "audiofile": "modules/55489037-7a6b-49a6-b295-e168a28e3088.mp3>id_1_1_brightyoung_us.mp3",
      "drillfile": "modules/c0bed51a-e756-4757-9ea4-5f27ca70f3b6.pdf>BRIGHT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:27:30.82927'),
      "id": "8d4eb0ae53714d439a6eba06ad9c6490",
      "description": "IDIOMS_ COME OF AGE",
      "audiofile": "modules/b5dd60a3-007c-48c7-971f-a5c8fd779e0b.mp3>id_1_2_comeofage_us.mp3",
      "drillfile": "modules/ca5b65a2-0d77-4f08-b152-a10a099fb38d.pdf>COME.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:27:30.82927'),
      "id": "8d4eb0ae53714d439a6eba06ad9c6490",
      "description": "IDIOMS_ COME OF AGE",
      "audiofile": "modules/b5dd60a3-007c-48c7-971f-a5c8fd779e0b.mp3>id_1_2_comeofage_us.mp3",
      "drillfile": "modules/ca5b65a2-0d77-4f08-b152-a10a099fb38d.pdf>COME.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:27:30.82927'),
      "id": "8d4eb0ae53714d439a6eba06ad9c6490",
      "description": "IDIOMS_ COME OF AGE",
      "audiofile": "modules/b5dd60a3-007c-48c7-971f-a5c8fd779e0b.mp3>id_1_2_comeofage_us.mp3",
      "drillfile": "modules/ca5b65a2-0d77-4f08-b152-a10a099fb38d.pdf>COME.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:27:30.82927'),
      "id": "8d4eb0ae53714d439a6eba06ad9c6490",
      "description": "IDIOMS_ COME OF AGE",
      "audiofile": "modules/b5dd60a3-007c-48c7-971f-a5c8fd779e0b.mp3>id_1_2_comeofage_us.mp3",
      "drillfile": "modules/ca5b65a2-0d77-4f08-b152-a10a099fb38d.pdf>COME.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:27:30.82927'),
      "id": "8d4eb0ae53714d439a6eba06ad9c6490",
      "description": "IDIOMS_ COME OF AGE",
      "audiofile": "modules/b5dd60a3-007c-48c7-971f-a5c8fd779e0b.mp3>id_1_2_comeofage_us.mp3",
      "drillfile": "modules/ca5b65a2-0d77-4f08-b152-a10a099fb38d.pdf>COME.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:27:30.82927'),
      "id": "8d4eb0ae53714d439a6eba06ad9c6490",
      "description": "IDIOMS_ COME OF AGE",
      "audiofile": "modules/b5dd60a3-007c-48c7-971f-a5c8fd779e0b.mp3>id_1_2_comeofage_us.mp3",
      "drillfile": "modules/ca5b65a2-0d77-4f08-b152-a10a099fb38d.pdf>COME.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:28:02.606364'),
      "id": "fc26a0fb80ec4c198b9398ab03e75293",
      "description": "CONVERSATION DRILLS - JOB",
      "audiofile": "modules/2f272f3a-f1c5-48c4-8517-11effabd65b2.mp3>APPLYING FOR A JOB SOUND.mp3",
      "drillfile": "modules/0c828613-2733-4842-abd8-6ea6e0c6fac5.pdf>APPLYING FOR A JOB.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:28:02.606364'),
      "id": "fc26a0fb80ec4c198b9398ab03e75293",
      "description": "CONVERSATION DRILLS - JOB",
      "audiofile": "modules/2f272f3a-f1c5-48c4-8517-11effabd65b2.mp3>APPLYING FOR A JOB SOUND.mp3",
      "drillfile": "modules/0c828613-2733-4842-abd8-6ea6e0c6fac5.pdf>APPLYING FOR A JOB.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:28:02.606364'),
      "id": "fc26a0fb80ec4c198b9398ab03e75293",
      "description": "CONVERSATION DRILLS - JOB",
      "audiofile": "modules/2f272f3a-f1c5-48c4-8517-11effabd65b2.mp3>APPLYING FOR A JOB SOUND.mp3",
      "drillfile": "modules/0c828613-2733-4842-abd8-6ea6e0c6fac5.pdf>APPLYING FOR A JOB.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:28:02.606364'),
      "id": "fc26a0fb80ec4c198b9398ab03e75293",
      "description": "CONVERSATION DRILLS - JOB",
      "audiofile": "modules/2f272f3a-f1c5-48c4-8517-11effabd65b2.mp3>APPLYING FOR A JOB SOUND.mp3",
      "drillfile": "modules/0c828613-2733-4842-abd8-6ea6e0c6fac5.pdf>APPLYING FOR A JOB.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:28:02.606364'),
      "id": "fc26a0fb80ec4c198b9398ab03e75293",
      "description": "CONVERSATION DRILLS - JOB",
      "audiofile": "modules/2f272f3a-f1c5-48c4-8517-11effabd65b2.mp3>APPLYING FOR A JOB SOUND.mp3",
      "drillfile": "modules/0c828613-2733-4842-abd8-6ea6e0c6fac5.pdf>APPLYING FOR A JOB.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:28:02.606364'),
      "id": "fc26a0fb80ec4c198b9398ab03e75293",
      "description": "CONVERSATION DRILLS - JOB",
      "audiofile": "modules/2f272f3a-f1c5-48c4-8517-11effabd65b2.mp3>APPLYING FOR A JOB SOUND.mp3",
      "drillfile": "modules/0c828613-2733-4842-abd8-6ea6e0c6fac5.pdf>APPLYING FOR A JOB.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:28:17.298748'),
      "id": "8a92c289b7f04d8eaaa60bad5c276d14",
      "description": "IDIOMS_ FEEL MY AGE",
      "audiofile": "modules/ab2d33ac-7ee7-41b2-81cb-91605dfea41b.mp3>id_1_2_feelmyage_us.mp3",
      "drillfile": "modules/3d10e08d-f4d5-44c0-8860-7266213d6227.pdf>AGE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:28:17.298748'),
      "id": "8a92c289b7f04d8eaaa60bad5c276d14",
      "description": "IDIOMS_ FEEL MY AGE",
      "audiofile": "modules/ab2d33ac-7ee7-41b2-81cb-91605dfea41b.mp3>id_1_2_feelmyage_us.mp3",
      "drillfile": "modules/3d10e08d-f4d5-44c0-8860-7266213d6227.pdf>AGE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:28:17.298748'),
      "id": "8a92c289b7f04d8eaaa60bad5c276d14",
      "description": "IDIOMS_ FEEL MY AGE",
      "audiofile": "modules/ab2d33ac-7ee7-41b2-81cb-91605dfea41b.mp3>id_1_2_feelmyage_us.mp3",
      "drillfile": "modules/3d10e08d-f4d5-44c0-8860-7266213d6227.pdf>AGE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:28:17.298748'),
      "id": "8a92c289b7f04d8eaaa60bad5c276d14",
      "description": "IDIOMS_ FEEL MY AGE",
      "audiofile": "modules/ab2d33ac-7ee7-41b2-81cb-91605dfea41b.mp3>id_1_2_feelmyage_us.mp3",
      "drillfile": "modules/3d10e08d-f4d5-44c0-8860-7266213d6227.pdf>AGE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:28:17.298748'),
      "id": "8a92c289b7f04d8eaaa60bad5c276d14",
      "description": "IDIOMS_ FEEL MY AGE",
      "audiofile": "modules/ab2d33ac-7ee7-41b2-81cb-91605dfea41b.mp3>id_1_2_feelmyage_us.mp3",
      "drillfile": "modules/3d10e08d-f4d5-44c0-8860-7266213d6227.pdf>AGE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:28:17.298748'),
      "id": "8a92c289b7f04d8eaaa60bad5c276d14",
      "description": "IDIOMS_ FEEL MY AGE",
      "audiofile": "modules/ab2d33ac-7ee7-41b2-81cb-91605dfea41b.mp3>id_1_2_feelmyage_us.mp3",
      "drillfile": "modules/3d10e08d-f4d5-44c0-8860-7266213d6227.pdf>AGE.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:28:26.386587'),
      "id": "3bc1bb5235fa481f86868697572478bc",
      "description": "INTERMEDIATE PHRASES",
      "audiofile": "modules/6c3af5f5-aa77-4f3d-8f54-98d1d14cb139.mp3>All-Intermediate-Phrases.mp3",
      "drillfile": "modules/dffa834e-b855-45df-8fd2-f5295645c561.pdf>Intermediate Phrases.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:28:26.386587'),
      "id": "3bc1bb5235fa481f86868697572478bc",
      "description": "INTERMEDIATE PHRASES",
      "audiofile": "modules/6c3af5f5-aa77-4f3d-8f54-98d1d14cb139.mp3>All-Intermediate-Phrases.mp3",
      "drillfile": "modules/dffa834e-b855-45df-8fd2-f5295645c561.pdf>Intermediate Phrases.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:28:26.386587'),
      "id": "3bc1bb5235fa481f86868697572478bc",
      "description": "INTERMEDIATE PHRASES",
      "audiofile": "modules/6c3af5f5-aa77-4f3d-8f54-98d1d14cb139.mp3>All-Intermediate-Phrases.mp3",
      "drillfile": "modules/dffa834e-b855-45df-8fd2-f5295645c561.pdf>Intermediate Phrases.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:28:26.386587'),
      "id": "3bc1bb5235fa481f86868697572478bc",
      "description": "INTERMEDIATE PHRASES",
      "audiofile": "modules/6c3af5f5-aa77-4f3d-8f54-98d1d14cb139.mp3>All-Intermediate-Phrases.mp3",
      "drillfile": "modules/dffa834e-b855-45df-8fd2-f5295645c561.pdf>Intermediate Phrases.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:28:26.386587'),
      "id": "3bc1bb5235fa481f86868697572478bc",
      "description": "INTERMEDIATE PHRASES",
      "audiofile": "modules/6c3af5f5-aa77-4f3d-8f54-98d1d14cb139.mp3>All-Intermediate-Phrases.mp3",
      "drillfile": "modules/dffa834e-b855-45df-8fd2-f5295645c561.pdf>Intermediate Phrases.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:28:26.386587'),
      "id": "3bc1bb5235fa481f86868697572478bc",
      "description": "INTERMEDIATE PHRASES",
      "audiofile": "modules/6c3af5f5-aa77-4f3d-8f54-98d1d14cb139.mp3>All-Intermediate-Phrases.mp3",
      "drillfile": "modules/dffa834e-b855-45df-8fd2-f5295645c561.pdf>Intermediate Phrases.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:28:52.161389'),
      "id": "6ec345afd5df4e1e9caa3ad6da72fa34",
      "description": "CONVERSATION DRILLS - LOCATION",
      "audiofile": "modules/4997b200-2732-45b5-9a61-c43a83d4d926.mp3>LOCATION SOUNDS.mp3",
      "drillfile": "modules/26c9215e-fa91-4ddc-a744-4d10449518ab.pdf>Where is the school.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:28:52.161389'),
      "id": "6ec345afd5df4e1e9caa3ad6da72fa34",
      "description": "CONVERSATION DRILLS - LOCATION",
      "audiofile": "modules/4997b200-2732-45b5-9a61-c43a83d4d926.mp3>LOCATION SOUNDS.mp3",
      "drillfile": "modules/26c9215e-fa91-4ddc-a744-4d10449518ab.pdf>Where is the school.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:28:52.161389'),
      "id": "6ec345afd5df4e1e9caa3ad6da72fa34",
      "description": "CONVERSATION DRILLS - LOCATION",
      "audiofile": "modules/4997b200-2732-45b5-9a61-c43a83d4d926.mp3>LOCATION SOUNDS.mp3",
      "drillfile": "modules/26c9215e-fa91-4ddc-a744-4d10449518ab.pdf>Where is the school.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:28:52.161389'),
      "id": "6ec345afd5df4e1e9caa3ad6da72fa34",
      "description": "CONVERSATION DRILLS - LOCATION",
      "audiofile": "modules/4997b200-2732-45b5-9a61-c43a83d4d926.mp3>LOCATION SOUNDS.mp3",
      "drillfile": "modules/26c9215e-fa91-4ddc-a744-4d10449518ab.pdf>Where is the school.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:28:52.161389'),
      "id": "6ec345afd5df4e1e9caa3ad6da72fa34",
      "description": "CONVERSATION DRILLS - LOCATION",
      "audiofile": "modules/4997b200-2732-45b5-9a61-c43a83d4d926.mp3>LOCATION SOUNDS.mp3",
      "drillfile": "modules/26c9215e-fa91-4ddc-a744-4d10449518ab.pdf>Where is the school.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:28:52.161389'),
      "id": "6ec345afd5df4e1e9caa3ad6da72fa34",
      "description": "CONVERSATION DRILLS - LOCATION",
      "audiofile": "modules/4997b200-2732-45b5-9a61-c43a83d4d926.mp3>LOCATION SOUNDS.mp3",
      "drillfile": "modules/26c9215e-fa91-4ddc-a744-4d10449518ab.pdf>Where is the school.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:28:52.241995'),
      "id": "68d4a7600c5e4e56919fad915499f4cd",
      "description": "INDEFINITE PRONOUNS",
      "audiofile": "modules/601fbc4c-7094-4f60-a1e4-8c96b1f7adca.mp3>A2-15-Indefinite-Pronoun (1).mp3",
      "drillfile": "modules/cbc92270-8d4f-4c73-9806-865314109da8.pdf>INDEFINITE PRONOUNS.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:28:52.241995'),
      "id": "68d4a7600c5e4e56919fad915499f4cd",
      "description": "INDEFINITE PRONOUNS",
      "audiofile": "modules/601fbc4c-7094-4f60-a1e4-8c96b1f7adca.mp3>A2-15-Indefinite-Pronoun (1).mp3",
      "drillfile": "modules/cbc92270-8d4f-4c73-9806-865314109da8.pdf>INDEFINITE PRONOUNS.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:28:52.241995'),
      "id": "68d4a7600c5e4e56919fad915499f4cd",
      "description": "INDEFINITE PRONOUNS",
      "audiofile": "modules/601fbc4c-7094-4f60-a1e4-8c96b1f7adca.mp3>A2-15-Indefinite-Pronoun (1).mp3",
      "drillfile": "modules/cbc92270-8d4f-4c73-9806-865314109da8.pdf>INDEFINITE PRONOUNS.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:28:52.241995'),
      "id": "68d4a7600c5e4e56919fad915499f4cd",
      "description": "INDEFINITE PRONOUNS",
      "audiofile": "modules/601fbc4c-7094-4f60-a1e4-8c96b1f7adca.mp3>A2-15-Indefinite-Pronoun (1).mp3",
      "drillfile": "modules/cbc92270-8d4f-4c73-9806-865314109da8.pdf>INDEFINITE PRONOUNS.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:28:52.241995'),
      "id": "68d4a7600c5e4e56919fad915499f4cd",
      "description": "INDEFINITE PRONOUNS",
      "audiofile": "modules/601fbc4c-7094-4f60-a1e4-8c96b1f7adca.mp3>A2-15-Indefinite-Pronoun (1).mp3",
      "drillfile": "modules/cbc92270-8d4f-4c73-9806-865314109da8.pdf>INDEFINITE PRONOUNS.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:28:52.241995'),
      "id": "68d4a7600c5e4e56919fad915499f4cd",
      "description": "INDEFINITE PRONOUNS",
      "audiofile": "modules/601fbc4c-7094-4f60-a1e4-8c96b1f7adca.mp3>A2-15-Indefinite-Pronoun (1).mp3",
      "drillfile": "modules/cbc92270-8d4f-4c73-9806-865314109da8.pdf>INDEFINITE PRONOUNS.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:28:57.346287'),
      "id": "3ebc9fd85cd74b9ca3befc795b8c224a",
      "description": "IDIOMS_ GENERATION GAP",
      "audiofile": "modules/8f461b06-1c34-4d01-b553-23dd9f9343c6.mp3>id_1_1_generationgap_us.mp3",
      "drillfile": "modules/d920f2df-0105-4498-a7a0-15a3cfc3d105.pdf>GEN GAP.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:28:57.346287'),
      "id": "3ebc9fd85cd74b9ca3befc795b8c224a",
      "description": "IDIOMS_ GENERATION GAP",
      "audiofile": "modules/8f461b06-1c34-4d01-b553-23dd9f9343c6.mp3>id_1_1_generationgap_us.mp3",
      "drillfile": "modules/d920f2df-0105-4498-a7a0-15a3cfc3d105.pdf>GEN GAP.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:28:57.346287'),
      "id": "3ebc9fd85cd74b9ca3befc795b8c224a",
      "description": "IDIOMS_ GENERATION GAP",
      "audiofile": "modules/8f461b06-1c34-4d01-b553-23dd9f9343c6.mp3>id_1_1_generationgap_us.mp3",
      "drillfile": "modules/d920f2df-0105-4498-a7a0-15a3cfc3d105.pdf>GEN GAP.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:28:57.346287'),
      "id": "3ebc9fd85cd74b9ca3befc795b8c224a",
      "description": "IDIOMS_ GENERATION GAP",
      "audiofile": "modules/8f461b06-1c34-4d01-b553-23dd9f9343c6.mp3>id_1_1_generationgap_us.mp3",
      "drillfile": "modules/d920f2df-0105-4498-a7a0-15a3cfc3d105.pdf>GEN GAP.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:28:57.346287'),
      "id": "3ebc9fd85cd74b9ca3befc795b8c224a",
      "description": "IDIOMS_ GENERATION GAP",
      "audiofile": "modules/8f461b06-1c34-4d01-b553-23dd9f9343c6.mp3>id_1_1_generationgap_us.mp3",
      "drillfile": "modules/d920f2df-0105-4498-a7a0-15a3cfc3d105.pdf>GEN GAP.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:28:57.346287'),
      "id": "3ebc9fd85cd74b9ca3befc795b8c224a",
      "description": "IDIOMS_ GENERATION GAP",
      "audiofile": "modules/8f461b06-1c34-4d01-b553-23dd9f9343c6.mp3>id_1_1_generationgap_us.mp3",
      "drillfile": "modules/d920f2df-0105-4498-a7a0-15a3cfc3d105.pdf>GEN GAP.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:29:20.717523'),
      "id": "43b584919cf34f75be98699d8efe2736",
      "description": "IPA PHONETICS 6",
      "audiofile": "modules/c549845c-c477-4493-8a8d-bb6a6f4e951b.mp3>turnlearn-am.mp3",
      "drillfile": "modules/08ab889b-3da5-4de9-9a0c-5c41938fcf83.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:29:20.717523'),
      "id": "43b584919cf34f75be98699d8efe2736",
      "description": "IPA PHONETICS 6",
      "audiofile": "modules/c549845c-c477-4493-8a8d-bb6a6f4e951b.mp3>turnlearn-am.mp3",
      "drillfile": "modules/08ab889b-3da5-4de9-9a0c-5c41938fcf83.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:29:20.717523'),
      "id": "43b584919cf34f75be98699d8efe2736",
      "description": "IPA PHONETICS 6",
      "audiofile": "modules/c549845c-c477-4493-8a8d-bb6a6f4e951b.mp3>turnlearn-am.mp3",
      "drillfile": "modules/08ab889b-3da5-4de9-9a0c-5c41938fcf83.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:29:20.717523'),
      "id": "43b584919cf34f75be98699d8efe2736",
      "description": "IPA PHONETICS 6",
      "audiofile": "modules/c549845c-c477-4493-8a8d-bb6a6f4e951b.mp3>turnlearn-am.mp3",
      "drillfile": "modules/08ab889b-3da5-4de9-9a0c-5c41938fcf83.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:29:20.717523'),
      "id": "43b584919cf34f75be98699d8efe2736",
      "description": "IPA PHONETICS 6",
      "audiofile": "modules/c549845c-c477-4493-8a8d-bb6a6f4e951b.mp3>turnlearn-am.mp3",
      "drillfile": "modules/08ab889b-3da5-4de9-9a0c-5c41938fcf83.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:29:20.717523'),
      "id": "43b584919cf34f75be98699d8efe2736",
      "description": "IPA PHONETICS 6",
      "audiofile": "modules/c549845c-c477-4493-8a8d-bb6a6f4e951b.mp3>turnlearn-am.mp3",
      "drillfile": "modules/08ab889b-3da5-4de9-9a0c-5c41938fcf83.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:29:38.176229'),
      "id": "56a3d200211847b2911076935c1fffd3",
      "description": "CONVERSATION DRILLS - RESTAURANT",
      "audiofile": "modules/edd789bc-802a-44b9-908c-1036f1913d23.mp3>0-30-at-the-restaurant.mp3",
      "drillfile": "modules/f4a99f38-718a-48d9-b144-f06926b21ad4.pdf>Restaurant.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:29:38.176229'),
      "id": "56a3d200211847b2911076935c1fffd3",
      "description": "CONVERSATION DRILLS - RESTAURANT",
      "audiofile": "modules/edd789bc-802a-44b9-908c-1036f1913d23.mp3>0-30-at-the-restaurant.mp3",
      "drillfile": "modules/f4a99f38-718a-48d9-b144-f06926b21ad4.pdf>Restaurant.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:29:38.176229'),
      "id": "56a3d200211847b2911076935c1fffd3",
      "description": "CONVERSATION DRILLS - RESTAURANT",
      "audiofile": "modules/edd789bc-802a-44b9-908c-1036f1913d23.mp3>0-30-at-the-restaurant.mp3",
      "drillfile": "modules/f4a99f38-718a-48d9-b144-f06926b21ad4.pdf>Restaurant.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:29:38.176229'),
      "id": "56a3d200211847b2911076935c1fffd3",
      "description": "CONVERSATION DRILLS - RESTAURANT",
      "audiofile": "modules/edd789bc-802a-44b9-908c-1036f1913d23.mp3>0-30-at-the-restaurant.mp3",
      "drillfile": "modules/f4a99f38-718a-48d9-b144-f06926b21ad4.pdf>Restaurant.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:29:38.176229'),
      "id": "56a3d200211847b2911076935c1fffd3",
      "description": "CONVERSATION DRILLS - RESTAURANT",
      "audiofile": "modules/edd789bc-802a-44b9-908c-1036f1913d23.mp3>0-30-at-the-restaurant.mp3",
      "drillfile": "modules/f4a99f38-718a-48d9-b144-f06926b21ad4.pdf>Restaurant.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:29:38.176229'),
      "id": "56a3d200211847b2911076935c1fffd3",
      "description": "CONVERSATION DRILLS - RESTAURANT",
      "audiofile": "modules/edd789bc-802a-44b9-908c-1036f1913d23.mp3>0-30-at-the-restaurant.mp3",
      "drillfile": "modules/f4a99f38-718a-48d9-b144-f06926b21ad4.pdf>Restaurant.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:29:55.666405'),
      "id": "dedc8059feb447bf833aa1567b3c8f49",
      "description": "INDUSTRIAL",
      "audiofile": "modules/0a0e4304-e8c8-4053-802f-5ee1d240f96a.mp3>1372-2-industrial.mp3",
      "drillfile": "modules/9ed22941-1bb8-4429-ac8b-7ae9b8f501f4.pdf>I_d like a big industrial refrigerator.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:29:55.666405'),
      "id": "dedc8059feb447bf833aa1567b3c8f49",
      "description": "INDUSTRIAL",
      "audiofile": "modules/0a0e4304-e8c8-4053-802f-5ee1d240f96a.mp3>1372-2-industrial.mp3",
      "drillfile": "modules/9ed22941-1bb8-4429-ac8b-7ae9b8f501f4.pdf>I_d like a big industrial refrigerator.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:29:55.666405'),
      "id": "dedc8059feb447bf833aa1567b3c8f49",
      "description": "INDUSTRIAL",
      "audiofile": "modules/0a0e4304-e8c8-4053-802f-5ee1d240f96a.mp3>1372-2-industrial.mp3",
      "drillfile": "modules/9ed22941-1bb8-4429-ac8b-7ae9b8f501f4.pdf>I_d like a big industrial refrigerator.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:29:55.666405'),
      "id": "dedc8059feb447bf833aa1567b3c8f49",
      "description": "INDUSTRIAL",
      "audiofile": "modules/0a0e4304-e8c8-4053-802f-5ee1d240f96a.mp3>1372-2-industrial.mp3",
      "drillfile": "modules/9ed22941-1bb8-4429-ac8b-7ae9b8f501f4.pdf>I_d like a big industrial refrigerator.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:29:55.666405'),
      "id": "dedc8059feb447bf833aa1567b3c8f49",
      "description": "INDUSTRIAL",
      "audiofile": "modules/0a0e4304-e8c8-4053-802f-5ee1d240f96a.mp3>1372-2-industrial.mp3",
      "drillfile": "modules/9ed22941-1bb8-4429-ac8b-7ae9b8f501f4.pdf>I_d like a big industrial refrigerator.pdf"
    },
    {
      "practiceid": "c90f0a1d9e36482d928fef96eab1965a",
      "timestamp": new Date('2024-03-14 09:29:55.666405'),
      "id": "dedc8059feb447bf833aa1567b3c8f49",
      "description": "INDUSTRIAL",
      "audiofile": "modules/0a0e4304-e8c8-4053-802f-5ee1d240f96a.mp3>1372-2-industrial.mp3",
      "drillfile": "modules/9ed22941-1bb8-4429-ac8b-7ae9b8f501f4.pdf>I_d like a big industrial refrigerator.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:30:12.707903'),
      "id": "1588d04c128d46e8a2b8b87990b45636",
      "description": "IPA PHONETICS 7",
      "audiofile": "modules/aef2be74-9bde-4999-b940-3c037e3da69a.mp3>hitsitting.mp3",
      "drillfile": "modules/40777ea3-e0af-4b0c-a7f7-269d47933e34.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:30:12.707903'),
      "id": "1588d04c128d46e8a2b8b87990b45636",
      "description": "IPA PHONETICS 7",
      "audiofile": "modules/aef2be74-9bde-4999-b940-3c037e3da69a.mp3>hitsitting.mp3",
      "drillfile": "modules/40777ea3-e0af-4b0c-a7f7-269d47933e34.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:30:12.707903'),
      "id": "1588d04c128d46e8a2b8b87990b45636",
      "description": "IPA PHONETICS 7",
      "audiofile": "modules/aef2be74-9bde-4999-b940-3c037e3da69a.mp3>hitsitting.mp3",
      "drillfile": "modules/40777ea3-e0af-4b0c-a7f7-269d47933e34.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:30:12.707903'),
      "id": "1588d04c128d46e8a2b8b87990b45636",
      "description": "IPA PHONETICS 7",
      "audiofile": "modules/aef2be74-9bde-4999-b940-3c037e3da69a.mp3>hitsitting.mp3",
      "drillfile": "modules/40777ea3-e0af-4b0c-a7f7-269d47933e34.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:30:12.707903'),
      "id": "1588d04c128d46e8a2b8b87990b45636",
      "description": "IPA PHONETICS 7",
      "audiofile": "modules/aef2be74-9bde-4999-b940-3c037e3da69a.mp3>hitsitting.mp3",
      "drillfile": "modules/40777ea3-e0af-4b0c-a7f7-269d47933e34.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:30:12.707903'),
      "id": "1588d04c128d46e8a2b8b87990b45636",
      "description": "IPA PHONETICS 7",
      "audiofile": "modules/aef2be74-9bde-4999-b940-3c037e3da69a.mp3>hitsitting.mp3",
      "drillfile": "modules/40777ea3-e0af-4b0c-a7f7-269d47933e34.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:30:19.571268'),
      "id": "404354e14e404539a3f779ae9dfe5d32",
      "description": "CONVERSATION DRILLS - SMOKING",
      "audiofile": "modules/786964a6-505b-4854-a251-b3450960fc2c.mp3>SMOKING SOUND.mp3",
      "drillfile": "modules/097eaebf-e222-4a09-8694-658d55e09958.pdf>Do you smoke.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:30:19.571268'),
      "id": "404354e14e404539a3f779ae9dfe5d32",
      "description": "CONVERSATION DRILLS - SMOKING",
      "audiofile": "modules/786964a6-505b-4854-a251-b3450960fc2c.mp3>SMOKING SOUND.mp3",
      "drillfile": "modules/097eaebf-e222-4a09-8694-658d55e09958.pdf>Do you smoke.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:30:19.571268'),
      "id": "404354e14e404539a3f779ae9dfe5d32",
      "description": "CONVERSATION DRILLS - SMOKING",
      "audiofile": "modules/786964a6-505b-4854-a251-b3450960fc2c.mp3>SMOKING SOUND.mp3",
      "drillfile": "modules/097eaebf-e222-4a09-8694-658d55e09958.pdf>Do you smoke.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:30:19.571268'),
      "id": "404354e14e404539a3f779ae9dfe5d32",
      "description": "CONVERSATION DRILLS - SMOKING",
      "audiofile": "modules/786964a6-505b-4854-a251-b3450960fc2c.mp3>SMOKING SOUND.mp3",
      "drillfile": "modules/097eaebf-e222-4a09-8694-658d55e09958.pdf>Do you smoke.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:30:19.571268'),
      "id": "404354e14e404539a3f779ae9dfe5d32",
      "description": "CONVERSATION DRILLS - SMOKING",
      "audiofile": "modules/786964a6-505b-4854-a251-b3450960fc2c.mp3>SMOKING SOUND.mp3",
      "drillfile": "modules/097eaebf-e222-4a09-8694-658d55e09958.pdf>Do you smoke.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:30:19.571268'),
      "id": "404354e14e404539a3f779ae9dfe5d32",
      "description": "CONVERSATION DRILLS - SMOKING",
      "audiofile": "modules/786964a6-505b-4854-a251-b3450960fc2c.mp3>SMOKING SOUND.mp3",
      "drillfile": "modules/097eaebf-e222-4a09-8694-658d55e09958.pdf>Do you smoke.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:30:36.139048'),
      "id": "4d127f8319aa41649b58f0a69eba9a52",
      "description": "IPA PHONETICS 8",
      "audiofile": "modules/780db0d8-2f50-4176-9302-ff0e2180da24.mp3>seeheat.mp3",
      "drillfile": "modules/36f2d1f4-befd-4897-8c6d-af1fae849eaf.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:30:36.139048'),
      "id": "4d127f8319aa41649b58f0a69eba9a52",
      "description": "IPA PHONETICS 8",
      "audiofile": "modules/780db0d8-2f50-4176-9302-ff0e2180da24.mp3>seeheat.mp3",
      "drillfile": "modules/36f2d1f4-befd-4897-8c6d-af1fae849eaf.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:30:36.139048'),
      "id": "4d127f8319aa41649b58f0a69eba9a52",
      "description": "IPA PHONETICS 8",
      "audiofile": "modules/780db0d8-2f50-4176-9302-ff0e2180da24.mp3>seeheat.mp3",
      "drillfile": "modules/36f2d1f4-befd-4897-8c6d-af1fae849eaf.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:30:36.139048'),
      "id": "4d127f8319aa41649b58f0a69eba9a52",
      "description": "IPA PHONETICS 8",
      "audiofile": "modules/780db0d8-2f50-4176-9302-ff0e2180da24.mp3>seeheat.mp3",
      "drillfile": "modules/36f2d1f4-befd-4897-8c6d-af1fae849eaf.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:30:36.139048'),
      "id": "4d127f8319aa41649b58f0a69eba9a52",
      "description": "IPA PHONETICS 8",
      "audiofile": "modules/780db0d8-2f50-4176-9302-ff0e2180da24.mp3>seeheat.mp3",
      "drillfile": "modules/36f2d1f4-befd-4897-8c6d-af1fae849eaf.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:30:36.139048'),
      "id": "4d127f8319aa41649b58f0a69eba9a52",
      "description": "IPA PHONETICS 8",
      "audiofile": "modules/780db0d8-2f50-4176-9302-ff0e2180da24.mp3>seeheat.mp3",
      "drillfile": "modules/36f2d1f4-befd-4897-8c6d-af1fae849eaf.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:32:07.209621'),
      "id": "8dee6ae72e4a48e0b9fe49b6b375a8c6",
      "description": "CONVERSATION DRILLS - TELEPHONE",
      "audiofile": "modules/17505011-5403-492d-9ecf-cabe09c9cf76.mp3>telephone sounds.mp3",
      "drillfile": "modules/73edecb3-d2e9-4fae-a382-8f205e8bbee0.pdf>TELEPHONE CONVERSATION.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:32:07.209621'),
      "id": "8dee6ae72e4a48e0b9fe49b6b375a8c6",
      "description": "CONVERSATION DRILLS - TELEPHONE",
      "audiofile": "modules/17505011-5403-492d-9ecf-cabe09c9cf76.mp3>telephone sounds.mp3",
      "drillfile": "modules/73edecb3-d2e9-4fae-a382-8f205e8bbee0.pdf>TELEPHONE CONVERSATION.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:32:07.209621'),
      "id": "8dee6ae72e4a48e0b9fe49b6b375a8c6",
      "description": "CONVERSATION DRILLS - TELEPHONE",
      "audiofile": "modules/17505011-5403-492d-9ecf-cabe09c9cf76.mp3>telephone sounds.mp3",
      "drillfile": "modules/73edecb3-d2e9-4fae-a382-8f205e8bbee0.pdf>TELEPHONE CONVERSATION.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:32:07.209621'),
      "id": "8dee6ae72e4a48e0b9fe49b6b375a8c6",
      "description": "CONVERSATION DRILLS - TELEPHONE",
      "audiofile": "modules/17505011-5403-492d-9ecf-cabe09c9cf76.mp3>telephone sounds.mp3",
      "drillfile": "modules/73edecb3-d2e9-4fae-a382-8f205e8bbee0.pdf>TELEPHONE CONVERSATION.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:32:07.209621'),
      "id": "8dee6ae72e4a48e0b9fe49b6b375a8c6",
      "description": "CONVERSATION DRILLS - TELEPHONE",
      "audiofile": "modules/17505011-5403-492d-9ecf-cabe09c9cf76.mp3>telephone sounds.mp3",
      "drillfile": "modules/73edecb3-d2e9-4fae-a382-8f205e8bbee0.pdf>TELEPHONE CONVERSATION.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:32:07.209621'),
      "id": "8dee6ae72e4a48e0b9fe49b6b375a8c6",
      "description": "CONVERSATION DRILLS - TELEPHONE",
      "audiofile": "modules/17505011-5403-492d-9ecf-cabe09c9cf76.mp3>telephone sounds.mp3",
      "drillfile": "modules/73edecb3-d2e9-4fae-a382-8f205e8bbee0.pdf>TELEPHONE CONVERSATION.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:32:41.610287'),
      "id": "b01443c2b2824340bd8e536a922d3520",
      "description": "IPA PHONETICS 9",
      "audiofile": "modules/8ef6ff26-6090-469d-a63e-7dc62315fa0d.mp3>hotrock-am.mp3",
      "drillfile": "modules/60bdacdd-9a35-4817-b142-0f9ce3c370eb.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:32:41.610287'),
      "id": "b01443c2b2824340bd8e536a922d3520",
      "description": "IPA PHONETICS 9",
      "audiofile": "modules/8ef6ff26-6090-469d-a63e-7dc62315fa0d.mp3>hotrock-am.mp3",
      "drillfile": "modules/60bdacdd-9a35-4817-b142-0f9ce3c370eb.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:32:41.610287'),
      "id": "b01443c2b2824340bd8e536a922d3520",
      "description": "IPA PHONETICS 9",
      "audiofile": "modules/8ef6ff26-6090-469d-a63e-7dc62315fa0d.mp3>hotrock-am.mp3",
      "drillfile": "modules/60bdacdd-9a35-4817-b142-0f9ce3c370eb.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:32:41.610287'),
      "id": "b01443c2b2824340bd8e536a922d3520",
      "description": "IPA PHONETICS 9",
      "audiofile": "modules/8ef6ff26-6090-469d-a63e-7dc62315fa0d.mp3>hotrock-am.mp3",
      "drillfile": "modules/60bdacdd-9a35-4817-b142-0f9ce3c370eb.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:32:41.610287'),
      "id": "b01443c2b2824340bd8e536a922d3520",
      "description": "IPA PHONETICS 9",
      "audiofile": "modules/8ef6ff26-6090-469d-a63e-7dc62315fa0d.mp3>hotrock-am.mp3",
      "drillfile": "modules/60bdacdd-9a35-4817-b142-0f9ce3c370eb.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:32:41.610287'),
      "id": "b01443c2b2824340bd8e536a922d3520",
      "description": "IPA PHONETICS 9",
      "audiofile": "modules/8ef6ff26-6090-469d-a63e-7dc62315fa0d.mp3>hotrock-am.mp3",
      "drillfile": "modules/60bdacdd-9a35-4817-b142-0f9ce3c370eb.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:11.015879'),
      "id": "5e27838de9ff456ab0c8455ab78a3d1a",
      "description": "IPA PHONETICS 10",
      "audiofile": "modules/536eca68-ced6-4749-b22a-9fcd14abee64.mp3>callfour-am.mp3",
      "drillfile": "modules/7b1948ec-068c-459b-837a-6c148865a07c.pdf>Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:11.015879'),
      "id": "5e27838de9ff456ab0c8455ab78a3d1a",
      "description": "IPA PHONETICS 10",
      "audiofile": "modules/536eca68-ced6-4749-b22a-9fcd14abee64.mp3>callfour-am.mp3",
      "drillfile": "modules/7b1948ec-068c-459b-837a-6c148865a07c.pdf>Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:11.015879'),
      "id": "5e27838de9ff456ab0c8455ab78a3d1a",
      "description": "IPA PHONETICS 10",
      "audiofile": "modules/536eca68-ced6-4749-b22a-9fcd14abee64.mp3>callfour-am.mp3",
      "drillfile": "modules/7b1948ec-068c-459b-837a-6c148865a07c.pdf>Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:11.015879'),
      "id": "5e27838de9ff456ab0c8455ab78a3d1a",
      "description": "IPA PHONETICS 10",
      "audiofile": "modules/536eca68-ced6-4749-b22a-9fcd14abee64.mp3>callfour-am.mp3",
      "drillfile": "modules/7b1948ec-068c-459b-837a-6c148865a07c.pdf>Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:11.015879'),
      "id": "5e27838de9ff456ab0c8455ab78a3d1a",
      "description": "IPA PHONETICS 10",
      "audiofile": "modules/536eca68-ced6-4749-b22a-9fcd14abee64.mp3>callfour-am.mp3",
      "drillfile": "modules/7b1948ec-068c-459b-837a-6c148865a07c.pdf>Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:11.015879'),
      "id": "5e27838de9ff456ab0c8455ab78a3d1a",
      "description": "IPA PHONETICS 10",
      "audiofile": "modules/536eca68-ced6-4749-b22a-9fcd14abee64.mp3>callfour-am.mp3",
      "drillfile": "modules/7b1948ec-068c-459b-837a-6c148865a07c.pdf>Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:33.239528'),
      "id": "d29d803b7430413787947b92a13980a4",
      "description": "IPA PHONETICS 11",
      "audiofile": "modules/2bd766bc-055f-4130-9d37-93590d1a817f.mp3>11 putcould.mp3",
      "drillfile": "modules/75130f21-8f0c-4778-9bd9-c083aeac47bc.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:33.239528'),
      "id": "d29d803b7430413787947b92a13980a4",
      "description": "IPA PHONETICS 11",
      "audiofile": "modules/2bd766bc-055f-4130-9d37-93590d1a817f.mp3>11 putcould.mp3",
      "drillfile": "modules/75130f21-8f0c-4778-9bd9-c083aeac47bc.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:33.239528'),
      "id": "d29d803b7430413787947b92a13980a4",
      "description": "IPA PHONETICS 11",
      "audiofile": "modules/2bd766bc-055f-4130-9d37-93590d1a817f.mp3>11 putcould.mp3",
      "drillfile": "modules/75130f21-8f0c-4778-9bd9-c083aeac47bc.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:33.239528'),
      "id": "d29d803b7430413787947b92a13980a4",
      "description": "IPA PHONETICS 11",
      "audiofile": "modules/2bd766bc-055f-4130-9d37-93590d1a817f.mp3>11 putcould.mp3",
      "drillfile": "modules/75130f21-8f0c-4778-9bd9-c083aeac47bc.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:33.239528'),
      "id": "d29d803b7430413787947b92a13980a4",
      "description": "IPA PHONETICS 11",
      "audiofile": "modules/2bd766bc-055f-4130-9d37-93590d1a817f.mp3>11 putcould.mp3",
      "drillfile": "modules/75130f21-8f0c-4778-9bd9-c083aeac47bc.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:33.239528'),
      "id": "d29d803b7430413787947b92a13980a4",
      "description": "IPA PHONETICS 11",
      "audiofile": "modules/2bd766bc-055f-4130-9d37-93590d1a817f.mp3>11 putcould.mp3",
      "drillfile": "modules/75130f21-8f0c-4778-9bd9-c083aeac47bc.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:55.970245'),
      "id": "93ad0133f879442cb256a17bc8b6c385",
      "description": "IPA PHONETICS 12",
      "audiofile": "modules/b657b5e4-29c3-4683-8c02-dd65446bf850.mp3>12 bluefood.mp3",
      "drillfile": "modules/a136921c-9113-4516-b3a2-1e9acfdc55be.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:55.970245'),
      "id": "93ad0133f879442cb256a17bc8b6c385",
      "description": "IPA PHONETICS 12",
      "audiofile": "modules/b657b5e4-29c3-4683-8c02-dd65446bf850.mp3>12 bluefood.mp3",
      "drillfile": "modules/a136921c-9113-4516-b3a2-1e9acfdc55be.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:55.970245'),
      "id": "93ad0133f879442cb256a17bc8b6c385",
      "description": "IPA PHONETICS 12",
      "audiofile": "modules/b657b5e4-29c3-4683-8c02-dd65446bf850.mp3>12 bluefood.mp3",
      "drillfile": "modules/a136921c-9113-4516-b3a2-1e9acfdc55be.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:55.970245'),
      "id": "93ad0133f879442cb256a17bc8b6c385",
      "description": "IPA PHONETICS 12",
      "audiofile": "modules/b657b5e4-29c3-4683-8c02-dd65446bf850.mp3>12 bluefood.mp3",
      "drillfile": "modules/a136921c-9113-4516-b3a2-1e9acfdc55be.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:55.970245'),
      "id": "93ad0133f879442cb256a17bc8b6c385",
      "description": "IPA PHONETICS 12",
      "audiofile": "modules/b657b5e4-29c3-4683-8c02-dd65446bf850.mp3>12 bluefood.mp3",
      "drillfile": "modules/a136921c-9113-4516-b3a2-1e9acfdc55be.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:33:55.970245'),
      "id": "93ad0133f879442cb256a17bc8b6c385",
      "description": "IPA PHONETICS 12",
      "audiofile": "modules/b657b5e4-29c3-4683-8c02-dd65446bf850.mp3>12 bluefood.mp3",
      "drillfile": "modules/a136921c-9113-4516-b3a2-1e9acfdc55be.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:34:25.871368'),
      "id": "fe7863ce4ad143d7b0aa7d3dbae7e107",
      "description": "CONVERSATION DRILLS - YOU'VE CHANGE",
      "audiofile": "modules/c1e9f38e-f375-4433-bce6-625ab32a4e22.mp3>3L1-youve-changed.mp3",
      "drillfile": "modules/f623f55a-ea94-451f-8585-bd91a91008f4.pdf>YOU_VE CHANGED.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:34:25.871368'),
      "id": "fe7863ce4ad143d7b0aa7d3dbae7e107",
      "description": "CONVERSATION DRILLS - YOU'VE CHANGE",
      "audiofile": "modules/c1e9f38e-f375-4433-bce6-625ab32a4e22.mp3>3L1-youve-changed.mp3",
      "drillfile": "modules/f623f55a-ea94-451f-8585-bd91a91008f4.pdf>YOU_VE CHANGED.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:34:25.871368'),
      "id": "fe7863ce4ad143d7b0aa7d3dbae7e107",
      "description": "CONVERSATION DRILLS - YOU'VE CHANGE",
      "audiofile": "modules/c1e9f38e-f375-4433-bce6-625ab32a4e22.mp3>3L1-youve-changed.mp3",
      "drillfile": "modules/f623f55a-ea94-451f-8585-bd91a91008f4.pdf>YOU_VE CHANGED.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:34:25.871368'),
      "id": "fe7863ce4ad143d7b0aa7d3dbae7e107",
      "description": "CONVERSATION DRILLS - YOU'VE CHANGE",
      "audiofile": "modules/c1e9f38e-f375-4433-bce6-625ab32a4e22.mp3>3L1-youve-changed.mp3",
      "drillfile": "modules/f623f55a-ea94-451f-8585-bd91a91008f4.pdf>YOU_VE CHANGED.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:34:25.871368'),
      "id": "fe7863ce4ad143d7b0aa7d3dbae7e107",
      "description": "CONVERSATION DRILLS - YOU'VE CHANGE",
      "audiofile": "modules/c1e9f38e-f375-4433-bce6-625ab32a4e22.mp3>3L1-youve-changed.mp3",
      "drillfile": "modules/f623f55a-ea94-451f-8585-bd91a91008f4.pdf>YOU_VE CHANGED.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:34:25.871368'),
      "id": "fe7863ce4ad143d7b0aa7d3dbae7e107",
      "description": "CONVERSATION DRILLS - YOU'VE CHANGE",
      "audiofile": "modules/c1e9f38e-f375-4433-bce6-625ab32a4e22.mp3>3L1-youve-changed.mp3",
      "drillfile": "modules/f623f55a-ea94-451f-8585-bd91a91008f4.pdf>YOU_VE CHANGED.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:35:26.361365'),
      "id": "dee2444837d34bd9b2378cb6187c2a5f",
      "description": "CONVERSATION DRILLS - SHOCKINGLY DIFFERENT",
      "audiofile": "modules/603a51c7-f3bc-4cc5-ba1d-cfd02a222ae3.mp3>1320-abidemi-differences.mp3",
      "drillfile": "modules/a68988fc-75ca-4377-9e6b-afeb005105c6.pdf>SHOCKINGLY DIFFERENT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:35:26.361365'),
      "id": "dee2444837d34bd9b2378cb6187c2a5f",
      "description": "CONVERSATION DRILLS - SHOCKINGLY DIFFERENT",
      "audiofile": "modules/603a51c7-f3bc-4cc5-ba1d-cfd02a222ae3.mp3>1320-abidemi-differences.mp3",
      "drillfile": "modules/a68988fc-75ca-4377-9e6b-afeb005105c6.pdf>SHOCKINGLY DIFFERENT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:35:26.361365'),
      "id": "dee2444837d34bd9b2378cb6187c2a5f",
      "description": "CONVERSATION DRILLS - SHOCKINGLY DIFFERENT",
      "audiofile": "modules/603a51c7-f3bc-4cc5-ba1d-cfd02a222ae3.mp3>1320-abidemi-differences.mp3",
      "drillfile": "modules/a68988fc-75ca-4377-9e6b-afeb005105c6.pdf>SHOCKINGLY DIFFERENT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:35:26.361365'),
      "id": "dee2444837d34bd9b2378cb6187c2a5f",
      "description": "CONVERSATION DRILLS - SHOCKINGLY DIFFERENT",
      "audiofile": "modules/603a51c7-f3bc-4cc5-ba1d-cfd02a222ae3.mp3>1320-abidemi-differences.mp3",
      "drillfile": "modules/a68988fc-75ca-4377-9e6b-afeb005105c6.pdf>SHOCKINGLY DIFFERENT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:35:26.361365'),
      "id": "dee2444837d34bd9b2378cb6187c2a5f",
      "description": "CONVERSATION DRILLS - SHOCKINGLY DIFFERENT",
      "audiofile": "modules/603a51c7-f3bc-4cc5-ba1d-cfd02a222ae3.mp3>1320-abidemi-differences.mp3",
      "drillfile": "modules/a68988fc-75ca-4377-9e6b-afeb005105c6.pdf>SHOCKINGLY DIFFERENT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:35:26.361365'),
      "id": "dee2444837d34bd9b2378cb6187c2a5f",
      "description": "CONVERSATION DRILLS - SHOCKINGLY DIFFERENT",
      "audiofile": "modules/603a51c7-f3bc-4cc5-ba1d-cfd02a222ae3.mp3>1320-abidemi-differences.mp3",
      "drillfile": "modules/a68988fc-75ca-4377-9e6b-afeb005105c6.pdf>SHOCKINGLY DIFFERENT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:35:40.465039'),
      "id": "a449268ce078460dab86ad0776d3fdc0",
      "description": "IDIOMS_ IMPROVED WITH AGE",
      "audiofile": "modules/d0cc1e0a-b75f-4f19-bbb3-09b126b10e34.mp3>id_1_2_improveage_us.mp3",
      "drillfile": "modules/581234d8-9c0a-4c09-9b8b-510030316559.pdf>IMPROVE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:35:40.465039'),
      "id": "a449268ce078460dab86ad0776d3fdc0",
      "description": "IDIOMS_ IMPROVED WITH AGE",
      "audiofile": "modules/d0cc1e0a-b75f-4f19-bbb3-09b126b10e34.mp3>id_1_2_improveage_us.mp3",
      "drillfile": "modules/581234d8-9c0a-4c09-9b8b-510030316559.pdf>IMPROVE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:35:40.465039'),
      "id": "a449268ce078460dab86ad0776d3fdc0",
      "description": "IDIOMS_ IMPROVED WITH AGE",
      "audiofile": "modules/d0cc1e0a-b75f-4f19-bbb3-09b126b10e34.mp3>id_1_2_improveage_us.mp3",
      "drillfile": "modules/581234d8-9c0a-4c09-9b8b-510030316559.pdf>IMPROVE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:35:40.465039'),
      "id": "a449268ce078460dab86ad0776d3fdc0",
      "description": "IDIOMS_ IMPROVED WITH AGE",
      "audiofile": "modules/d0cc1e0a-b75f-4f19-bbb3-09b126b10e34.mp3>id_1_2_improveage_us.mp3",
      "drillfile": "modules/581234d8-9c0a-4c09-9b8b-510030316559.pdf>IMPROVE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:35:40.465039'),
      "id": "a449268ce078460dab86ad0776d3fdc0",
      "description": "IDIOMS_ IMPROVED WITH AGE",
      "audiofile": "modules/d0cc1e0a-b75f-4f19-bbb3-09b126b10e34.mp3>id_1_2_improveage_us.mp3",
      "drillfile": "modules/581234d8-9c0a-4c09-9b8b-510030316559.pdf>IMPROVE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:35:40.465039'),
      "id": "a449268ce078460dab86ad0776d3fdc0",
      "description": "IDIOMS_ IMPROVED WITH AGE",
      "audiofile": "modules/d0cc1e0a-b75f-4f19-bbb3-09b126b10e34.mp3>id_1_2_improveage_us.mp3",
      "drillfile": "modules/581234d8-9c0a-4c09-9b8b-510030316559.pdf>IMPROVE.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:35:49.821258'),
      "id": "9828b71ef1914a219d451622c1a4832b",
      "description": "CONVERSATION DRILLS - ACCIDENT",
      "audiofile": "modules/2435d5fa-6f03-49a0-a3e1-7a2a6b50f302.mp3>1322-paul-accident.mp3",
      "drillfile": "modules/6b2eb4a3-7ca3-49ff-ba51-e852344c97ba.pdf>ACCIDENT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:35:49.821258'),
      "id": "9828b71ef1914a219d451622c1a4832b",
      "description": "CONVERSATION DRILLS - ACCIDENT",
      "audiofile": "modules/2435d5fa-6f03-49a0-a3e1-7a2a6b50f302.mp3>1322-paul-accident.mp3",
      "drillfile": "modules/6b2eb4a3-7ca3-49ff-ba51-e852344c97ba.pdf>ACCIDENT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:35:49.821258'),
      "id": "9828b71ef1914a219d451622c1a4832b",
      "description": "CONVERSATION DRILLS - ACCIDENT",
      "audiofile": "modules/2435d5fa-6f03-49a0-a3e1-7a2a6b50f302.mp3>1322-paul-accident.mp3",
      "drillfile": "modules/6b2eb4a3-7ca3-49ff-ba51-e852344c97ba.pdf>ACCIDENT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:35:49.821258'),
      "id": "9828b71ef1914a219d451622c1a4832b",
      "description": "CONVERSATION DRILLS - ACCIDENT",
      "audiofile": "modules/2435d5fa-6f03-49a0-a3e1-7a2a6b50f302.mp3>1322-paul-accident.mp3",
      "drillfile": "modules/6b2eb4a3-7ca3-49ff-ba51-e852344c97ba.pdf>ACCIDENT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:35:49.821258'),
      "id": "9828b71ef1914a219d451622c1a4832b",
      "description": "CONVERSATION DRILLS - ACCIDENT",
      "audiofile": "modules/2435d5fa-6f03-49a0-a3e1-7a2a6b50f302.mp3>1322-paul-accident.mp3",
      "drillfile": "modules/6b2eb4a3-7ca3-49ff-ba51-e852344c97ba.pdf>ACCIDENT.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:35:49.821258'),
      "id": "9828b71ef1914a219d451622c1a4832b",
      "description": "CONVERSATION DRILLS - ACCIDENT",
      "audiofile": "modules/2435d5fa-6f03-49a0-a3e1-7a2a6b50f302.mp3>1322-paul-accident.mp3",
      "drillfile": "modules/6b2eb4a3-7ca3-49ff-ba51-e852344c97ba.pdf>ACCIDENT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:36:22.285614'),
      "id": "6f765df7ccdd406bb99185d8823b67de",
      "description": "IDIOMS_ IN THE PRIME",
      "audiofile": "modules/ff03c176-c83a-4530-8e1f-1ddf6c572dab.mp3>id_1_1_primeoflife_us.mp3",
      "drillfile": "modules/90243320-5f2b-45f8-af4a-402dc0f3afd8.pdf>PRIME (1).pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:36:22.285614'),
      "id": "6f765df7ccdd406bb99185d8823b67de",
      "description": "IDIOMS_ IN THE PRIME",
      "audiofile": "modules/ff03c176-c83a-4530-8e1f-1ddf6c572dab.mp3>id_1_1_primeoflife_us.mp3",
      "drillfile": "modules/90243320-5f2b-45f8-af4a-402dc0f3afd8.pdf>PRIME (1).pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:36:22.285614'),
      "id": "6f765df7ccdd406bb99185d8823b67de",
      "description": "IDIOMS_ IN THE PRIME",
      "audiofile": "modules/ff03c176-c83a-4530-8e1f-1ddf6c572dab.mp3>id_1_1_primeoflife_us.mp3",
      "drillfile": "modules/90243320-5f2b-45f8-af4a-402dc0f3afd8.pdf>PRIME (1).pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:36:22.285614'),
      "id": "6f765df7ccdd406bb99185d8823b67de",
      "description": "IDIOMS_ IN THE PRIME",
      "audiofile": "modules/ff03c176-c83a-4530-8e1f-1ddf6c572dab.mp3>id_1_1_primeoflife_us.mp3",
      "drillfile": "modules/90243320-5f2b-45f8-af4a-402dc0f3afd8.pdf>PRIME (1).pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:36:22.285614'),
      "id": "6f765df7ccdd406bb99185d8823b67de",
      "description": "IDIOMS_ IN THE PRIME",
      "audiofile": "modules/ff03c176-c83a-4530-8e1f-1ddf6c572dab.mp3>id_1_1_primeoflife_us.mp3",
      "drillfile": "modules/90243320-5f2b-45f8-af4a-402dc0f3afd8.pdf>PRIME (1).pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:36:22.285614'),
      "id": "6f765df7ccdd406bb99185d8823b67de",
      "description": "IDIOMS_ IN THE PRIME",
      "audiofile": "modules/ff03c176-c83a-4530-8e1f-1ddf6c572dab.mp3>id_1_1_primeoflife_us.mp3",
      "drillfile": "modules/90243320-5f2b-45f8-af4a-402dc0f3afd8.pdf>PRIME (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:36:36.950163'),
      "id": "b7670632eadd4742a7468661c3b200ac",
      "description": "CONVERSATION DRILLS - DRINK TO OUR FRIENDSHIP",
      "audiofile": "modules/ed919ac5-9a9d-4abb-a9ce-6ff6a0a5d492.mp3>drinktocomplete.mp3",
      "drillfile": "modules/c1ad48d4-753e-48ab-b8a3-64d2e16efe47.pdf>A Drink to Our Friendship - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:36:36.950163'),
      "id": "b7670632eadd4742a7468661c3b200ac",
      "description": "CONVERSATION DRILLS - DRINK TO OUR FRIENDSHIP",
      "audiofile": "modules/ed919ac5-9a9d-4abb-a9ce-6ff6a0a5d492.mp3>drinktocomplete.mp3",
      "drillfile": "modules/c1ad48d4-753e-48ab-b8a3-64d2e16efe47.pdf>A Drink to Our Friendship - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:36:36.950163'),
      "id": "b7670632eadd4742a7468661c3b200ac",
      "description": "CONVERSATION DRILLS - DRINK TO OUR FRIENDSHIP",
      "audiofile": "modules/ed919ac5-9a9d-4abb-a9ce-6ff6a0a5d492.mp3>drinktocomplete.mp3",
      "drillfile": "modules/c1ad48d4-753e-48ab-b8a3-64d2e16efe47.pdf>A Drink to Our Friendship - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:36:36.950163'),
      "id": "b7670632eadd4742a7468661c3b200ac",
      "description": "CONVERSATION DRILLS - DRINK TO OUR FRIENDSHIP",
      "audiofile": "modules/ed919ac5-9a9d-4abb-a9ce-6ff6a0a5d492.mp3>drinktocomplete.mp3",
      "drillfile": "modules/c1ad48d4-753e-48ab-b8a3-64d2e16efe47.pdf>A Drink to Our Friendship - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:36:36.950163'),
      "id": "b7670632eadd4742a7468661c3b200ac",
      "description": "CONVERSATION DRILLS - DRINK TO OUR FRIENDSHIP",
      "audiofile": "modules/ed919ac5-9a9d-4abb-a9ce-6ff6a0a5d492.mp3>drinktocomplete.mp3",
      "drillfile": "modules/c1ad48d4-753e-48ab-b8a3-64d2e16efe47.pdf>A Drink to Our Friendship - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:36:36.950163'),
      "id": "b7670632eadd4742a7468661c3b200ac",
      "description": "CONVERSATION DRILLS - DRINK TO OUR FRIENDSHIP",
      "audiofile": "modules/ed919ac5-9a9d-4abb-a9ce-6ff6a0a5d492.mp3>drinktocomplete.mp3",
      "drillfile": "modules/c1ad48d4-753e-48ab-b8a3-64d2e16efe47.pdf>A Drink to Our Friendship - Google Docs.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:37:03.834811'),
      "id": "87eeff8e68ab422ea0aa17ef26607473",
      "description": "IDIOMS_ KNEE HIGH",
      "audiofile": "modules/53f83919-3506-4c41-87fc-5bfd7366e383.mp3>id_1_1_kneegrasshop_us.mp3",
      "drillfile": "modules/bd6924d9-cb1a-402d-bcdd-8f682a1ef6cc.pdf>KNEE HIGH.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:37:03.834811'),
      "id": "87eeff8e68ab422ea0aa17ef26607473",
      "description": "IDIOMS_ KNEE HIGH",
      "audiofile": "modules/53f83919-3506-4c41-87fc-5bfd7366e383.mp3>id_1_1_kneegrasshop_us.mp3",
      "drillfile": "modules/bd6924d9-cb1a-402d-bcdd-8f682a1ef6cc.pdf>KNEE HIGH.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:37:03.834811'),
      "id": "87eeff8e68ab422ea0aa17ef26607473",
      "description": "IDIOMS_ KNEE HIGH",
      "audiofile": "modules/53f83919-3506-4c41-87fc-5bfd7366e383.mp3>id_1_1_kneegrasshop_us.mp3",
      "drillfile": "modules/bd6924d9-cb1a-402d-bcdd-8f682a1ef6cc.pdf>KNEE HIGH.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:37:03.834811'),
      "id": "87eeff8e68ab422ea0aa17ef26607473",
      "description": "IDIOMS_ KNEE HIGH",
      "audiofile": "modules/53f83919-3506-4c41-87fc-5bfd7366e383.mp3>id_1_1_kneegrasshop_us.mp3",
      "drillfile": "modules/bd6924d9-cb1a-402d-bcdd-8f682a1ef6cc.pdf>KNEE HIGH.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:37:03.834811'),
      "id": "87eeff8e68ab422ea0aa17ef26607473",
      "description": "IDIOMS_ KNEE HIGH",
      "audiofile": "modules/53f83919-3506-4c41-87fc-5bfd7366e383.mp3>id_1_1_kneegrasshop_us.mp3",
      "drillfile": "modules/bd6924d9-cb1a-402d-bcdd-8f682a1ef6cc.pdf>KNEE HIGH.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:37:03.834811'),
      "id": "87eeff8e68ab422ea0aa17ef26607473",
      "description": "IDIOMS_ KNEE HIGH",
      "audiofile": "modules/53f83919-3506-4c41-87fc-5bfd7366e383.mp3>id_1_1_kneegrasshop_us.mp3",
      "drillfile": "modules/bd6924d9-cb1a-402d-bcdd-8f682a1ef6cc.pdf>KNEE HIGH.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:37:11.21309'),
      "id": "78d8ad0868bf41c69a47f8a6a6e7962c",
      "description": "CONVERSATION DRILLS - DRINK TO YOU AND YOUR FUTURE",
      "audiofile": "modules/077ec788-0617-42bc-8462-7f682e463151.mp3>drinktocomplete.mp3",
      "drillfile": "modules/c815a8ae-040e-44fa-97d8-33642a7e6bbf.pdf>Drink to you and your future - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:37:11.21309'),
      "id": "78d8ad0868bf41c69a47f8a6a6e7962c",
      "description": "CONVERSATION DRILLS - DRINK TO YOU AND YOUR FUTURE",
      "audiofile": "modules/077ec788-0617-42bc-8462-7f682e463151.mp3>drinktocomplete.mp3",
      "drillfile": "modules/c815a8ae-040e-44fa-97d8-33642a7e6bbf.pdf>Drink to you and your future - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:37:11.21309'),
      "id": "78d8ad0868bf41c69a47f8a6a6e7962c",
      "description": "CONVERSATION DRILLS - DRINK TO YOU AND YOUR FUTURE",
      "audiofile": "modules/077ec788-0617-42bc-8462-7f682e463151.mp3>drinktocomplete.mp3",
      "drillfile": "modules/c815a8ae-040e-44fa-97d8-33642a7e6bbf.pdf>Drink to you and your future - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:37:11.21309'),
      "id": "78d8ad0868bf41c69a47f8a6a6e7962c",
      "description": "CONVERSATION DRILLS - DRINK TO YOU AND YOUR FUTURE",
      "audiofile": "modules/077ec788-0617-42bc-8462-7f682e463151.mp3>drinktocomplete.mp3",
      "drillfile": "modules/c815a8ae-040e-44fa-97d8-33642a7e6bbf.pdf>Drink to you and your future - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:37:11.21309'),
      "id": "78d8ad0868bf41c69a47f8a6a6e7962c",
      "description": "CONVERSATION DRILLS - DRINK TO YOU AND YOUR FUTURE",
      "audiofile": "modules/077ec788-0617-42bc-8462-7f682e463151.mp3>drinktocomplete.mp3",
      "drillfile": "modules/c815a8ae-040e-44fa-97d8-33642a7e6bbf.pdf>Drink to you and your future - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:37:11.21309'),
      "id": "78d8ad0868bf41c69a47f8a6a6e7962c",
      "description": "CONVERSATION DRILLS - DRINK TO YOU AND YOUR FUTURE",
      "audiofile": "modules/077ec788-0617-42bc-8462-7f682e463151.mp3>drinktocomplete.mp3",
      "drillfile": "modules/c815a8ae-040e-44fa-97d8-33642a7e6bbf.pdf>Drink to you and your future - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:37:33.583342'),
      "id": "23c05a2314c74396b7b0504e56f0a3d1",
      "description": "CONVERSATION DRILLS - BREAK UP",
      "audiofile": "modules/a6d727a8-ec0e-4330-9387-5a575b9dccae.mp3>breakupcomplete (1).mp3",
      "drillfile": "modules/dd7077a3-f66a-4143-8bd8-fa3ccbcbce39.pdf>I_m breaking up with her.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:37:33.583342'),
      "id": "23c05a2314c74396b7b0504e56f0a3d1",
      "description": "CONVERSATION DRILLS - BREAK UP",
      "audiofile": "modules/a6d727a8-ec0e-4330-9387-5a575b9dccae.mp3>breakupcomplete (1).mp3",
      "drillfile": "modules/dd7077a3-f66a-4143-8bd8-fa3ccbcbce39.pdf>I_m breaking up with her.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:37:33.583342'),
      "id": "23c05a2314c74396b7b0504e56f0a3d1",
      "description": "CONVERSATION DRILLS - BREAK UP",
      "audiofile": "modules/a6d727a8-ec0e-4330-9387-5a575b9dccae.mp3>breakupcomplete (1).mp3",
      "drillfile": "modules/dd7077a3-f66a-4143-8bd8-fa3ccbcbce39.pdf>I_m breaking up with her.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:37:33.583342'),
      "id": "23c05a2314c74396b7b0504e56f0a3d1",
      "description": "CONVERSATION DRILLS - BREAK UP",
      "audiofile": "modules/a6d727a8-ec0e-4330-9387-5a575b9dccae.mp3>breakupcomplete (1).mp3",
      "drillfile": "modules/dd7077a3-f66a-4143-8bd8-fa3ccbcbce39.pdf>I_m breaking up with her.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:37:33.583342'),
      "id": "23c05a2314c74396b7b0504e56f0a3d1",
      "description": "CONVERSATION DRILLS - BREAK UP",
      "audiofile": "modules/a6d727a8-ec0e-4330-9387-5a575b9dccae.mp3>breakupcomplete (1).mp3",
      "drillfile": "modules/dd7077a3-f66a-4143-8bd8-fa3ccbcbce39.pdf>I_m breaking up with her.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:37:33.583342'),
      "id": "23c05a2314c74396b7b0504e56f0a3d1",
      "description": "CONVERSATION DRILLS - BREAK UP",
      "audiofile": "modules/a6d727a8-ec0e-4330-9387-5a575b9dccae.mp3>breakupcomplete (1).mp3",
      "drillfile": "modules/dd7077a3-f66a-4143-8bd8-fa3ccbcbce39.pdf>I_m breaking up with her.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:37:52.787615'),
      "id": "62a18a32c95745a3bd18c69d4f23c43b",
      "description": "IDIOMS_ LONG IN A TOOTH",
      "audiofile": "modules/2a78eadf-b14c-4ee9-bfd2-93b4f0e344c9.mp3>id_1_1_longtooth_us.mp3",
      "drillfile": "modules/264de8e4-be8a-467a-b54c-eb2a3bc3a62a.pdf>LONG.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:37:52.787615'),
      "id": "62a18a32c95745a3bd18c69d4f23c43b",
      "description": "IDIOMS_ LONG IN A TOOTH",
      "audiofile": "modules/2a78eadf-b14c-4ee9-bfd2-93b4f0e344c9.mp3>id_1_1_longtooth_us.mp3",
      "drillfile": "modules/264de8e4-be8a-467a-b54c-eb2a3bc3a62a.pdf>LONG.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:37:52.787615'),
      "id": "62a18a32c95745a3bd18c69d4f23c43b",
      "description": "IDIOMS_ LONG IN A TOOTH",
      "audiofile": "modules/2a78eadf-b14c-4ee9-bfd2-93b4f0e344c9.mp3>id_1_1_longtooth_us.mp3",
      "drillfile": "modules/264de8e4-be8a-467a-b54c-eb2a3bc3a62a.pdf>LONG.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:37:52.787615'),
      "id": "62a18a32c95745a3bd18c69d4f23c43b",
      "description": "IDIOMS_ LONG IN A TOOTH",
      "audiofile": "modules/2a78eadf-b14c-4ee9-bfd2-93b4f0e344c9.mp3>id_1_1_longtooth_us.mp3",
      "drillfile": "modules/264de8e4-be8a-467a-b54c-eb2a3bc3a62a.pdf>LONG.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:37:52.787615'),
      "id": "62a18a32c95745a3bd18c69d4f23c43b",
      "description": "IDIOMS_ LONG IN A TOOTH",
      "audiofile": "modules/2a78eadf-b14c-4ee9-bfd2-93b4f0e344c9.mp3>id_1_1_longtooth_us.mp3",
      "drillfile": "modules/264de8e4-be8a-467a-b54c-eb2a3bc3a62a.pdf>LONG.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:37:52.787615'),
      "id": "62a18a32c95745a3bd18c69d4f23c43b",
      "description": "IDIOMS_ LONG IN A TOOTH",
      "audiofile": "modules/2a78eadf-b14c-4ee9-bfd2-93b4f0e344c9.mp3>id_1_1_longtooth_us.mp3",
      "drillfile": "modules/264de8e4-be8a-467a-b54c-eb2a3bc3a62a.pdf>LONG.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:38:13.405942'),
      "id": "578cb3fb8bcf40d1a3fad545d0aa57b7",
      "description": "CONVERSATION DRILLS - BROILING",
      "audiofile": "modules/e166732f-42df-4beb-9482-52e263d1b014.mp3>broilingcomplete.mp3",
      "drillfile": "modules/69096adf-cf94-43ab-9869-6f5d9aec4c4c.pdf>Oh, my.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:38:13.405942'),
      "id": "578cb3fb8bcf40d1a3fad545d0aa57b7",
      "description": "CONVERSATION DRILLS - BROILING",
      "audiofile": "modules/e166732f-42df-4beb-9482-52e263d1b014.mp3>broilingcomplete.mp3",
      "drillfile": "modules/69096adf-cf94-43ab-9869-6f5d9aec4c4c.pdf>Oh, my.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:38:13.405942'),
      "id": "578cb3fb8bcf40d1a3fad545d0aa57b7",
      "description": "CONVERSATION DRILLS - BROILING",
      "audiofile": "modules/e166732f-42df-4beb-9482-52e263d1b014.mp3>broilingcomplete.mp3",
      "drillfile": "modules/69096adf-cf94-43ab-9869-6f5d9aec4c4c.pdf>Oh, my.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:38:13.405942'),
      "id": "578cb3fb8bcf40d1a3fad545d0aa57b7",
      "description": "CONVERSATION DRILLS - BROILING",
      "audiofile": "modules/e166732f-42df-4beb-9482-52e263d1b014.mp3>broilingcomplete.mp3",
      "drillfile": "modules/69096adf-cf94-43ab-9869-6f5d9aec4c4c.pdf>Oh, my.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:38:13.405942'),
      "id": "578cb3fb8bcf40d1a3fad545d0aa57b7",
      "description": "CONVERSATION DRILLS - BROILING",
      "audiofile": "modules/e166732f-42df-4beb-9482-52e263d1b014.mp3>broilingcomplete.mp3",
      "drillfile": "modules/69096adf-cf94-43ab-9869-6f5d9aec4c4c.pdf>Oh, my.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:38:13.405942'),
      "id": "578cb3fb8bcf40d1a3fad545d0aa57b7",
      "description": "CONVERSATION DRILLS - BROILING",
      "audiofile": "modules/e166732f-42df-4beb-9482-52e263d1b014.mp3>broilingcomplete.mp3",
      "drillfile": "modules/69096adf-cf94-43ab-9869-6f5d9aec4c4c.pdf>Oh, my.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:38:36.31643'),
      "id": "59c39c9822f24d83a7f7c432d321d5c6",
      "description": "CONVERSATION DRILLS - BURNED",
      "audiofile": "modules/1b733201-b4d5-48ae-a68d-5ae0b6a328e2.mp3>burntcrispcomp.mp3",
      "drillfile": "modules/92ccfc49-50f2-4f19-ade0-2ba6db40dd37.pdf>I Was Burned to a Crisp.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:38:36.31643'),
      "id": "59c39c9822f24d83a7f7c432d321d5c6",
      "description": "CONVERSATION DRILLS - BURNED",
      "audiofile": "modules/1b733201-b4d5-48ae-a68d-5ae0b6a328e2.mp3>burntcrispcomp.mp3",
      "drillfile": "modules/92ccfc49-50f2-4f19-ade0-2ba6db40dd37.pdf>I Was Burned to a Crisp.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:38:36.31643'),
      "id": "59c39c9822f24d83a7f7c432d321d5c6",
      "description": "CONVERSATION DRILLS - BURNED",
      "audiofile": "modules/1b733201-b4d5-48ae-a68d-5ae0b6a328e2.mp3>burntcrispcomp.mp3",
      "drillfile": "modules/92ccfc49-50f2-4f19-ade0-2ba6db40dd37.pdf>I Was Burned to a Crisp.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:38:36.31643'),
      "id": "59c39c9822f24d83a7f7c432d321d5c6",
      "description": "CONVERSATION DRILLS - BURNED",
      "audiofile": "modules/1b733201-b4d5-48ae-a68d-5ae0b6a328e2.mp3>burntcrispcomp.mp3",
      "drillfile": "modules/92ccfc49-50f2-4f19-ade0-2ba6db40dd37.pdf>I Was Burned to a Crisp.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:38:36.31643'),
      "id": "59c39c9822f24d83a7f7c432d321d5c6",
      "description": "CONVERSATION DRILLS - BURNED",
      "audiofile": "modules/1b733201-b4d5-48ae-a68d-5ae0b6a328e2.mp3>burntcrispcomp.mp3",
      "drillfile": "modules/92ccfc49-50f2-4f19-ade0-2ba6db40dd37.pdf>I Was Burned to a Crisp.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:38:36.31643'),
      "id": "59c39c9822f24d83a7f7c432d321d5c6",
      "description": "CONVERSATION DRILLS - BURNED",
      "audiofile": "modules/1b733201-b4d5-48ae-a68d-5ae0b6a328e2.mp3>burntcrispcomp.mp3",
      "drillfile": "modules/92ccfc49-50f2-4f19-ade0-2ba6db40dd37.pdf>I Was Burned to a Crisp.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:38:41.460947'),
      "id": "b45402709e9b4e9997b873da9e77a786",
      "description": "IDIOMS_ NO SPRING CHICKEN",
      "audiofile": "modules/696d03eb-3158-4855-9aa2-255379fac916.mp3>id_1_1_springchicken_us.mp3",
      "drillfile": "modules/7c21c873-178b-45a3-8114-9255e8d1e940.pdf>NO SPRING.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:38:41.460947'),
      "id": "b45402709e9b4e9997b873da9e77a786",
      "description": "IDIOMS_ NO SPRING CHICKEN",
      "audiofile": "modules/696d03eb-3158-4855-9aa2-255379fac916.mp3>id_1_1_springchicken_us.mp3",
      "drillfile": "modules/7c21c873-178b-45a3-8114-9255e8d1e940.pdf>NO SPRING.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:38:41.460947'),
      "id": "b45402709e9b4e9997b873da9e77a786",
      "description": "IDIOMS_ NO SPRING CHICKEN",
      "audiofile": "modules/696d03eb-3158-4855-9aa2-255379fac916.mp3>id_1_1_springchicken_us.mp3",
      "drillfile": "modules/7c21c873-178b-45a3-8114-9255e8d1e940.pdf>NO SPRING.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:38:41.460947'),
      "id": "b45402709e9b4e9997b873da9e77a786",
      "description": "IDIOMS_ NO SPRING CHICKEN",
      "audiofile": "modules/696d03eb-3158-4855-9aa2-255379fac916.mp3>id_1_1_springchicken_us.mp3",
      "drillfile": "modules/7c21c873-178b-45a3-8114-9255e8d1e940.pdf>NO SPRING.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:38:41.460947'),
      "id": "b45402709e9b4e9997b873da9e77a786",
      "description": "IDIOMS_ NO SPRING CHICKEN",
      "audiofile": "modules/696d03eb-3158-4855-9aa2-255379fac916.mp3>id_1_1_springchicken_us.mp3",
      "drillfile": "modules/7c21c873-178b-45a3-8114-9255e8d1e940.pdf>NO SPRING.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:38:41.460947'),
      "id": "b45402709e9b4e9997b873da9e77a786",
      "description": "IDIOMS_ NO SPRING CHICKEN",
      "audiofile": "modules/696d03eb-3158-4855-9aa2-255379fac916.mp3>id_1_1_springchicken_us.mp3",
      "drillfile": "modules/7c21c873-178b-45a3-8114-9255e8d1e940.pdf>NO SPRING.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:39:00.308312'),
      "id": "830296d8a678422090f6969456689cb2",
      "description": "CONVERSATION DRILLS - BUSY SIGNAL",
      "audiofile": "modules/d8d96dcd-3b22-4675-893f-8a10e8bd0c49.mp3>busysignalcom.mp3",
      "drillfile": "modules/b31b9aae-1156-4efd-a1c6-81ec7d5e1dbc.pdf>I kept getting a busy signal.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:39:00.308312'),
      "id": "830296d8a678422090f6969456689cb2",
      "description": "CONVERSATION DRILLS - BUSY SIGNAL",
      "audiofile": "modules/d8d96dcd-3b22-4675-893f-8a10e8bd0c49.mp3>busysignalcom.mp3",
      "drillfile": "modules/b31b9aae-1156-4efd-a1c6-81ec7d5e1dbc.pdf>I kept getting a busy signal.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:39:00.308312'),
      "id": "830296d8a678422090f6969456689cb2",
      "description": "CONVERSATION DRILLS - BUSY SIGNAL",
      "audiofile": "modules/d8d96dcd-3b22-4675-893f-8a10e8bd0c49.mp3>busysignalcom.mp3",
      "drillfile": "modules/b31b9aae-1156-4efd-a1c6-81ec7d5e1dbc.pdf>I kept getting a busy signal.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:39:00.308312'),
      "id": "830296d8a678422090f6969456689cb2",
      "description": "CONVERSATION DRILLS - BUSY SIGNAL",
      "audiofile": "modules/d8d96dcd-3b22-4675-893f-8a10e8bd0c49.mp3>busysignalcom.mp3",
      "drillfile": "modules/b31b9aae-1156-4efd-a1c6-81ec7d5e1dbc.pdf>I kept getting a busy signal.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:39:00.308312'),
      "id": "830296d8a678422090f6969456689cb2",
      "description": "CONVERSATION DRILLS - BUSY SIGNAL",
      "audiofile": "modules/d8d96dcd-3b22-4675-893f-8a10e8bd0c49.mp3>busysignalcom.mp3",
      "drillfile": "modules/b31b9aae-1156-4efd-a1c6-81ec7d5e1dbc.pdf>I kept getting a busy signal.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 09:39:00.308312'),
      "id": "830296d8a678422090f6969456689cb2",
      "description": "CONVERSATION DRILLS - BUSY SIGNAL",
      "audiofile": "modules/d8d96dcd-3b22-4675-893f-8a10e8bd0c49.mp3>busysignalcom.mp3",
      "drillfile": "modules/b31b9aae-1156-4efd-a1c6-81ec7d5e1dbc.pdf>I kept getting a busy signal.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:39:20.253619'),
      "id": "2d0538d5fd7e4c2a9cec16ea47ba7d44",
      "description": "IDIOMS_ OVER THE HILL",
      "audiofile": "modules/5e6d1be7-bec7-4a83-9d51-cf604b4a598d.mp3>id_1_1_overthehill_us.mp3",
      "drillfile": "modules/0bd8ec1e-26e6-46d1-9529-6de588f5c977.pdf>HILL.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:39:20.253619'),
      "id": "2d0538d5fd7e4c2a9cec16ea47ba7d44",
      "description": "IDIOMS_ OVER THE HILL",
      "audiofile": "modules/5e6d1be7-bec7-4a83-9d51-cf604b4a598d.mp3>id_1_1_overthehill_us.mp3",
      "drillfile": "modules/0bd8ec1e-26e6-46d1-9529-6de588f5c977.pdf>HILL.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:39:20.253619'),
      "id": "2d0538d5fd7e4c2a9cec16ea47ba7d44",
      "description": "IDIOMS_ OVER THE HILL",
      "audiofile": "modules/5e6d1be7-bec7-4a83-9d51-cf604b4a598d.mp3>id_1_1_overthehill_us.mp3",
      "drillfile": "modules/0bd8ec1e-26e6-46d1-9529-6de588f5c977.pdf>HILL.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:39:20.253619'),
      "id": "2d0538d5fd7e4c2a9cec16ea47ba7d44",
      "description": "IDIOMS_ OVER THE HILL",
      "audiofile": "modules/5e6d1be7-bec7-4a83-9d51-cf604b4a598d.mp3>id_1_1_overthehill_us.mp3",
      "drillfile": "modules/0bd8ec1e-26e6-46d1-9529-6de588f5c977.pdf>HILL.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:39:20.253619'),
      "id": "2d0538d5fd7e4c2a9cec16ea47ba7d44",
      "description": "IDIOMS_ OVER THE HILL",
      "audiofile": "modules/5e6d1be7-bec7-4a83-9d51-cf604b4a598d.mp3>id_1_1_overthehill_us.mp3",
      "drillfile": "modules/0bd8ec1e-26e6-46d1-9529-6de588f5c977.pdf>HILL.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:39:20.253619'),
      "id": "2d0538d5fd7e4c2a9cec16ea47ba7d44",
      "description": "IDIOMS_ OVER THE HILL",
      "audiofile": "modules/5e6d1be7-bec7-4a83-9d51-cf604b4a598d.mp3>id_1_1_overthehill_us.mp3",
      "drillfile": "modules/0bd8ec1e-26e6-46d1-9529-6de588f5c977.pdf>HILL.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:40:14.429729'),
      "id": "086ca2e16f9f47f7bdf83e68577ff13c",
      "description": "IDIOMS_ RIPE OLD AGE",
      "audiofile": "modules/4b85d572-19ab-4ba4-b85e-1b5fe80d8f96.mp3>id_1_2_ripeoldage_us.mp3",
      "drillfile": "modules/53e47468-1102-46a2-8d8e-24a4e841c62f.pdf>RIPE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:40:14.429729'),
      "id": "086ca2e16f9f47f7bdf83e68577ff13c",
      "description": "IDIOMS_ RIPE OLD AGE",
      "audiofile": "modules/4b85d572-19ab-4ba4-b85e-1b5fe80d8f96.mp3>id_1_2_ripeoldage_us.mp3",
      "drillfile": "modules/53e47468-1102-46a2-8d8e-24a4e841c62f.pdf>RIPE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:40:14.429729'),
      "id": "086ca2e16f9f47f7bdf83e68577ff13c",
      "description": "IDIOMS_ RIPE OLD AGE",
      "audiofile": "modules/4b85d572-19ab-4ba4-b85e-1b5fe80d8f96.mp3>id_1_2_ripeoldage_us.mp3",
      "drillfile": "modules/53e47468-1102-46a2-8d8e-24a4e841c62f.pdf>RIPE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:40:14.429729'),
      "id": "086ca2e16f9f47f7bdf83e68577ff13c",
      "description": "IDIOMS_ RIPE OLD AGE",
      "audiofile": "modules/4b85d572-19ab-4ba4-b85e-1b5fe80d8f96.mp3>id_1_2_ripeoldage_us.mp3",
      "drillfile": "modules/53e47468-1102-46a2-8d8e-24a4e841c62f.pdf>RIPE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:40:14.429729'),
      "id": "086ca2e16f9f47f7bdf83e68577ff13c",
      "description": "IDIOMS_ RIPE OLD AGE",
      "audiofile": "modules/4b85d572-19ab-4ba4-b85e-1b5fe80d8f96.mp3>id_1_2_ripeoldage_us.mp3",
      "drillfile": "modules/53e47468-1102-46a2-8d8e-24a4e841c62f.pdf>RIPE.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:40:14.429729'),
      "id": "086ca2e16f9f47f7bdf83e68577ff13c",
      "description": "IDIOMS_ RIPE OLD AGE",
      "audiofile": "modules/4b85d572-19ab-4ba4-b85e-1b5fe80d8f96.mp3>id_1_2_ripeoldage_us.mp3",
      "drillfile": "modules/53e47468-1102-46a2-8d8e-24a4e841c62f.pdf>RIPE.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:40:43.442173'),
      "id": "3e37ae09f2ee48089e12732d27078858",
      "description": "IPA PHONETICS 13",
      "audiofile": "modules/02e68078-5a73-45ec-957e-47f62ac51451.mp3>13 fiveeye.mp3",
      "drillfile": "modules/098d2bb1-88b4-4b01-941e-b9ec37e909fd.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:40:43.442173'),
      "id": "3e37ae09f2ee48089e12732d27078858",
      "description": "IPA PHONETICS 13",
      "audiofile": "modules/02e68078-5a73-45ec-957e-47f62ac51451.mp3>13 fiveeye.mp3",
      "drillfile": "modules/098d2bb1-88b4-4b01-941e-b9ec37e909fd.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:40:43.442173'),
      "id": "3e37ae09f2ee48089e12732d27078858",
      "description": "IPA PHONETICS 13",
      "audiofile": "modules/02e68078-5a73-45ec-957e-47f62ac51451.mp3>13 fiveeye.mp3",
      "drillfile": "modules/098d2bb1-88b4-4b01-941e-b9ec37e909fd.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:40:43.442173'),
      "id": "3e37ae09f2ee48089e12732d27078858",
      "description": "IPA PHONETICS 13",
      "audiofile": "modules/02e68078-5a73-45ec-957e-47f62ac51451.mp3>13 fiveeye.mp3",
      "drillfile": "modules/098d2bb1-88b4-4b01-941e-b9ec37e909fd.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:40:43.442173'),
      "id": "3e37ae09f2ee48089e12732d27078858",
      "description": "IPA PHONETICS 13",
      "audiofile": "modules/02e68078-5a73-45ec-957e-47f62ac51451.mp3>13 fiveeye.mp3",
      "drillfile": "modules/098d2bb1-88b4-4b01-941e-b9ec37e909fd.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:40:43.442173'),
      "id": "3e37ae09f2ee48089e12732d27078858",
      "description": "IPA PHONETICS 13",
      "audiofile": "modules/02e68078-5a73-45ec-957e-47f62ac51451.mp3>13 fiveeye.mp3",
      "drillfile": "modules/098d2bb1-88b4-4b01-941e-b9ec37e909fd.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:40:59.544632'),
      "id": "e836d17c9e7e425eb9176224a29e8f3a",
      "description": "IDIOMS_ TENDER AGE",
      "audiofile": "modules/957ca256-eb41-4cdf-9f6c-04e956146db2.mp3>id_1_2_tenderage_us.mp3",
      "drillfile": "modules/c9c476be-c8e8-4879-b9fc-ec5ee35ffc60.pdf>TENDER.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:40:59.544632'),
      "id": "e836d17c9e7e425eb9176224a29e8f3a",
      "description": "IDIOMS_ TENDER AGE",
      "audiofile": "modules/957ca256-eb41-4cdf-9f6c-04e956146db2.mp3>id_1_2_tenderage_us.mp3",
      "drillfile": "modules/c9c476be-c8e8-4879-b9fc-ec5ee35ffc60.pdf>TENDER.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:40:59.544632'),
      "id": "e836d17c9e7e425eb9176224a29e8f3a",
      "description": "IDIOMS_ TENDER AGE",
      "audiofile": "modules/957ca256-eb41-4cdf-9f6c-04e956146db2.mp3>id_1_2_tenderage_us.mp3",
      "drillfile": "modules/c9c476be-c8e8-4879-b9fc-ec5ee35ffc60.pdf>TENDER.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:40:59.544632'),
      "id": "e836d17c9e7e425eb9176224a29e8f3a",
      "description": "IDIOMS_ TENDER AGE",
      "audiofile": "modules/957ca256-eb41-4cdf-9f6c-04e956146db2.mp3>id_1_2_tenderage_us.mp3",
      "drillfile": "modules/c9c476be-c8e8-4879-b9fc-ec5ee35ffc60.pdf>TENDER.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:40:59.544632'),
      "id": "e836d17c9e7e425eb9176224a29e8f3a",
      "description": "IDIOMS_ TENDER AGE",
      "audiofile": "modules/957ca256-eb41-4cdf-9f6c-04e956146db2.mp3>id_1_2_tenderage_us.mp3",
      "drillfile": "modules/c9c476be-c8e8-4879-b9fc-ec5ee35ffc60.pdf>TENDER.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:40:59.544632'),
      "id": "e836d17c9e7e425eb9176224a29e8f3a",
      "description": "IDIOMS_ TENDER AGE",
      "audiofile": "modules/957ca256-eb41-4cdf-9f6c-04e956146db2.mp3>id_1_2_tenderage_us.mp3",
      "drillfile": "modules/c9c476be-c8e8-4879-b9fc-ec5ee35ffc60.pdf>TENDER.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:41:41.146056'),
      "id": "80accae0b5824b23934daf84efd9042a",
      "description": "IDIOMS_ TWILIGHT YEARS",
      "audiofile": "modules/babf1334-547e-4e21-aed3-1fe6bd27bbe1.mp3>id_1_1_twilightyears_us.mp3",
      "drillfile": "modules/b7e970e6-61cf-4cfe-8b51-d33a231fc673.pdf>TWILIGHT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:41:41.146056'),
      "id": "80accae0b5824b23934daf84efd9042a",
      "description": "IDIOMS_ TWILIGHT YEARS",
      "audiofile": "modules/babf1334-547e-4e21-aed3-1fe6bd27bbe1.mp3>id_1_1_twilightyears_us.mp3",
      "drillfile": "modules/b7e970e6-61cf-4cfe-8b51-d33a231fc673.pdf>TWILIGHT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:41:41.146056'),
      "id": "80accae0b5824b23934daf84efd9042a",
      "description": "IDIOMS_ TWILIGHT YEARS",
      "audiofile": "modules/babf1334-547e-4e21-aed3-1fe6bd27bbe1.mp3>id_1_1_twilightyears_us.mp3",
      "drillfile": "modules/b7e970e6-61cf-4cfe-8b51-d33a231fc673.pdf>TWILIGHT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:41:41.146056'),
      "id": "80accae0b5824b23934daf84efd9042a",
      "description": "IDIOMS_ TWILIGHT YEARS",
      "audiofile": "modules/babf1334-547e-4e21-aed3-1fe6bd27bbe1.mp3>id_1_1_twilightyears_us.mp3",
      "drillfile": "modules/b7e970e6-61cf-4cfe-8b51-d33a231fc673.pdf>TWILIGHT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:41:41.146056'),
      "id": "80accae0b5824b23934daf84efd9042a",
      "description": "IDIOMS_ TWILIGHT YEARS",
      "audiofile": "modules/babf1334-547e-4e21-aed3-1fe6bd27bbe1.mp3>id_1_1_twilightyears_us.mp3",
      "drillfile": "modules/b7e970e6-61cf-4cfe-8b51-d33a231fc673.pdf>TWILIGHT.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:41:41.146056'),
      "id": "80accae0b5824b23934daf84efd9042a",
      "description": "IDIOMS_ TWILIGHT YEARS",
      "audiofile": "modules/babf1334-547e-4e21-aed3-1fe6bd27bbe1.mp3>id_1_1_twilightyears_us.mp3",
      "drillfile": "modules/b7e970e6-61cf-4cfe-8b51-d33a231fc673.pdf>TWILIGHT.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:41:48.077448'),
      "id": "b5626cb9440c47c1afe26a11d68cbd05",
      "description": "IPA PHONETICS 14",
      "audiofile": "modules/e913cef2-b9ea-47f7-bbba-84b7b991c165.mp3>14 nowout.mp3",
      "drillfile": "modules/85abe9e6-d1f3-4edb-86f8-f9998245c149.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:41:48.077448'),
      "id": "b5626cb9440c47c1afe26a11d68cbd05",
      "description": "IPA PHONETICS 14",
      "audiofile": "modules/e913cef2-b9ea-47f7-bbba-84b7b991c165.mp3>14 nowout.mp3",
      "drillfile": "modules/85abe9e6-d1f3-4edb-86f8-f9998245c149.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:41:48.077448'),
      "id": "b5626cb9440c47c1afe26a11d68cbd05",
      "description": "IPA PHONETICS 14",
      "audiofile": "modules/e913cef2-b9ea-47f7-bbba-84b7b991c165.mp3>14 nowout.mp3",
      "drillfile": "modules/85abe9e6-d1f3-4edb-86f8-f9998245c149.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:41:48.077448'),
      "id": "b5626cb9440c47c1afe26a11d68cbd05",
      "description": "IPA PHONETICS 14",
      "audiofile": "modules/e913cef2-b9ea-47f7-bbba-84b7b991c165.mp3>14 nowout.mp3",
      "drillfile": "modules/85abe9e6-d1f3-4edb-86f8-f9998245c149.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:41:48.077448'),
      "id": "b5626cb9440c47c1afe26a11d68cbd05",
      "description": "IPA PHONETICS 14",
      "audiofile": "modules/e913cef2-b9ea-47f7-bbba-84b7b991c165.mp3>14 nowout.mp3",
      "drillfile": "modules/85abe9e6-d1f3-4edb-86f8-f9998245c149.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:41:48.077448'),
      "id": "b5626cb9440c47c1afe26a11d68cbd05",
      "description": "IPA PHONETICS 14",
      "audiofile": "modules/e913cef2-b9ea-47f7-bbba-84b7b991c165.mp3>14 nowout.mp3",
      "drillfile": "modules/85abe9e6-d1f3-4edb-86f8-f9998245c149.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:42:15.256717'),
      "id": "de4dd564ec054354a77a6e84ec4cbddc",
      "description": "IPA PHONETICS 15",
      "audiofile": "modules/ddcaef94-1c81-447e-b0aa-0327b101e728.mp3>15 sayeight.mp3",
      "drillfile": "modules/3022ac49-6eb1-41e9-87b8-a6417baa96d0.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:42:15.256717'),
      "id": "de4dd564ec054354a77a6e84ec4cbddc",
      "description": "IPA PHONETICS 15",
      "audiofile": "modules/ddcaef94-1c81-447e-b0aa-0327b101e728.mp3>15 sayeight.mp3",
      "drillfile": "modules/3022ac49-6eb1-41e9-87b8-a6417baa96d0.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:42:15.256717'),
      "id": "de4dd564ec054354a77a6e84ec4cbddc",
      "description": "IPA PHONETICS 15",
      "audiofile": "modules/ddcaef94-1c81-447e-b0aa-0327b101e728.mp3>15 sayeight.mp3",
      "drillfile": "modules/3022ac49-6eb1-41e9-87b8-a6417baa96d0.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:42:15.256717'),
      "id": "de4dd564ec054354a77a6e84ec4cbddc",
      "description": "IPA PHONETICS 15",
      "audiofile": "modules/ddcaef94-1c81-447e-b0aa-0327b101e728.mp3>15 sayeight.mp3",
      "drillfile": "modules/3022ac49-6eb1-41e9-87b8-a6417baa96d0.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:42:15.256717'),
      "id": "de4dd564ec054354a77a6e84ec4cbddc",
      "description": "IPA PHONETICS 15",
      "audiofile": "modules/ddcaef94-1c81-447e-b0aa-0327b101e728.mp3>15 sayeight.mp3",
      "drillfile": "modules/3022ac49-6eb1-41e9-87b8-a6417baa96d0.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:42:15.256717'),
      "id": "de4dd564ec054354a77a6e84ec4cbddc",
      "description": "IPA PHONETICS 15",
      "audiofile": "modules/ddcaef94-1c81-447e-b0aa-0327b101e728.mp3>15 sayeight.mp3",
      "drillfile": "modules/3022ac49-6eb1-41e9-87b8-a6417baa96d0.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:42:21.737057'),
      "id": "3297997d5e874c818ea0857c8853281b",
      "description": "IDIOMS_ WET BEHIND EARS",
      "audiofile": "modules/9d4d8f46-496b-47ad-adc3-59978a9347f3.mp3>id_1_1_wetbehindears_us.mp3",
      "drillfile": "modules/f0a4b970-ef11-409c-900f-3aa007d5bb42.pdf>wet.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:42:21.737057'),
      "id": "3297997d5e874c818ea0857c8853281b",
      "description": "IDIOMS_ WET BEHIND EARS",
      "audiofile": "modules/9d4d8f46-496b-47ad-adc3-59978a9347f3.mp3>id_1_1_wetbehindears_us.mp3",
      "drillfile": "modules/f0a4b970-ef11-409c-900f-3aa007d5bb42.pdf>wet.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:42:21.737057'),
      "id": "3297997d5e874c818ea0857c8853281b",
      "description": "IDIOMS_ WET BEHIND EARS",
      "audiofile": "modules/9d4d8f46-496b-47ad-adc3-59978a9347f3.mp3>id_1_1_wetbehindears_us.mp3",
      "drillfile": "modules/f0a4b970-ef11-409c-900f-3aa007d5bb42.pdf>wet.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:42:21.737057'),
      "id": "3297997d5e874c818ea0857c8853281b",
      "description": "IDIOMS_ WET BEHIND EARS",
      "audiofile": "modules/9d4d8f46-496b-47ad-adc3-59978a9347f3.mp3>id_1_1_wetbehindears_us.mp3",
      "drillfile": "modules/f0a4b970-ef11-409c-900f-3aa007d5bb42.pdf>wet.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:42:21.737057'),
      "id": "3297997d5e874c818ea0857c8853281b",
      "description": "IDIOMS_ WET BEHIND EARS",
      "audiofile": "modules/9d4d8f46-496b-47ad-adc3-59978a9347f3.mp3>id_1_1_wetbehindears_us.mp3",
      "drillfile": "modules/f0a4b970-ef11-409c-900f-3aa007d5bb42.pdf>wet.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:42:21.737057'),
      "id": "3297997d5e874c818ea0857c8853281b",
      "description": "IDIOMS_ WET BEHIND EARS",
      "audiofile": "modules/9d4d8f46-496b-47ad-adc3-59978a9347f3.mp3>id_1_1_wetbehindears_us.mp3",
      "drillfile": "modules/f0a4b970-ef11-409c-900f-3aa007d5bb42.pdf>wet.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:43:01.839769'),
      "id": "b26dfdce87ea491ea1c00326db789073",
      "description": "IDIOMS_ YOUNG AT HEART",
      "audiofile": "modules/9d1066f1-d0eb-448e-a3cd-34c9f3bf54b2.mp3>id_1_1_youngheart_us.mp3",
      "drillfile": "modules/6f3cdb9c-d3ac-49db-81f0-1353071b6c29.pdf>YOUNG.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:43:01.839769'),
      "id": "b26dfdce87ea491ea1c00326db789073",
      "description": "IDIOMS_ YOUNG AT HEART",
      "audiofile": "modules/9d1066f1-d0eb-448e-a3cd-34c9f3bf54b2.mp3>id_1_1_youngheart_us.mp3",
      "drillfile": "modules/6f3cdb9c-d3ac-49db-81f0-1353071b6c29.pdf>YOUNG.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:43:01.839769'),
      "id": "b26dfdce87ea491ea1c00326db789073",
      "description": "IDIOMS_ YOUNG AT HEART",
      "audiofile": "modules/9d1066f1-d0eb-448e-a3cd-34c9f3bf54b2.mp3>id_1_1_youngheart_us.mp3",
      "drillfile": "modules/6f3cdb9c-d3ac-49db-81f0-1353071b6c29.pdf>YOUNG.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:43:01.839769'),
      "id": "b26dfdce87ea491ea1c00326db789073",
      "description": "IDIOMS_ YOUNG AT HEART",
      "audiofile": "modules/9d1066f1-d0eb-448e-a3cd-34c9f3bf54b2.mp3>id_1_1_youngheart_us.mp3",
      "drillfile": "modules/6f3cdb9c-d3ac-49db-81f0-1353071b6c29.pdf>YOUNG.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:43:01.839769'),
      "id": "b26dfdce87ea491ea1c00326db789073",
      "description": "IDIOMS_ YOUNG AT HEART",
      "audiofile": "modules/9d1066f1-d0eb-448e-a3cd-34c9f3bf54b2.mp3>id_1_1_youngheart_us.mp3",
      "drillfile": "modules/6f3cdb9c-d3ac-49db-81f0-1353071b6c29.pdf>YOUNG.pdf"
    },
    {
      "practiceid": "e9303a05db8c4aefb742e365afbc6cdb",
      "timestamp": new Date('2024-03-14 09:43:01.839769'),
      "id": "b26dfdce87ea491ea1c00326db789073",
      "description": "IDIOMS_ YOUNG AT HEART",
      "audiofile": "modules/9d1066f1-d0eb-448e-a3cd-34c9f3bf54b2.mp3>id_1_1_youngheart_us.mp3",
      "drillfile": "modules/6f3cdb9c-d3ac-49db-81f0-1353071b6c29.pdf>YOUNG.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:44:58.915635'),
      "id": "0c5aa111fb3c4aa2b3cf41be3f426574",
      "description": "IPA PHONETICS 16",
      "audiofile": "modules/2aa30778-cbdc-4c34-9a77-dc814d068a6f.mp3>16 gohome.mp3",
      "drillfile": "modules/4300f74b-2772-4bef-87ce-7714762e04f8.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:44:58.915635'),
      "id": "0c5aa111fb3c4aa2b3cf41be3f426574",
      "description": "IPA PHONETICS 16",
      "audiofile": "modules/2aa30778-cbdc-4c34-9a77-dc814d068a6f.mp3>16 gohome.mp3",
      "drillfile": "modules/4300f74b-2772-4bef-87ce-7714762e04f8.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:44:58.915635'),
      "id": "0c5aa111fb3c4aa2b3cf41be3f426574",
      "description": "IPA PHONETICS 16",
      "audiofile": "modules/2aa30778-cbdc-4c34-9a77-dc814d068a6f.mp3>16 gohome.mp3",
      "drillfile": "modules/4300f74b-2772-4bef-87ce-7714762e04f8.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:44:58.915635'),
      "id": "0c5aa111fb3c4aa2b3cf41be3f426574",
      "description": "IPA PHONETICS 16",
      "audiofile": "modules/2aa30778-cbdc-4c34-9a77-dc814d068a6f.mp3>16 gohome.mp3",
      "drillfile": "modules/4300f74b-2772-4bef-87ce-7714762e04f8.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:44:58.915635'),
      "id": "0c5aa111fb3c4aa2b3cf41be3f426574",
      "description": "IPA PHONETICS 16",
      "audiofile": "modules/2aa30778-cbdc-4c34-9a77-dc814d068a6f.mp3>16 gohome.mp3",
      "drillfile": "modules/4300f74b-2772-4bef-87ce-7714762e04f8.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:44:58.915635'),
      "id": "0c5aa111fb3c4aa2b3cf41be3f426574",
      "description": "IPA PHONETICS 16",
      "audiofile": "modules/2aa30778-cbdc-4c34-9a77-dc814d068a6f.mp3>16 gohome.mp3",
      "drillfile": "modules/4300f74b-2772-4bef-87ce-7714762e04f8.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:45:28.055614'),
      "id": "9ed9fb01c8ee4e68a68e5be0dc6a8732",
      "description": "IPA PHONETICS 17",
      "audiofile": "modules/de5b19c6-e3f4-4362-a919-b338210057c0.mp3>17 boyjoin.mp3",
      "drillfile": "modules/f847ea00-2227-4b9d-9b1e-fe298fd1716b.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:45:28.055614'),
      "id": "9ed9fb01c8ee4e68a68e5be0dc6a8732",
      "description": "IPA PHONETICS 17",
      "audiofile": "modules/de5b19c6-e3f4-4362-a919-b338210057c0.mp3>17 boyjoin.mp3",
      "drillfile": "modules/f847ea00-2227-4b9d-9b1e-fe298fd1716b.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:45:28.055614'),
      "id": "9ed9fb01c8ee4e68a68e5be0dc6a8732",
      "description": "IPA PHONETICS 17",
      "audiofile": "modules/de5b19c6-e3f4-4362-a919-b338210057c0.mp3>17 boyjoin.mp3",
      "drillfile": "modules/f847ea00-2227-4b9d-9b1e-fe298fd1716b.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:45:28.055614'),
      "id": "9ed9fb01c8ee4e68a68e5be0dc6a8732",
      "description": "IPA PHONETICS 17",
      "audiofile": "modules/de5b19c6-e3f4-4362-a919-b338210057c0.mp3>17 boyjoin.mp3",
      "drillfile": "modules/f847ea00-2227-4b9d-9b1e-fe298fd1716b.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:45:28.055614'),
      "id": "9ed9fb01c8ee4e68a68e5be0dc6a8732",
      "description": "IPA PHONETICS 17",
      "audiofile": "modules/de5b19c6-e3f4-4362-a919-b338210057c0.mp3>17 boyjoin.mp3",
      "drillfile": "modules/f847ea00-2227-4b9d-9b1e-fe298fd1716b.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:45:28.055614'),
      "id": "9ed9fb01c8ee4e68a68e5be0dc6a8732",
      "description": "IPA PHONETICS 17",
      "audiofile": "modules/de5b19c6-e3f4-4362-a919-b338210057c0.mp3>17 boyjoin.mp3",
      "drillfile": "modules/f847ea00-2227-4b9d-9b1e-fe298fd1716b.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:45:57.825849'),
      "id": "3dc6d14c20ff4f87a5eda7f19e3312f0",
      "description": "IPA PHONETICS 18",
      "audiofile": "modules/ec9b4f54-21f7-41a7-987e-057228b7cb4c.mp3>18 whereair-am.mp3",
      "drillfile": "modules/195a5035-34a4-4b63-ba27-e4e0511273c5.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:45:57.825849'),
      "id": "3dc6d14c20ff4f87a5eda7f19e3312f0",
      "description": "IPA PHONETICS 18",
      "audiofile": "modules/ec9b4f54-21f7-41a7-987e-057228b7cb4c.mp3>18 whereair-am.mp3",
      "drillfile": "modules/195a5035-34a4-4b63-ba27-e4e0511273c5.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:45:57.825849'),
      "id": "3dc6d14c20ff4f87a5eda7f19e3312f0",
      "description": "IPA PHONETICS 18",
      "audiofile": "modules/ec9b4f54-21f7-41a7-987e-057228b7cb4c.mp3>18 whereair-am.mp3",
      "drillfile": "modules/195a5035-34a4-4b63-ba27-e4e0511273c5.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:45:57.825849'),
      "id": "3dc6d14c20ff4f87a5eda7f19e3312f0",
      "description": "IPA PHONETICS 18",
      "audiofile": "modules/ec9b4f54-21f7-41a7-987e-057228b7cb4c.mp3>18 whereair-am.mp3",
      "drillfile": "modules/195a5035-34a4-4b63-ba27-e4e0511273c5.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:45:57.825849'),
      "id": "3dc6d14c20ff4f87a5eda7f19e3312f0",
      "description": "IPA PHONETICS 18",
      "audiofile": "modules/ec9b4f54-21f7-41a7-987e-057228b7cb4c.mp3>18 whereair-am.mp3",
      "drillfile": "modules/195a5035-34a4-4b63-ba27-e4e0511273c5.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:45:57.825849'),
      "id": "3dc6d14c20ff4f87a5eda7f19e3312f0",
      "description": "IPA PHONETICS 18",
      "audiofile": "modules/ec9b4f54-21f7-41a7-987e-057228b7cb4c.mp3>18 whereair-am.mp3",
      "drillfile": "modules/195a5035-34a4-4b63-ba27-e4e0511273c5.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:46:22.776071'),
      "id": "24fb95ec4d3a4e13850e21f3a40daeb1",
      "description": "IPA PHONETICS 19",
      "audiofile": "modules/13e4e665-54f4-4baf-bf7c-aa8a66ef0adc.mp3>19 nearhere-am.mp3",
      "drillfile": "modules/c79d3249-6b1d-46aa-9b7d-b1704e2f198b.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:46:22.776071'),
      "id": "24fb95ec4d3a4e13850e21f3a40daeb1",
      "description": "IPA PHONETICS 19",
      "audiofile": "modules/13e4e665-54f4-4baf-bf7c-aa8a66ef0adc.mp3>19 nearhere-am.mp3",
      "drillfile": "modules/c79d3249-6b1d-46aa-9b7d-b1704e2f198b.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:46:22.776071'),
      "id": "24fb95ec4d3a4e13850e21f3a40daeb1",
      "description": "IPA PHONETICS 19",
      "audiofile": "modules/13e4e665-54f4-4baf-bf7c-aa8a66ef0adc.mp3>19 nearhere-am.mp3",
      "drillfile": "modules/c79d3249-6b1d-46aa-9b7d-b1704e2f198b.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:46:22.776071'),
      "id": "24fb95ec4d3a4e13850e21f3a40daeb1",
      "description": "IPA PHONETICS 19",
      "audiofile": "modules/13e4e665-54f4-4baf-bf7c-aa8a66ef0adc.mp3>19 nearhere-am.mp3",
      "drillfile": "modules/c79d3249-6b1d-46aa-9b7d-b1704e2f198b.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:46:22.776071'),
      "id": "24fb95ec4d3a4e13850e21f3a40daeb1",
      "description": "IPA PHONETICS 19",
      "audiofile": "modules/13e4e665-54f4-4baf-bf7c-aa8a66ef0adc.mp3>19 nearhere-am.mp3",
      "drillfile": "modules/c79d3249-6b1d-46aa-9b7d-b1704e2f198b.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:46:22.776071'),
      "id": "24fb95ec4d3a4e13850e21f3a40daeb1",
      "description": "IPA PHONETICS 19",
      "audiofile": "modules/13e4e665-54f4-4baf-bf7c-aa8a66ef0adc.mp3>19 nearhere-am.mp3",
      "drillfile": "modules/c79d3249-6b1d-46aa-9b7d-b1704e2f198b.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:46:45.214911'),
      "id": "38aadc2603fa44aa82189c9817c6f9d1",
      "description": "IPA PHONETICS 20",
      "audiofile": "modules/570d5032-d337-47ec-a39d-e67829105db2.mp3>20 puretourist-am.mp3",
      "drillfile": "modules/3acc91ad-685f-4a29-a07f-1c0dd551f788.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:46:45.214911'),
      "id": "38aadc2603fa44aa82189c9817c6f9d1",
      "description": "IPA PHONETICS 20",
      "audiofile": "modules/570d5032-d337-47ec-a39d-e67829105db2.mp3>20 puretourist-am.mp3",
      "drillfile": "modules/3acc91ad-685f-4a29-a07f-1c0dd551f788.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:46:45.214911'),
      "id": "38aadc2603fa44aa82189c9817c6f9d1",
      "description": "IPA PHONETICS 20",
      "audiofile": "modules/570d5032-d337-47ec-a39d-e67829105db2.mp3>20 puretourist-am.mp3",
      "drillfile": "modules/3acc91ad-685f-4a29-a07f-1c0dd551f788.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:46:45.214911'),
      "id": "38aadc2603fa44aa82189c9817c6f9d1",
      "description": "IPA PHONETICS 20",
      "audiofile": "modules/570d5032-d337-47ec-a39d-e67829105db2.mp3>20 puretourist-am.mp3",
      "drillfile": "modules/3acc91ad-685f-4a29-a07f-1c0dd551f788.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:46:45.214911'),
      "id": "38aadc2603fa44aa82189c9817c6f9d1",
      "description": "IPA PHONETICS 20",
      "audiofile": "modules/570d5032-d337-47ec-a39d-e67829105db2.mp3>20 puretourist-am.mp3",
      "drillfile": "modules/3acc91ad-685f-4a29-a07f-1c0dd551f788.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 09:46:45.214911'),
      "id": "38aadc2603fa44aa82189c9817c6f9d1",
      "description": "IPA PHONETICS 20",
      "audiofile": "modules/570d5032-d337-47ec-a39d-e67829105db2.mp3>20 puretourist-am.mp3",
      "drillfile": "modules/3acc91ad-685f-4a29-a07f-1c0dd551f788.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:03:32.046178'),
      "id": "f66360f98aa846499358d54f98c61125",
      "description": "CONVERSATION: CHANCE",
      "audiofile": "modules/17cca5eb-045d-4815-927d-9571c7d3e746.mp3>chancesslimcomplete.mp3",
      "drillfile": "modules/ccd519db-3605-4d79-b8b5-8df8d5380cde.pdf>Chances are slim.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:03:32.046178'),
      "id": "f66360f98aa846499358d54f98c61125",
      "description": "CONVERSATION: CHANCE",
      "audiofile": "modules/17cca5eb-045d-4815-927d-9571c7d3e746.mp3>chancesslimcomplete.mp3",
      "drillfile": "modules/ccd519db-3605-4d79-b8b5-8df8d5380cde.pdf>Chances are slim.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:03:32.046178'),
      "id": "f66360f98aa846499358d54f98c61125",
      "description": "CONVERSATION: CHANCE",
      "audiofile": "modules/17cca5eb-045d-4815-927d-9571c7d3e746.mp3>chancesslimcomplete.mp3",
      "drillfile": "modules/ccd519db-3605-4d79-b8b5-8df8d5380cde.pdf>Chances are slim.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:03:32.046178'),
      "id": "f66360f98aa846499358d54f98c61125",
      "description": "CONVERSATION: CHANCE",
      "audiofile": "modules/17cca5eb-045d-4815-927d-9571c7d3e746.mp3>chancesslimcomplete.mp3",
      "drillfile": "modules/ccd519db-3605-4d79-b8b5-8df8d5380cde.pdf>Chances are slim.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:03:32.046178'),
      "id": "f66360f98aa846499358d54f98c61125",
      "description": "CONVERSATION: CHANCE",
      "audiofile": "modules/17cca5eb-045d-4815-927d-9571c7d3e746.mp3>chancesslimcomplete.mp3",
      "drillfile": "modules/ccd519db-3605-4d79-b8b5-8df8d5380cde.pdf>Chances are slim.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:03:32.046178'),
      "id": "f66360f98aa846499358d54f98c61125",
      "description": "CONVERSATION: CHANCE",
      "audiofile": "modules/17cca5eb-045d-4815-927d-9571c7d3e746.mp3>chancesslimcomplete.mp3",
      "drillfile": "modules/ccd519db-3605-4d79-b8b5-8df8d5380cde.pdf>Chances are slim.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:03:57.748927'),
      "id": "b59528ad71ab4c878b19775ed194ec79",
      "description": "CONVERSATION: COMMUNICATION",
      "audiofile": "modules/d4e3a9fe-211c-453f-8414-c877e0696817.mp3>getthrucom.mp3",
      "drillfile": "modules/c2e3d98f-14f0-46f7-8925-4b294a3436f6.pdf>Communication.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:03:57.748927'),
      "id": "b59528ad71ab4c878b19775ed194ec79",
      "description": "CONVERSATION: COMMUNICATION",
      "audiofile": "modules/d4e3a9fe-211c-453f-8414-c877e0696817.mp3>getthrucom.mp3",
      "drillfile": "modules/c2e3d98f-14f0-46f7-8925-4b294a3436f6.pdf>Communication.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:03:57.748927'),
      "id": "b59528ad71ab4c878b19775ed194ec79",
      "description": "CONVERSATION: COMMUNICATION",
      "audiofile": "modules/d4e3a9fe-211c-453f-8414-c877e0696817.mp3>getthrucom.mp3",
      "drillfile": "modules/c2e3d98f-14f0-46f7-8925-4b294a3436f6.pdf>Communication.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:03:57.748927'),
      "id": "b59528ad71ab4c878b19775ed194ec79",
      "description": "CONVERSATION: COMMUNICATION",
      "audiofile": "modules/d4e3a9fe-211c-453f-8414-c877e0696817.mp3>getthrucom.mp3",
      "drillfile": "modules/c2e3d98f-14f0-46f7-8925-4b294a3436f6.pdf>Communication.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:03:57.748927'),
      "id": "b59528ad71ab4c878b19775ed194ec79",
      "description": "CONVERSATION: COMMUNICATION",
      "audiofile": "modules/d4e3a9fe-211c-453f-8414-c877e0696817.mp3>getthrucom.mp3",
      "drillfile": "modules/c2e3d98f-14f0-46f7-8925-4b294a3436f6.pdf>Communication.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:03:57.748927'),
      "id": "b59528ad71ab4c878b19775ed194ec79",
      "description": "CONVERSATION: COMMUNICATION",
      "audiofile": "modules/d4e3a9fe-211c-453f-8414-c877e0696817.mp3>getthrucom.mp3",
      "drillfile": "modules/c2e3d98f-14f0-46f7-8925-4b294a3436f6.pdf>Communication.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:04:46.2639'),
      "id": "6cf89e06ec3144c59aac528593b8f193",
      "description": "CONVERSATION: DON'T BEAT ABOUT BUSH",
      "audiofile": "modules/84163f4e-2e94-4a17-8570-c65ab68d3573.mp3>aboutbushcom.mp3",
      "drillfile": "modules/188e5e50-2154-4421-bb4e-0c8404b0d6cd.pdf>Don_t beat about the bush - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:04:46.2639'),
      "id": "6cf89e06ec3144c59aac528593b8f193",
      "description": "CONVERSATION: DON'T BEAT ABOUT BUSH",
      "audiofile": "modules/84163f4e-2e94-4a17-8570-c65ab68d3573.mp3>aboutbushcom.mp3",
      "drillfile": "modules/188e5e50-2154-4421-bb4e-0c8404b0d6cd.pdf>Don_t beat about the bush - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:04:46.2639'),
      "id": "6cf89e06ec3144c59aac528593b8f193",
      "description": "CONVERSATION: DON'T BEAT ABOUT BUSH",
      "audiofile": "modules/84163f4e-2e94-4a17-8570-c65ab68d3573.mp3>aboutbushcom.mp3",
      "drillfile": "modules/188e5e50-2154-4421-bb4e-0c8404b0d6cd.pdf>Don_t beat about the bush - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:04:46.2639'),
      "id": "6cf89e06ec3144c59aac528593b8f193",
      "description": "CONVERSATION: DON'T BEAT ABOUT BUSH",
      "audiofile": "modules/84163f4e-2e94-4a17-8570-c65ab68d3573.mp3>aboutbushcom.mp3",
      "drillfile": "modules/188e5e50-2154-4421-bb4e-0c8404b0d6cd.pdf>Don_t beat about the bush - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:04:46.2639'),
      "id": "6cf89e06ec3144c59aac528593b8f193",
      "description": "CONVERSATION: DON'T BEAT ABOUT BUSH",
      "audiofile": "modules/84163f4e-2e94-4a17-8570-c65ab68d3573.mp3>aboutbushcom.mp3",
      "drillfile": "modules/188e5e50-2154-4421-bb4e-0c8404b0d6cd.pdf>Don_t beat about the bush - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:04:46.2639'),
      "id": "6cf89e06ec3144c59aac528593b8f193",
      "description": "CONVERSATION: DON'T BEAT ABOUT BUSH",
      "audiofile": "modules/84163f4e-2e94-4a17-8570-c65ab68d3573.mp3>aboutbushcom.mp3",
      "drillfile": "modules/188e5e50-2154-4421-bb4e-0c8404b0d6cd.pdf>Don_t beat about the bush - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:05:31.392177'),
      "id": "74bc84824f214044aba6e0a55b569751",
      "description": "IPA PHONETICS 21",
      "audiofile": "modules/2493ed5f-1ab3-4285-a44a-f978f433d55c.mp3>21 badlab.mp3",
      "drillfile": "modules/9672b7e5-f923-46a6-934d-c12e1b977955.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:05:31.392177'),
      "id": "74bc84824f214044aba6e0a55b569751",
      "description": "IPA PHONETICS 21",
      "audiofile": "modules/2493ed5f-1ab3-4285-a44a-f978f433d55c.mp3>21 badlab.mp3",
      "drillfile": "modules/9672b7e5-f923-46a6-934d-c12e1b977955.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:05:31.392177'),
      "id": "74bc84824f214044aba6e0a55b569751",
      "description": "IPA PHONETICS 21",
      "audiofile": "modules/2493ed5f-1ab3-4285-a44a-f978f433d55c.mp3>21 badlab.mp3",
      "drillfile": "modules/9672b7e5-f923-46a6-934d-c12e1b977955.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:05:31.392177'),
      "id": "74bc84824f214044aba6e0a55b569751",
      "description": "IPA PHONETICS 21",
      "audiofile": "modules/2493ed5f-1ab3-4285-a44a-f978f433d55c.mp3>21 badlab.mp3",
      "drillfile": "modules/9672b7e5-f923-46a6-934d-c12e1b977955.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:05:31.392177'),
      "id": "74bc84824f214044aba6e0a55b569751",
      "description": "IPA PHONETICS 21",
      "audiofile": "modules/2493ed5f-1ab3-4285-a44a-f978f433d55c.mp3>21 badlab.mp3",
      "drillfile": "modules/9672b7e5-f923-46a6-934d-c12e1b977955.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:05:31.392177'),
      "id": "74bc84824f214044aba6e0a55b569751",
      "description": "IPA PHONETICS 21",
      "audiofile": "modules/2493ed5f-1ab3-4285-a44a-f978f433d55c.mp3>21 badlab.mp3",
      "drillfile": "modules/9672b7e5-f923-46a6-934d-c12e1b977955.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:06:02.811589'),
      "id": "aabb968002b64ab2909fa6e9af7714b4",
      "description": "CONVERSATION: DON'T FORGET TO DROP ME A LINE",
      "audiofile": "modules/35b24931-5eec-4e52-9888-1c1d6f3a4d97.mp3>dropmealinecomplete.mp3",
      "drillfile": "modules/6a06d79d-0067-421a-a1a2-43197931f2b2.pdf>Don_t Forget to Drop Me a Line - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:06:02.811589'),
      "id": "aabb968002b64ab2909fa6e9af7714b4",
      "description": "CONVERSATION: DON'T FORGET TO DROP ME A LINE",
      "audiofile": "modules/35b24931-5eec-4e52-9888-1c1d6f3a4d97.mp3>dropmealinecomplete.mp3",
      "drillfile": "modules/6a06d79d-0067-421a-a1a2-43197931f2b2.pdf>Don_t Forget to Drop Me a Line - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:06:02.811589'),
      "id": "aabb968002b64ab2909fa6e9af7714b4",
      "description": "CONVERSATION: DON'T FORGET TO DROP ME A LINE",
      "audiofile": "modules/35b24931-5eec-4e52-9888-1c1d6f3a4d97.mp3>dropmealinecomplete.mp3",
      "drillfile": "modules/6a06d79d-0067-421a-a1a2-43197931f2b2.pdf>Don_t Forget to Drop Me a Line - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:06:02.811589'),
      "id": "aabb968002b64ab2909fa6e9af7714b4",
      "description": "CONVERSATION: DON'T FORGET TO DROP ME A LINE",
      "audiofile": "modules/35b24931-5eec-4e52-9888-1c1d6f3a4d97.mp3>dropmealinecomplete.mp3",
      "drillfile": "modules/6a06d79d-0067-421a-a1a2-43197931f2b2.pdf>Don_t Forget to Drop Me a Line - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:06:02.811589'),
      "id": "aabb968002b64ab2909fa6e9af7714b4",
      "description": "CONVERSATION: DON'T FORGET TO DROP ME A LINE",
      "audiofile": "modules/35b24931-5eec-4e52-9888-1c1d6f3a4d97.mp3>dropmealinecomplete.mp3",
      "drillfile": "modules/6a06d79d-0067-421a-a1a2-43197931f2b2.pdf>Don_t Forget to Drop Me a Line - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:06:02.811589'),
      "id": "aabb968002b64ab2909fa6e9af7714b4",
      "description": "CONVERSATION: DON'T FORGET TO DROP ME A LINE",
      "audiofile": "modules/35b24931-5eec-4e52-9888-1c1d6f3a4d97.mp3>dropmealinecomplete.mp3",
      "drillfile": "modules/6a06d79d-0067-421a-a1a2-43197931f2b2.pdf>Don_t Forget to Drop Me a Line - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:06:33.16791'),
      "id": "f42a13d7d5394fc5b6d898cf84f5055e",
      "description": "CONVERSATION: DON'T TAKE IT OUT ON ME",
      "audiofile": "modules/5c534127-9d64-4bff-b79a-eacf3e68bb5f.mp3>takeoutcomplete.mp3",
      "drillfile": "modules/73ea2de1-a0c4-4e63-94eb-9388c42d9756.pdf>Don_t Take It Out On Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:06:33.16791'),
      "id": "f42a13d7d5394fc5b6d898cf84f5055e",
      "description": "CONVERSATION: DON'T TAKE IT OUT ON ME",
      "audiofile": "modules/5c534127-9d64-4bff-b79a-eacf3e68bb5f.mp3>takeoutcomplete.mp3",
      "drillfile": "modules/73ea2de1-a0c4-4e63-94eb-9388c42d9756.pdf>Don_t Take It Out On Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:06:33.16791'),
      "id": "f42a13d7d5394fc5b6d898cf84f5055e",
      "description": "CONVERSATION: DON'T TAKE IT OUT ON ME",
      "audiofile": "modules/5c534127-9d64-4bff-b79a-eacf3e68bb5f.mp3>takeoutcomplete.mp3",
      "drillfile": "modules/73ea2de1-a0c4-4e63-94eb-9388c42d9756.pdf>Don_t Take It Out On Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:06:33.16791'),
      "id": "f42a13d7d5394fc5b6d898cf84f5055e",
      "description": "CONVERSATION: DON'T TAKE IT OUT ON ME",
      "audiofile": "modules/5c534127-9d64-4bff-b79a-eacf3e68bb5f.mp3>takeoutcomplete.mp3",
      "drillfile": "modules/73ea2de1-a0c4-4e63-94eb-9388c42d9756.pdf>Don_t Take It Out On Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:06:33.16791'),
      "id": "f42a13d7d5394fc5b6d898cf84f5055e",
      "description": "CONVERSATION: DON'T TAKE IT OUT ON ME",
      "audiofile": "modules/5c534127-9d64-4bff-b79a-eacf3e68bb5f.mp3>takeoutcomplete.mp3",
      "drillfile": "modules/73ea2de1-a0c4-4e63-94eb-9388c42d9756.pdf>Don_t Take It Out On Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:06:33.16791'),
      "id": "f42a13d7d5394fc5b6d898cf84f5055e",
      "description": "CONVERSATION: DON'T TAKE IT OUT ON ME",
      "audiofile": "modules/5c534127-9d64-4bff-b79a-eacf3e68bb5f.mp3>takeoutcomplete.mp3",
      "drillfile": "modules/73ea2de1-a0c4-4e63-94eb-9388c42d9756.pdf>Don_t Take It Out On Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:07:18.033462'),
      "id": "438b6ebf92e847acb948f125c3defe86",
      "description": "CONVERSATION: IT HASN'T RAINED A DROP FOR MONTS",
      "audiofile": "modules/2df61d7e-d348-471c-a3ec-674b9dada496.mp3>dropcomplete.mp3",
      "drillfile": "modules/8ca4b0df-38c9-4c8b-9bf4-3397693528ad.pdf>it hasn_t rained a drop for months.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:07:18.033462'),
      "id": "438b6ebf92e847acb948f125c3defe86",
      "description": "CONVERSATION: IT HASN'T RAINED A DROP FOR MONTS",
      "audiofile": "modules/2df61d7e-d348-471c-a3ec-674b9dada496.mp3>dropcomplete.mp3",
      "drillfile": "modules/8ca4b0df-38c9-4c8b-9bf4-3397693528ad.pdf>it hasn_t rained a drop for months.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:07:18.033462'),
      "id": "438b6ebf92e847acb948f125c3defe86",
      "description": "CONVERSATION: IT HASN'T RAINED A DROP FOR MONTS",
      "audiofile": "modules/2df61d7e-d348-471c-a3ec-674b9dada496.mp3>dropcomplete.mp3",
      "drillfile": "modules/8ca4b0df-38c9-4c8b-9bf4-3397693528ad.pdf>it hasn_t rained a drop for months.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:07:18.033462'),
      "id": "438b6ebf92e847acb948f125c3defe86",
      "description": "CONVERSATION: IT HASN'T RAINED A DROP FOR MONTS",
      "audiofile": "modules/2df61d7e-d348-471c-a3ec-674b9dada496.mp3>dropcomplete.mp3",
      "drillfile": "modules/8ca4b0df-38c9-4c8b-9bf4-3397693528ad.pdf>it hasn_t rained a drop for months.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:07:18.033462'),
      "id": "438b6ebf92e847acb948f125c3defe86",
      "description": "CONVERSATION: IT HASN'T RAINED A DROP FOR MONTS",
      "audiofile": "modules/2df61d7e-d348-471c-a3ec-674b9dada496.mp3>dropcomplete.mp3",
      "drillfile": "modules/8ca4b0df-38c9-4c8b-9bf4-3397693528ad.pdf>it hasn_t rained a drop for months.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:07:18.033462'),
      "id": "438b6ebf92e847acb948f125c3defe86",
      "description": "CONVERSATION: IT HASN'T RAINED A DROP FOR MONTS",
      "audiofile": "modules/2df61d7e-d348-471c-a3ec-674b9dada496.mp3>dropcomplete.mp3",
      "drillfile": "modules/8ca4b0df-38c9-4c8b-9bf4-3397693528ad.pdf>it hasn_t rained a drop for months.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:07:53.032483'),
      "id": "67336a2374cb409a9762c56ff81d5b61",
      "description": "CONVERSATION: EMOTIONS",
      "audiofile": "modules/6fadd5bd-3f31-4766-84b8-6921dcda460b.mp3>cantstandcomplete.mp3",
      "drillfile": "modules/4dc28cbe-ea1f-428b-b01e-c12cf5a67904.pdf>Emotions.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:07:53.032483'),
      "id": "67336a2374cb409a9762c56ff81d5b61",
      "description": "CONVERSATION: EMOTIONS",
      "audiofile": "modules/6fadd5bd-3f31-4766-84b8-6921dcda460b.mp3>cantstandcomplete.mp3",
      "drillfile": "modules/4dc28cbe-ea1f-428b-b01e-c12cf5a67904.pdf>Emotions.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:07:53.032483'),
      "id": "67336a2374cb409a9762c56ff81d5b61",
      "description": "CONVERSATION: EMOTIONS",
      "audiofile": "modules/6fadd5bd-3f31-4766-84b8-6921dcda460b.mp3>cantstandcomplete.mp3",
      "drillfile": "modules/4dc28cbe-ea1f-428b-b01e-c12cf5a67904.pdf>Emotions.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:07:53.032483'),
      "id": "67336a2374cb409a9762c56ff81d5b61",
      "description": "CONVERSATION: EMOTIONS",
      "audiofile": "modules/6fadd5bd-3f31-4766-84b8-6921dcda460b.mp3>cantstandcomplete.mp3",
      "drillfile": "modules/4dc28cbe-ea1f-428b-b01e-c12cf5a67904.pdf>Emotions.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:07:53.032483'),
      "id": "67336a2374cb409a9762c56ff81d5b61",
      "description": "CONVERSATION: EMOTIONS",
      "audiofile": "modules/6fadd5bd-3f31-4766-84b8-6921dcda460b.mp3>cantstandcomplete.mp3",
      "drillfile": "modules/4dc28cbe-ea1f-428b-b01e-c12cf5a67904.pdf>Emotions.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:07:53.032483'),
      "id": "67336a2374cb409a9762c56ff81d5b61",
      "description": "CONVERSATION: EMOTIONS",
      "audiofile": "modules/6fadd5bd-3f31-4766-84b8-6921dcda460b.mp3>cantstandcomplete.mp3",
      "drillfile": "modules/4dc28cbe-ea1f-428b-b01e-c12cf5a67904.pdf>Emotions.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:08:26.092323'),
      "id": "3e79217dee3e4053b93f42b716545c7b",
      "description": "CONVERSATION: MENTION OF HIS NAME",
      "audiofile": "modules/36bdd49e-359c-436b-81ad-2095c22d9324.mp3>fumingcomplete.mp3",
      "drillfile": "modules/ec5764f4-80c8-4ea1-806d-b72d47d17efd.pdf>Even the mention of his name starts me fuming - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:08:26.092323'),
      "id": "3e79217dee3e4053b93f42b716545c7b",
      "description": "CONVERSATION: MENTION OF HIS NAME",
      "audiofile": "modules/36bdd49e-359c-436b-81ad-2095c22d9324.mp3>fumingcomplete.mp3",
      "drillfile": "modules/ec5764f4-80c8-4ea1-806d-b72d47d17efd.pdf>Even the mention of his name starts me fuming - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:08:26.092323'),
      "id": "3e79217dee3e4053b93f42b716545c7b",
      "description": "CONVERSATION: MENTION OF HIS NAME",
      "audiofile": "modules/36bdd49e-359c-436b-81ad-2095c22d9324.mp3>fumingcomplete.mp3",
      "drillfile": "modules/ec5764f4-80c8-4ea1-806d-b72d47d17efd.pdf>Even the mention of his name starts me fuming - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:08:26.092323'),
      "id": "3e79217dee3e4053b93f42b716545c7b",
      "description": "CONVERSATION: MENTION OF HIS NAME",
      "audiofile": "modules/36bdd49e-359c-436b-81ad-2095c22d9324.mp3>fumingcomplete.mp3",
      "drillfile": "modules/ec5764f4-80c8-4ea1-806d-b72d47d17efd.pdf>Even the mention of his name starts me fuming - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:08:26.092323'),
      "id": "3e79217dee3e4053b93f42b716545c7b",
      "description": "CONVERSATION: MENTION OF HIS NAME",
      "audiofile": "modules/36bdd49e-359c-436b-81ad-2095c22d9324.mp3>fumingcomplete.mp3",
      "drillfile": "modules/ec5764f4-80c8-4ea1-806d-b72d47d17efd.pdf>Even the mention of his name starts me fuming - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:08:26.092323'),
      "id": "3e79217dee3e4053b93f42b716545c7b",
      "description": "CONVERSATION: MENTION OF HIS NAME",
      "audiofile": "modules/36bdd49e-359c-436b-81ad-2095c22d9324.mp3>fumingcomplete.mp3",
      "drillfile": "modules/ec5764f4-80c8-4ea1-806d-b72d47d17efd.pdf>Even the mention of his name starts me fuming - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:08:46.664326'),
      "id": "57a549ffa30f482ab3f5d7df177afb95",
      "description": "IPA PHONETICS 24",
      "audiofile": "modules/5eb51604-679d-4f85-8289-78046e893b8e.mp3>24 giveflag.mp3",
      "drillfile": "modules/004c441f-c4f1-4079-8dda-0a3f9f699b9c.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:08:46.664326'),
      "id": "57a549ffa30f482ab3f5d7df177afb95",
      "description": "IPA PHONETICS 24",
      "audiofile": "modules/5eb51604-679d-4f85-8289-78046e893b8e.mp3>24 giveflag.mp3",
      "drillfile": "modules/004c441f-c4f1-4079-8dda-0a3f9f699b9c.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:08:46.664326'),
      "id": "57a549ffa30f482ab3f5d7df177afb95",
      "description": "IPA PHONETICS 24",
      "audiofile": "modules/5eb51604-679d-4f85-8289-78046e893b8e.mp3>24 giveflag.mp3",
      "drillfile": "modules/004c441f-c4f1-4079-8dda-0a3f9f699b9c.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:08:46.664326'),
      "id": "57a549ffa30f482ab3f5d7df177afb95",
      "description": "IPA PHONETICS 24",
      "audiofile": "modules/5eb51604-679d-4f85-8289-78046e893b8e.mp3>24 giveflag.mp3",
      "drillfile": "modules/004c441f-c4f1-4079-8dda-0a3f9f699b9c.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:08:46.664326'),
      "id": "57a549ffa30f482ab3f5d7df177afb95",
      "description": "IPA PHONETICS 24",
      "audiofile": "modules/5eb51604-679d-4f85-8289-78046e893b8e.mp3>24 giveflag.mp3",
      "drillfile": "modules/004c441f-c4f1-4079-8dda-0a3f9f699b9c.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:08:46.664326'),
      "id": "57a549ffa30f482ab3f5d7df177afb95",
      "description": "IPA PHONETICS 24",
      "audiofile": "modules/5eb51604-679d-4f85-8289-78046e893b8e.mp3>24 giveflag.mp3",
      "drillfile": "modules/004c441f-c4f1-4079-8dda-0a3f9f699b9c.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:45.766071'),
      "id": "cc8a63c2de57493da014449a00489258",
      "description": "One one",
      "audiofile": "modules/56021e9c-4343-45a9-a5dc-a3c9b2503cfd.mp3>oneone (1).mp3",
      "drillfile": "modules/7d438247-123c-4bd9-86a2-cc9292c8a2f9.pdf>ONE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:45.766071'),
      "id": "cc8a63c2de57493da014449a00489258",
      "description": "One one",
      "audiofile": "modules/56021e9c-4343-45a9-a5dc-a3c9b2503cfd.mp3>oneone (1).mp3",
      "drillfile": "modules/7d438247-123c-4bd9-86a2-cc9292c8a2f9.pdf>ONE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:45.766071'),
      "id": "cc8a63c2de57493da014449a00489258",
      "description": "One one",
      "audiofile": "modules/56021e9c-4343-45a9-a5dc-a3c9b2503cfd.mp3>oneone (1).mp3",
      "drillfile": "modules/7d438247-123c-4bd9-86a2-cc9292c8a2f9.pdf>ONE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:45.766071'),
      "id": "cc8a63c2de57493da014449a00489258",
      "description": "One one",
      "audiofile": "modules/56021e9c-4343-45a9-a5dc-a3c9b2503cfd.mp3>oneone (1).mp3",
      "drillfile": "modules/7d438247-123c-4bd9-86a2-cc9292c8a2f9.pdf>ONE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:45.766071'),
      "id": "cc8a63c2de57493da014449a00489258",
      "description": "One one",
      "audiofile": "modules/56021e9c-4343-45a9-a5dc-a3c9b2503cfd.mp3>oneone (1).mp3",
      "drillfile": "modules/7d438247-123c-4bd9-86a2-cc9292c8a2f9.pdf>ONE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:45.766071'),
      "id": "cc8a63c2de57493da014449a00489258",
      "description": "One one",
      "audiofile": "modules/56021e9c-4343-45a9-a5dc-a3c9b2503cfd.mp3>oneone (1).mp3",
      "drillfile": "modules/7d438247-123c-4bd9-86a2-cc9292c8a2f9.pdf>ONE.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:08:56.997201'),
      "id": "b41ec6e4406647d282c648cbe9306545",
      "description": "CONVERSATION: FASHION",
      "audiofile": "modules/673e3430-8119-46fe-9c2f-d67402700fa7.mp3>babysmoothcomplete.mp3",
      "drillfile": "modules/5f55594c-fc35-478d-b9ab-dd9fd88dc378.pdf>Fashion.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:08:56.997201'),
      "id": "b41ec6e4406647d282c648cbe9306545",
      "description": "CONVERSATION: FASHION",
      "audiofile": "modules/673e3430-8119-46fe-9c2f-d67402700fa7.mp3>babysmoothcomplete.mp3",
      "drillfile": "modules/5f55594c-fc35-478d-b9ab-dd9fd88dc378.pdf>Fashion.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:08:56.997201'),
      "id": "b41ec6e4406647d282c648cbe9306545",
      "description": "CONVERSATION: FASHION",
      "audiofile": "modules/673e3430-8119-46fe-9c2f-d67402700fa7.mp3>babysmoothcomplete.mp3",
      "drillfile": "modules/5f55594c-fc35-478d-b9ab-dd9fd88dc378.pdf>Fashion.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:08:56.997201'),
      "id": "b41ec6e4406647d282c648cbe9306545",
      "description": "CONVERSATION: FASHION",
      "audiofile": "modules/673e3430-8119-46fe-9c2f-d67402700fa7.mp3>babysmoothcomplete.mp3",
      "drillfile": "modules/5f55594c-fc35-478d-b9ab-dd9fd88dc378.pdf>Fashion.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:08:56.997201'),
      "id": "b41ec6e4406647d282c648cbe9306545",
      "description": "CONVERSATION: FASHION",
      "audiofile": "modules/673e3430-8119-46fe-9c2f-d67402700fa7.mp3>babysmoothcomplete.mp3",
      "drillfile": "modules/5f55594c-fc35-478d-b9ab-dd9fd88dc378.pdf>Fashion.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:08:56.997201'),
      "id": "b41ec6e4406647d282c648cbe9306545",
      "description": "CONVERSATION: FASHION",
      "audiofile": "modules/673e3430-8119-46fe-9c2f-d67402700fa7.mp3>babysmoothcomplete.mp3",
      "drillfile": "modules/5f55594c-fc35-478d-b9ab-dd9fd88dc378.pdf>Fashion.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:09:17.901951'),
      "id": "e1c605967915451b93802ff10b1d22f7",
      "description": "IPA PHONETICS 25",
      "audiofile": "modules/c6bcb6b3-fd77-41a1-963f-f910994e0b65.mp3>25 howhello.mp3",
      "drillfile": "modules/766f52d9-199e-46cb-a14f-b2cc81b40af1.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:09:17.901951'),
      "id": "e1c605967915451b93802ff10b1d22f7",
      "description": "IPA PHONETICS 25",
      "audiofile": "modules/c6bcb6b3-fd77-41a1-963f-f910994e0b65.mp3>25 howhello.mp3",
      "drillfile": "modules/766f52d9-199e-46cb-a14f-b2cc81b40af1.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:09:17.901951'),
      "id": "e1c605967915451b93802ff10b1d22f7",
      "description": "IPA PHONETICS 25",
      "audiofile": "modules/c6bcb6b3-fd77-41a1-963f-f910994e0b65.mp3>25 howhello.mp3",
      "drillfile": "modules/766f52d9-199e-46cb-a14f-b2cc81b40af1.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:09:17.901951'),
      "id": "e1c605967915451b93802ff10b1d22f7",
      "description": "IPA PHONETICS 25",
      "audiofile": "modules/c6bcb6b3-fd77-41a1-963f-f910994e0b65.mp3>25 howhello.mp3",
      "drillfile": "modules/766f52d9-199e-46cb-a14f-b2cc81b40af1.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:09:17.901951'),
      "id": "e1c605967915451b93802ff10b1d22f7",
      "description": "IPA PHONETICS 25",
      "audiofile": "modules/c6bcb6b3-fd77-41a1-963f-f910994e0b65.mp3>25 howhello.mp3",
      "drillfile": "modules/766f52d9-199e-46cb-a14f-b2cc81b40af1.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:09:17.901951'),
      "id": "e1c605967915451b93802ff10b1d22f7",
      "description": "IPA PHONETICS 25",
      "audiofile": "modules/c6bcb6b3-fd77-41a1-963f-f910994e0b65.mp3>25 howhello.mp3",
      "drillfile": "modules/766f52d9-199e-46cb-a14f-b2cc81b40af1.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:09:30.59058'),
      "id": "4771e81b399a44358eb87a133236cc40",
      "description": "CONVERSATION: FINE",
      "audiofile": "modules/a6d0d2f2-8f76-461e-80bc-5d9d1c43477a.mp3>workoutfinecomplete.mp3",
      "drillfile": "modules/b50a93e8-6009-42f9-a63a-7a0cc5d973c8.pdf>Everything will work out just fine.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:09:30.59058'),
      "id": "4771e81b399a44358eb87a133236cc40",
      "description": "CONVERSATION: FINE",
      "audiofile": "modules/a6d0d2f2-8f76-461e-80bc-5d9d1c43477a.mp3>workoutfinecomplete.mp3",
      "drillfile": "modules/b50a93e8-6009-42f9-a63a-7a0cc5d973c8.pdf>Everything will work out just fine.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:09:30.59058'),
      "id": "4771e81b399a44358eb87a133236cc40",
      "description": "CONVERSATION: FINE",
      "audiofile": "modules/a6d0d2f2-8f76-461e-80bc-5d9d1c43477a.mp3>workoutfinecomplete.mp3",
      "drillfile": "modules/b50a93e8-6009-42f9-a63a-7a0cc5d973c8.pdf>Everything will work out just fine.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:09:30.59058'),
      "id": "4771e81b399a44358eb87a133236cc40",
      "description": "CONVERSATION: FINE",
      "audiofile": "modules/a6d0d2f2-8f76-461e-80bc-5d9d1c43477a.mp3>workoutfinecomplete.mp3",
      "drillfile": "modules/b50a93e8-6009-42f9-a63a-7a0cc5d973c8.pdf>Everything will work out just fine.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:09:30.59058'),
      "id": "4771e81b399a44358eb87a133236cc40",
      "description": "CONVERSATION: FINE",
      "audiofile": "modules/a6d0d2f2-8f76-461e-80bc-5d9d1c43477a.mp3>workoutfinecomplete.mp3",
      "drillfile": "modules/b50a93e8-6009-42f9-a63a-7a0cc5d973c8.pdf>Everything will work out just fine.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:09:30.59058'),
      "id": "4771e81b399a44358eb87a133236cc40",
      "description": "CONVERSATION: FINE",
      "audiofile": "modules/a6d0d2f2-8f76-461e-80bc-5d9d1c43477a.mp3>workoutfinecomplete.mp3",
      "drillfile": "modules/b50a93e8-6009-42f9-a63a-7a0cc5d973c8.pdf>Everything will work out just fine.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:09:48.129315'),
      "id": "2260236db1674966bc909af9568bb8d7",
      "description": "IPA PHONETICS 26",
      "audiofile": "modules/fa99dbe3-90ee-4284-8636-9bafcaf2d470.mp3>26 yesyellow.mp3",
      "drillfile": "modules/bd22cc22-0cc8-4f2d-97c1-36defdbee9d3.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:09:48.129315'),
      "id": "2260236db1674966bc909af9568bb8d7",
      "description": "IPA PHONETICS 26",
      "audiofile": "modules/fa99dbe3-90ee-4284-8636-9bafcaf2d470.mp3>26 yesyellow.mp3",
      "drillfile": "modules/bd22cc22-0cc8-4f2d-97c1-36defdbee9d3.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:09:48.129315'),
      "id": "2260236db1674966bc909af9568bb8d7",
      "description": "IPA PHONETICS 26",
      "audiofile": "modules/fa99dbe3-90ee-4284-8636-9bafcaf2d470.mp3>26 yesyellow.mp3",
      "drillfile": "modules/bd22cc22-0cc8-4f2d-97c1-36defdbee9d3.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:09:48.129315'),
      "id": "2260236db1674966bc909af9568bb8d7",
      "description": "IPA PHONETICS 26",
      "audiofile": "modules/fa99dbe3-90ee-4284-8636-9bafcaf2d470.mp3>26 yesyellow.mp3",
      "drillfile": "modules/bd22cc22-0cc8-4f2d-97c1-36defdbee9d3.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:09:48.129315'),
      "id": "2260236db1674966bc909af9568bb8d7",
      "description": "IPA PHONETICS 26",
      "audiofile": "modules/fa99dbe3-90ee-4284-8636-9bafcaf2d470.mp3>26 yesyellow.mp3",
      "drillfile": "modules/bd22cc22-0cc8-4f2d-97c1-36defdbee9d3.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:09:48.129315'),
      "id": "2260236db1674966bc909af9568bb8d7",
      "description": "IPA PHONETICS 26",
      "audiofile": "modules/fa99dbe3-90ee-4284-8636-9bafcaf2d470.mp3>26 yesyellow.mp3",
      "drillfile": "modules/bd22cc22-0cc8-4f2d-97c1-36defdbee9d3.pdf>Copy of Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:10:00.706804'),
      "id": "4b58b9e9366a4b6abc8fa5682b8c94fa",
      "description": "CONVERSATION: FREIGHT TRAIN",
      "audiofile": "modules/1ea914c5-2291-44f2-bbf3-b4cf74dfc807.mp3>runovercomp.mp3",
      "drillfile": "modules/377f75ca-ef06-4d7d-8ec2-c615f38dc321.pdf>Feel Like I_ve Been Run Over by a Freight Train.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:10:00.706804'),
      "id": "4b58b9e9366a4b6abc8fa5682b8c94fa",
      "description": "CONVERSATION: FREIGHT TRAIN",
      "audiofile": "modules/1ea914c5-2291-44f2-bbf3-b4cf74dfc807.mp3>runovercomp.mp3",
      "drillfile": "modules/377f75ca-ef06-4d7d-8ec2-c615f38dc321.pdf>Feel Like I_ve Been Run Over by a Freight Train.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:10:00.706804'),
      "id": "4b58b9e9366a4b6abc8fa5682b8c94fa",
      "description": "CONVERSATION: FREIGHT TRAIN",
      "audiofile": "modules/1ea914c5-2291-44f2-bbf3-b4cf74dfc807.mp3>runovercomp.mp3",
      "drillfile": "modules/377f75ca-ef06-4d7d-8ec2-c615f38dc321.pdf>Feel Like I_ve Been Run Over by a Freight Train.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:10:00.706804'),
      "id": "4b58b9e9366a4b6abc8fa5682b8c94fa",
      "description": "CONVERSATION: FREIGHT TRAIN",
      "audiofile": "modules/1ea914c5-2291-44f2-bbf3-b4cf74dfc807.mp3>runovercomp.mp3",
      "drillfile": "modules/377f75ca-ef06-4d7d-8ec2-c615f38dc321.pdf>Feel Like I_ve Been Run Over by a Freight Train.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:10:00.706804'),
      "id": "4b58b9e9366a4b6abc8fa5682b8c94fa",
      "description": "CONVERSATION: FREIGHT TRAIN",
      "audiofile": "modules/1ea914c5-2291-44f2-bbf3-b4cf74dfc807.mp3>runovercomp.mp3",
      "drillfile": "modules/377f75ca-ef06-4d7d-8ec2-c615f38dc321.pdf>Feel Like I_ve Been Run Over by a Freight Train.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:10:00.706804'),
      "id": "4b58b9e9366a4b6abc8fa5682b8c94fa",
      "description": "CONVERSATION: FREIGHT TRAIN",
      "audiofile": "modules/1ea914c5-2291-44f2-bbf3-b4cf74dfc807.mp3>runovercomp.mp3",
      "drillfile": "modules/377f75ca-ef06-4d7d-8ec2-c615f38dc321.pdf>Feel Like I_ve Been Run Over by a Freight Train.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:10:26.687543'),
      "id": "c688314967d6474697015954ed5246db",
      "description": "CONVERSATION: FRIENDSHIP",
      "audiofile": "modules/7bced4af-03ca-484b-b821-2fc2da4c554e.mp3>drinktocomplete (1).mp3",
      "drillfile": "modules/4f7aa18a-0f92-4028-9b6a-001d9ba4ee76.pdf>Friendship.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:10:26.687543'),
      "id": "c688314967d6474697015954ed5246db",
      "description": "CONVERSATION: FRIENDSHIP",
      "audiofile": "modules/7bced4af-03ca-484b-b821-2fc2da4c554e.mp3>drinktocomplete (1).mp3",
      "drillfile": "modules/4f7aa18a-0f92-4028-9b6a-001d9ba4ee76.pdf>Friendship.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:10:26.687543'),
      "id": "c688314967d6474697015954ed5246db",
      "description": "CONVERSATION: FRIENDSHIP",
      "audiofile": "modules/7bced4af-03ca-484b-b821-2fc2da4c554e.mp3>drinktocomplete (1).mp3",
      "drillfile": "modules/4f7aa18a-0f92-4028-9b6a-001d9ba4ee76.pdf>Friendship.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:10:26.687543'),
      "id": "c688314967d6474697015954ed5246db",
      "description": "CONVERSATION: FRIENDSHIP",
      "audiofile": "modules/7bced4af-03ca-484b-b821-2fc2da4c554e.mp3>drinktocomplete (1).mp3",
      "drillfile": "modules/4f7aa18a-0f92-4028-9b6a-001d9ba4ee76.pdf>Friendship.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:10:26.687543'),
      "id": "c688314967d6474697015954ed5246db",
      "description": "CONVERSATION: FRIENDSHIP",
      "audiofile": "modules/7bced4af-03ca-484b-b821-2fc2da4c554e.mp3>drinktocomplete (1).mp3",
      "drillfile": "modules/4f7aa18a-0f92-4028-9b6a-001d9ba4ee76.pdf>Friendship.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:10:26.687543'),
      "id": "c688314967d6474697015954ed5246db",
      "description": "CONVERSATION: FRIENDSHIP",
      "audiofile": "modules/7bced4af-03ca-484b-b821-2fc2da4c554e.mp3>drinktocomplete (1).mp3",
      "drillfile": "modules/4f7aa18a-0f92-4028-9b6a-001d9ba4ee76.pdf>Friendship.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:11:40.831259'),
      "id": "1d126e9ffd5d43558672e5040d7abcba",
      "description": "CONVERSATION: GOING TO THE DENTIST",
      "audiofile": "modules/2e25e688-46d2-4c9d-bfa7-323be064ee35.mp3>unnervecomplete.mp3",
      "drillfile": "modules/5c17ed68-43df-4103-adda-09559a91dfd7.pdf>Going to the Dentist Really Unnerves Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:11:40.831259'),
      "id": "1d126e9ffd5d43558672e5040d7abcba",
      "description": "CONVERSATION: GOING TO THE DENTIST",
      "audiofile": "modules/2e25e688-46d2-4c9d-bfa7-323be064ee35.mp3>unnervecomplete.mp3",
      "drillfile": "modules/5c17ed68-43df-4103-adda-09559a91dfd7.pdf>Going to the Dentist Really Unnerves Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:11:40.831259'),
      "id": "1d126e9ffd5d43558672e5040d7abcba",
      "description": "CONVERSATION: GOING TO THE DENTIST",
      "audiofile": "modules/2e25e688-46d2-4c9d-bfa7-323be064ee35.mp3>unnervecomplete.mp3",
      "drillfile": "modules/5c17ed68-43df-4103-adda-09559a91dfd7.pdf>Going to the Dentist Really Unnerves Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:11:40.831259'),
      "id": "1d126e9ffd5d43558672e5040d7abcba",
      "description": "CONVERSATION: GOING TO THE DENTIST",
      "audiofile": "modules/2e25e688-46d2-4c9d-bfa7-323be064ee35.mp3>unnervecomplete.mp3",
      "drillfile": "modules/5c17ed68-43df-4103-adda-09559a91dfd7.pdf>Going to the Dentist Really Unnerves Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:11:40.831259'),
      "id": "1d126e9ffd5d43558672e5040d7abcba",
      "description": "CONVERSATION: GOING TO THE DENTIST",
      "audiofile": "modules/2e25e688-46d2-4c9d-bfa7-323be064ee35.mp3>unnervecomplete.mp3",
      "drillfile": "modules/5c17ed68-43df-4103-adda-09559a91dfd7.pdf>Going to the Dentist Really Unnerves Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:11:40.831259'),
      "id": "1d126e9ffd5d43558672e5040d7abcba",
      "description": "CONVERSATION: GOING TO THE DENTIST",
      "audiofile": "modules/2e25e688-46d2-4c9d-bfa7-323be064ee35.mp3>unnervecomplete.mp3",
      "drillfile": "modules/5c17ed68-43df-4103-adda-09559a91dfd7.pdf>Going to the Dentist Really Unnerves Me - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:11:45.898116'),
      "id": "bdf29f0ab33c4c5aa5e60ff0af207a0c",
      "description": "IPA PHONETICS 27",
      "audiofile": "modules/a7dc6949-6ec4-4d40-877f-c293f85b73af.mp3>27 catback.mp3",
      "drillfile": "modules/5d77589f-841f-499b-a5d8-7a44e60eb19b.pdf>Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:11:45.898116'),
      "id": "bdf29f0ab33c4c5aa5e60ff0af207a0c",
      "description": "IPA PHONETICS 27",
      "audiofile": "modules/a7dc6949-6ec4-4d40-877f-c293f85b73af.mp3>27 catback.mp3",
      "drillfile": "modules/5d77589f-841f-499b-a5d8-7a44e60eb19b.pdf>Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:11:45.898116'),
      "id": "bdf29f0ab33c4c5aa5e60ff0af207a0c",
      "description": "IPA PHONETICS 27",
      "audiofile": "modules/a7dc6949-6ec4-4d40-877f-c293f85b73af.mp3>27 catback.mp3",
      "drillfile": "modules/5d77589f-841f-499b-a5d8-7a44e60eb19b.pdf>Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:11:45.898116'),
      "id": "bdf29f0ab33c4c5aa5e60ff0af207a0c",
      "description": "IPA PHONETICS 27",
      "audiofile": "modules/a7dc6949-6ec4-4d40-877f-c293f85b73af.mp3>27 catback.mp3",
      "drillfile": "modules/5d77589f-841f-499b-a5d8-7a44e60eb19b.pdf>Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:11:45.898116'),
      "id": "bdf29f0ab33c4c5aa5e60ff0af207a0c",
      "description": "IPA PHONETICS 27",
      "audiofile": "modules/a7dc6949-6ec4-4d40-877f-c293f85b73af.mp3>27 catback.mp3",
      "drillfile": "modules/5d77589f-841f-499b-a5d8-7a44e60eb19b.pdf>Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:11:45.898116'),
      "id": "bdf29f0ab33c4c5aa5e60ff0af207a0c",
      "description": "IPA PHONETICS 27",
      "audiofile": "modules/a7dc6949-6ec4-4d40-877f-c293f85b73af.mp3>27 catback.mp3",
      "drillfile": "modules/5d77589f-841f-499b-a5d8-7a44e60eb19b.pdf>Copy of phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:04.832756'),
      "id": "2145f9866ab74da5b0c925c81d8729cd",
      "description": "CONVERSATION: GOOD CHANCE",
      "audiofile": "modules/0cada3ab-f1c7-46d1-b1d6-37673f5dc1c6.mp3>goodchancecomplete.mp3",
      "drillfile": "modules/a15e1e0b-2ab2-4867-816c-2a89a4068488.pdf>I believe I have a good chance.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:04.832756'),
      "id": "2145f9866ab74da5b0c925c81d8729cd",
      "description": "CONVERSATION: GOOD CHANCE",
      "audiofile": "modules/0cada3ab-f1c7-46d1-b1d6-37673f5dc1c6.mp3>goodchancecomplete.mp3",
      "drillfile": "modules/a15e1e0b-2ab2-4867-816c-2a89a4068488.pdf>I believe I have a good chance.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:04.832756'),
      "id": "2145f9866ab74da5b0c925c81d8729cd",
      "description": "CONVERSATION: GOOD CHANCE",
      "audiofile": "modules/0cada3ab-f1c7-46d1-b1d6-37673f5dc1c6.mp3>goodchancecomplete.mp3",
      "drillfile": "modules/a15e1e0b-2ab2-4867-816c-2a89a4068488.pdf>I believe I have a good chance.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:04.832756'),
      "id": "2145f9866ab74da5b0c925c81d8729cd",
      "description": "CONVERSATION: GOOD CHANCE",
      "audiofile": "modules/0cada3ab-f1c7-46d1-b1d6-37673f5dc1c6.mp3>goodchancecomplete.mp3",
      "drillfile": "modules/a15e1e0b-2ab2-4867-816c-2a89a4068488.pdf>I believe I have a good chance.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:04.832756'),
      "id": "2145f9866ab74da5b0c925c81d8729cd",
      "description": "CONVERSATION: GOOD CHANCE",
      "audiofile": "modules/0cada3ab-f1c7-46d1-b1d6-37673f5dc1c6.mp3>goodchancecomplete.mp3",
      "drillfile": "modules/a15e1e0b-2ab2-4867-816c-2a89a4068488.pdf>I believe I have a good chance.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:04.832756'),
      "id": "2145f9866ab74da5b0c925c81d8729cd",
      "description": "CONVERSATION: GOOD CHANCE",
      "audiofile": "modules/0cada3ab-f1c7-46d1-b1d6-37673f5dc1c6.mp3>goodchancecomplete.mp3",
      "drillfile": "modules/a15e1e0b-2ab2-4867-816c-2a89a4068488.pdf>I believe I have a good chance.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:25.094691'),
      "id": "9d26dae90a774756bc42dc1132cc287e",
      "description": "CONVERSATION: GRAB SOMETHING TO EAT",
      "audiofile": "modules/c3a99071-03e7-4922-a908-e29f29e17474.mp3>grabsthtoeatcomplete.mp3",
      "drillfile": "modules/939acbb8-cfb1-4997-837c-e3d9dabb353b.pdf>I_ll just grab something to eat.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:25.094691'),
      "id": "9d26dae90a774756bc42dc1132cc287e",
      "description": "CONVERSATION: GRAB SOMETHING TO EAT",
      "audiofile": "modules/c3a99071-03e7-4922-a908-e29f29e17474.mp3>grabsthtoeatcomplete.mp3",
      "drillfile": "modules/939acbb8-cfb1-4997-837c-e3d9dabb353b.pdf>I_ll just grab something to eat.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:25.094691'),
      "id": "9d26dae90a774756bc42dc1132cc287e",
      "description": "CONVERSATION: GRAB SOMETHING TO EAT",
      "audiofile": "modules/c3a99071-03e7-4922-a908-e29f29e17474.mp3>grabsthtoeatcomplete.mp3",
      "drillfile": "modules/939acbb8-cfb1-4997-837c-e3d9dabb353b.pdf>I_ll just grab something to eat.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:25.094691'),
      "id": "9d26dae90a774756bc42dc1132cc287e",
      "description": "CONVERSATION: GRAB SOMETHING TO EAT",
      "audiofile": "modules/c3a99071-03e7-4922-a908-e29f29e17474.mp3>grabsthtoeatcomplete.mp3",
      "drillfile": "modules/939acbb8-cfb1-4997-837c-e3d9dabb353b.pdf>I_ll just grab something to eat.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:25.094691'),
      "id": "9d26dae90a774756bc42dc1132cc287e",
      "description": "CONVERSATION: GRAB SOMETHING TO EAT",
      "audiofile": "modules/c3a99071-03e7-4922-a908-e29f29e17474.mp3>grabsthtoeatcomplete.mp3",
      "drillfile": "modules/939acbb8-cfb1-4997-837c-e3d9dabb353b.pdf>I_ll just grab something to eat.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:25.094691'),
      "id": "9d26dae90a774756bc42dc1132cc287e",
      "description": "CONVERSATION: GRAB SOMETHING TO EAT",
      "audiofile": "modules/c3a99071-03e7-4922-a908-e29f29e17474.mp3>grabsthtoeatcomplete.mp3",
      "drillfile": "modules/939acbb8-cfb1-4997-837c-e3d9dabb353b.pdf>I_ll just grab something to eat.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:12:27.668139'),
      "id": "9e44d7551487413eb532d01511eab184",
      "description": "IPA PHONETICS 28",
      "audiofile": "modules/f33a4a26-6e45-4440-a8bc-dc33f82fdbb5.mp3>28 leglittle.mp3",
      "drillfile": "modules/f96ef0a2-b930-438c-a2e0-c1a6159f83ed.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:12:27.668139'),
      "id": "9e44d7551487413eb532d01511eab184",
      "description": "IPA PHONETICS 28",
      "audiofile": "modules/f33a4a26-6e45-4440-a8bc-dc33f82fdbb5.mp3>28 leglittle.mp3",
      "drillfile": "modules/f96ef0a2-b930-438c-a2e0-c1a6159f83ed.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:12:27.668139'),
      "id": "9e44d7551487413eb532d01511eab184",
      "description": "IPA PHONETICS 28",
      "audiofile": "modules/f33a4a26-6e45-4440-a8bc-dc33f82fdbb5.mp3>28 leglittle.mp3",
      "drillfile": "modules/f96ef0a2-b930-438c-a2e0-c1a6159f83ed.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:12:27.668139'),
      "id": "9e44d7551487413eb532d01511eab184",
      "description": "IPA PHONETICS 28",
      "audiofile": "modules/f33a4a26-6e45-4440-a8bc-dc33f82fdbb5.mp3>28 leglittle.mp3",
      "drillfile": "modules/f96ef0a2-b930-438c-a2e0-c1a6159f83ed.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:12:27.668139'),
      "id": "9e44d7551487413eb532d01511eab184",
      "description": "IPA PHONETICS 28",
      "audiofile": "modules/f33a4a26-6e45-4440-a8bc-dc33f82fdbb5.mp3>28 leglittle.mp3",
      "drillfile": "modules/f96ef0a2-b930-438c-a2e0-c1a6159f83ed.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:12:27.668139'),
      "id": "9e44d7551487413eb532d01511eab184",
      "description": "IPA PHONETICS 28",
      "audiofile": "modules/f33a4a26-6e45-4440-a8bc-dc33f82fdbb5.mp3>28 leglittle.mp3",
      "drillfile": "modules/f96ef0a2-b930-438c-a2e0-c1a6159f83ed.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:50.461314'),
      "id": "824ee61237ad42af838134618b35b73f",
      "description": "CONVERSATION: GET THE HANG",
      "audiofile": "modules/4bf87627-6e23-4145-ba0b-e80f5eaea825.mp3>gethangcomp.mp3",
      "drillfile": "modules/610ddeed-6cae-4207-8237-1c7631ac60ea.pdf>Once you get the hang of it.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:50.461314'),
      "id": "824ee61237ad42af838134618b35b73f",
      "description": "CONVERSATION: GET THE HANG",
      "audiofile": "modules/4bf87627-6e23-4145-ba0b-e80f5eaea825.mp3>gethangcomp.mp3",
      "drillfile": "modules/610ddeed-6cae-4207-8237-1c7631ac60ea.pdf>Once you get the hang of it.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:50.461314'),
      "id": "824ee61237ad42af838134618b35b73f",
      "description": "CONVERSATION: GET THE HANG",
      "audiofile": "modules/4bf87627-6e23-4145-ba0b-e80f5eaea825.mp3>gethangcomp.mp3",
      "drillfile": "modules/610ddeed-6cae-4207-8237-1c7631ac60ea.pdf>Once you get the hang of it.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:50.461314'),
      "id": "824ee61237ad42af838134618b35b73f",
      "description": "CONVERSATION: GET THE HANG",
      "audiofile": "modules/4bf87627-6e23-4145-ba0b-e80f5eaea825.mp3>gethangcomp.mp3",
      "drillfile": "modules/610ddeed-6cae-4207-8237-1c7631ac60ea.pdf>Once you get the hang of it.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:50.461314'),
      "id": "824ee61237ad42af838134618b35b73f",
      "description": "CONVERSATION: GET THE HANG",
      "audiofile": "modules/4bf87627-6e23-4145-ba0b-e80f5eaea825.mp3>gethangcomp.mp3",
      "drillfile": "modules/610ddeed-6cae-4207-8237-1c7631ac60ea.pdf>Once you get the hang of it.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:12:50.461314'),
      "id": "824ee61237ad42af838134618b35b73f",
      "description": "CONVERSATION: GET THE HANG",
      "audiofile": "modules/4bf87627-6e23-4145-ba0b-e80f5eaea825.mp3>gethangcomp.mp3",
      "drillfile": "modules/610ddeed-6cae-4207-8237-1c7631ac60ea.pdf>Once you get the hang of it.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:12:56.472705'),
      "id": "9a7eeb1b09754b94a6820f82331bced5",
      "description": "IPA PHONETICS 29",
      "audiofile": "modules/6544da06-0bd3-4932-8bef-3941ef393bfb.mp3>29 manlemon.mp3",
      "drillfile": "modules/38d7ae42-56cf-43b6-a0cf-3baa3f8691cc.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:12:56.472705'),
      "id": "9a7eeb1b09754b94a6820f82331bced5",
      "description": "IPA PHONETICS 29",
      "audiofile": "modules/6544da06-0bd3-4932-8bef-3941ef393bfb.mp3>29 manlemon.mp3",
      "drillfile": "modules/38d7ae42-56cf-43b6-a0cf-3baa3f8691cc.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:12:56.472705'),
      "id": "9a7eeb1b09754b94a6820f82331bced5",
      "description": "IPA PHONETICS 29",
      "audiofile": "modules/6544da06-0bd3-4932-8bef-3941ef393bfb.mp3>29 manlemon.mp3",
      "drillfile": "modules/38d7ae42-56cf-43b6-a0cf-3baa3f8691cc.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:12:56.472705'),
      "id": "9a7eeb1b09754b94a6820f82331bced5",
      "description": "IPA PHONETICS 29",
      "audiofile": "modules/6544da06-0bd3-4932-8bef-3941ef393bfb.mp3>29 manlemon.mp3",
      "drillfile": "modules/38d7ae42-56cf-43b6-a0cf-3baa3f8691cc.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:12:56.472705'),
      "id": "9a7eeb1b09754b94a6820f82331bced5",
      "description": "IPA PHONETICS 29",
      "audiofile": "modules/6544da06-0bd3-4932-8bef-3941ef393bfb.mp3>29 manlemon.mp3",
      "drillfile": "modules/38d7ae42-56cf-43b6-a0cf-3baa3f8691cc.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:12:56.472705'),
      "id": "9a7eeb1b09754b94a6820f82331bced5",
      "description": "IPA PHONETICS 29",
      "audiofile": "modules/6544da06-0bd3-4932-8bef-3941ef393bfb.mp3>29 manlemon.mp3",
      "drillfile": "modules/38d7ae42-56cf-43b6-a0cf-3baa3f8691cc.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:13:12.83307'),
      "id": "b7652cf01cad47b2a3875da22798576e",
      "description": "CONVERSATION: HE FLARED",
      "audiofile": "modules/39b719e9-0096-438c-a7bc-4c5c10bfa179.mp3>flareupcomplete.mp3",
      "drillfile": "modules/287a823b-c43f-47be-b233-e898cc88536e.pdf>He Flared up at Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:13:12.83307'),
      "id": "b7652cf01cad47b2a3875da22798576e",
      "description": "CONVERSATION: HE FLARED",
      "audiofile": "modules/39b719e9-0096-438c-a7bc-4c5c10bfa179.mp3>flareupcomplete.mp3",
      "drillfile": "modules/287a823b-c43f-47be-b233-e898cc88536e.pdf>He Flared up at Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:13:12.83307'),
      "id": "b7652cf01cad47b2a3875da22798576e",
      "description": "CONVERSATION: HE FLARED",
      "audiofile": "modules/39b719e9-0096-438c-a7bc-4c5c10bfa179.mp3>flareupcomplete.mp3",
      "drillfile": "modules/287a823b-c43f-47be-b233-e898cc88536e.pdf>He Flared up at Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:13:12.83307'),
      "id": "b7652cf01cad47b2a3875da22798576e",
      "description": "CONVERSATION: HE FLARED",
      "audiofile": "modules/39b719e9-0096-438c-a7bc-4c5c10bfa179.mp3>flareupcomplete.mp3",
      "drillfile": "modules/287a823b-c43f-47be-b233-e898cc88536e.pdf>He Flared up at Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:13:12.83307'),
      "id": "b7652cf01cad47b2a3875da22798576e",
      "description": "CONVERSATION: HE FLARED",
      "audiofile": "modules/39b719e9-0096-438c-a7bc-4c5c10bfa179.mp3>flareupcomplete.mp3",
      "drillfile": "modules/287a823b-c43f-47be-b233-e898cc88536e.pdf>He Flared up at Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:13:12.83307'),
      "id": "b7652cf01cad47b2a3875da22798576e",
      "description": "CONVERSATION: HE FLARED",
      "audiofile": "modules/39b719e9-0096-438c-a7bc-4c5c10bfa179.mp3>flareupcomplete.mp3",
      "drillfile": "modules/287a823b-c43f-47be-b233-e898cc88536e.pdf>He Flared up at Me - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:13:23.394379'),
      "id": "5e02ab01005b443881788586d991d1e2",
      "description": "IPA PHONETICS 30",
      "audiofile": "modules/68026582-24a3-42d2-ba24-9bfa14844f89.mp3>30 noten.mp3",
      "drillfile": "modules/1c8e646f-dfe4-4b9b-b06f-0cebce825e0e.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:13:23.394379'),
      "id": "5e02ab01005b443881788586d991d1e2",
      "description": "IPA PHONETICS 30",
      "audiofile": "modules/68026582-24a3-42d2-ba24-9bfa14844f89.mp3>30 noten.mp3",
      "drillfile": "modules/1c8e646f-dfe4-4b9b-b06f-0cebce825e0e.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:13:23.394379'),
      "id": "5e02ab01005b443881788586d991d1e2",
      "description": "IPA PHONETICS 30",
      "audiofile": "modules/68026582-24a3-42d2-ba24-9bfa14844f89.mp3>30 noten.mp3",
      "drillfile": "modules/1c8e646f-dfe4-4b9b-b06f-0cebce825e0e.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:13:23.394379'),
      "id": "5e02ab01005b443881788586d991d1e2",
      "description": "IPA PHONETICS 30",
      "audiofile": "modules/68026582-24a3-42d2-ba24-9bfa14844f89.mp3>30 noten.mp3",
      "drillfile": "modules/1c8e646f-dfe4-4b9b-b06f-0cebce825e0e.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:13:23.394379'),
      "id": "5e02ab01005b443881788586d991d1e2",
      "description": "IPA PHONETICS 30",
      "audiofile": "modules/68026582-24a3-42d2-ba24-9bfa14844f89.mp3>30 noten.mp3",
      "drillfile": "modules/1c8e646f-dfe4-4b9b-b06f-0cebce825e0e.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:13:23.394379'),
      "id": "5e02ab01005b443881788586d991d1e2",
      "description": "IPA PHONETICS 30",
      "audiofile": "modules/68026582-24a3-42d2-ba24-9bfa14844f89.mp3>30 noten.mp3",
      "drillfile": "modules/1c8e646f-dfe4-4b9b-b06f-0cebce825e0e.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:13:36.652834'),
      "id": "c1f2beef553c4af498805cbe810b07cf",
      "description": "CONVERSATION: HE'S OUT TO LUNCH",
      "audiofile": "modules/b2c312fb-8c54-4907-97b6-39084797a981.mp3>lvmessage2com.mp3",
      "drillfile": "modules/67056fef-91f8-409b-bfa7-085f68ff2754.pdf>He_s Out to Lunch - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:13:36.652834'),
      "id": "c1f2beef553c4af498805cbe810b07cf",
      "description": "CONVERSATION: HE'S OUT TO LUNCH",
      "audiofile": "modules/b2c312fb-8c54-4907-97b6-39084797a981.mp3>lvmessage2com.mp3",
      "drillfile": "modules/67056fef-91f8-409b-bfa7-085f68ff2754.pdf>He_s Out to Lunch - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:13:36.652834'),
      "id": "c1f2beef553c4af498805cbe810b07cf",
      "description": "CONVERSATION: HE'S OUT TO LUNCH",
      "audiofile": "modules/b2c312fb-8c54-4907-97b6-39084797a981.mp3>lvmessage2com.mp3",
      "drillfile": "modules/67056fef-91f8-409b-bfa7-085f68ff2754.pdf>He_s Out to Lunch - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:13:36.652834'),
      "id": "c1f2beef553c4af498805cbe810b07cf",
      "description": "CONVERSATION: HE'S OUT TO LUNCH",
      "audiofile": "modules/b2c312fb-8c54-4907-97b6-39084797a981.mp3>lvmessage2com.mp3",
      "drillfile": "modules/67056fef-91f8-409b-bfa7-085f68ff2754.pdf>He_s Out to Lunch - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:13:36.652834'),
      "id": "c1f2beef553c4af498805cbe810b07cf",
      "description": "CONVERSATION: HE'S OUT TO LUNCH",
      "audiofile": "modules/b2c312fb-8c54-4907-97b6-39084797a981.mp3>lvmessage2com.mp3",
      "drillfile": "modules/67056fef-91f8-409b-bfa7-085f68ff2754.pdf>He_s Out to Lunch - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:13:36.652834'),
      "id": "c1f2beef553c4af498805cbe810b07cf",
      "description": "CONVERSATION: HE'S OUT TO LUNCH",
      "audiofile": "modules/b2c312fb-8c54-4907-97b6-39084797a981.mp3>lvmessage2com.mp3",
      "drillfile": "modules/67056fef-91f8-409b-bfa7-085f68ff2754.pdf>He_s Out to Lunch - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:13:57.692178'),
      "id": "c67d0d6a7a3f4deea90de6068ee6b21c",
      "description": "IPA PHONETICS 31",
      "audiofile": "modules/193d33ca-7db2-4b43-b6b0-9c494f41cfc3.mp3>31 singfinger.mp3",
      "drillfile": "modules/7d3a4e5b-37e0-4688-bf7b-5de65d0e9485.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:13:57.692178'),
      "id": "c67d0d6a7a3f4deea90de6068ee6b21c",
      "description": "IPA PHONETICS 31",
      "audiofile": "modules/193d33ca-7db2-4b43-b6b0-9c494f41cfc3.mp3>31 singfinger.mp3",
      "drillfile": "modules/7d3a4e5b-37e0-4688-bf7b-5de65d0e9485.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:13:57.692178'),
      "id": "c67d0d6a7a3f4deea90de6068ee6b21c",
      "description": "IPA PHONETICS 31",
      "audiofile": "modules/193d33ca-7db2-4b43-b6b0-9c494f41cfc3.mp3>31 singfinger.mp3",
      "drillfile": "modules/7d3a4e5b-37e0-4688-bf7b-5de65d0e9485.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:13:57.692178'),
      "id": "c67d0d6a7a3f4deea90de6068ee6b21c",
      "description": "IPA PHONETICS 31",
      "audiofile": "modules/193d33ca-7db2-4b43-b6b0-9c494f41cfc3.mp3>31 singfinger.mp3",
      "drillfile": "modules/7d3a4e5b-37e0-4688-bf7b-5de65d0e9485.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:13:57.692178'),
      "id": "c67d0d6a7a3f4deea90de6068ee6b21c",
      "description": "IPA PHONETICS 31",
      "audiofile": "modules/193d33ca-7db2-4b43-b6b0-9c494f41cfc3.mp3>31 singfinger.mp3",
      "drillfile": "modules/7d3a4e5b-37e0-4688-bf7b-5de65d0e9485.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:13:57.692178'),
      "id": "c67d0d6a7a3f4deea90de6068ee6b21c",
      "description": "IPA PHONETICS 31",
      "audiofile": "modules/193d33ca-7db2-4b43-b6b0-9c494f41cfc3.mp3>31 singfinger.mp3",
      "drillfile": "modules/7d3a4e5b-37e0-4688-bf7b-5de65d0e9485.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:01.917046'),
      "id": "09858151b8204661aab76680e5b9436e",
      "description": "CONVERSATION: HEALTH",
      "audiofile": "modules/d1d09eb6-bb16-439c-8841-d208dc93518e.mp3>onadiet_complete.mp3",
      "drillfile": "modules/6763c8a6-8a69-45d8-858a-0f7711b2db5b.pdf>Health.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:01.917046'),
      "id": "09858151b8204661aab76680e5b9436e",
      "description": "CONVERSATION: HEALTH",
      "audiofile": "modules/d1d09eb6-bb16-439c-8841-d208dc93518e.mp3>onadiet_complete.mp3",
      "drillfile": "modules/6763c8a6-8a69-45d8-858a-0f7711b2db5b.pdf>Health.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:01.917046'),
      "id": "09858151b8204661aab76680e5b9436e",
      "description": "CONVERSATION: HEALTH",
      "audiofile": "modules/d1d09eb6-bb16-439c-8841-d208dc93518e.mp3>onadiet_complete.mp3",
      "drillfile": "modules/6763c8a6-8a69-45d8-858a-0f7711b2db5b.pdf>Health.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:01.917046'),
      "id": "09858151b8204661aab76680e5b9436e",
      "description": "CONVERSATION: HEALTH",
      "audiofile": "modules/d1d09eb6-bb16-439c-8841-d208dc93518e.mp3>onadiet_complete.mp3",
      "drillfile": "modules/6763c8a6-8a69-45d8-858a-0f7711b2db5b.pdf>Health.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:01.917046'),
      "id": "09858151b8204661aab76680e5b9436e",
      "description": "CONVERSATION: HEALTH",
      "audiofile": "modules/d1d09eb6-bb16-439c-8841-d208dc93518e.mp3>onadiet_complete.mp3",
      "drillfile": "modules/6763c8a6-8a69-45d8-858a-0f7711b2db5b.pdf>Health.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:01.917046'),
      "id": "09858151b8204661aab76680e5b9436e",
      "description": "CONVERSATION: HEALTH",
      "audiofile": "modules/d1d09eb6-bb16-439c-8841-d208dc93518e.mp3>onadiet_complete.mp3",
      "drillfile": "modules/6763c8a6-8a69-45d8-858a-0f7711b2db5b.pdf>Health.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:21.998731'),
      "id": "a286d4c9c0aa420780ab57350a3b2ded",
      "description": "CONVERSATION: HEAT",
      "audiofile": "modules/c6930902-40c1-4cb9-99b6-aad45bf2cb00.mp3>toastycomplete.mp3",
      "drillfile": "modules/e8719b7c-6aeb-46d8-a226-bf5d5794ee84.pdf>Oh, the heat is unbearable.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:21.998731'),
      "id": "a286d4c9c0aa420780ab57350a3b2ded",
      "description": "CONVERSATION: HEAT",
      "audiofile": "modules/c6930902-40c1-4cb9-99b6-aad45bf2cb00.mp3>toastycomplete.mp3",
      "drillfile": "modules/e8719b7c-6aeb-46d8-a226-bf5d5794ee84.pdf>Oh, the heat is unbearable.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:21.998731'),
      "id": "a286d4c9c0aa420780ab57350a3b2ded",
      "description": "CONVERSATION: HEAT",
      "audiofile": "modules/c6930902-40c1-4cb9-99b6-aad45bf2cb00.mp3>toastycomplete.mp3",
      "drillfile": "modules/e8719b7c-6aeb-46d8-a226-bf5d5794ee84.pdf>Oh, the heat is unbearable.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:21.998731'),
      "id": "a286d4c9c0aa420780ab57350a3b2ded",
      "description": "CONVERSATION: HEAT",
      "audiofile": "modules/c6930902-40c1-4cb9-99b6-aad45bf2cb00.mp3>toastycomplete.mp3",
      "drillfile": "modules/e8719b7c-6aeb-46d8-a226-bf5d5794ee84.pdf>Oh, the heat is unbearable.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:21.998731'),
      "id": "a286d4c9c0aa420780ab57350a3b2ded",
      "description": "CONVERSATION: HEAT",
      "audiofile": "modules/c6930902-40c1-4cb9-99b6-aad45bf2cb00.mp3>toastycomplete.mp3",
      "drillfile": "modules/e8719b7c-6aeb-46d8-a226-bf5d5794ee84.pdf>Oh, the heat is unbearable.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:21.998731'),
      "id": "a286d4c9c0aa420780ab57350a3b2ded",
      "description": "CONVERSATION: HEAT",
      "audiofile": "modules/c6930902-40c1-4cb9-99b6-aad45bf2cb00.mp3>toastycomplete.mp3",
      "drillfile": "modules/e8719b7c-6aeb-46d8-a226-bf5d5794ee84.pdf>Oh, the heat is unbearable.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:14:41.010971'),
      "id": "2ef507e4cba646a58814b034e7ca51c5",
      "description": "IPA PHONETICS 32",
      "audiofile": "modules/d0fc17d3-0afa-4a00-b9e6-3fd184f50997.mp3>32 petmap.mp3",
      "drillfile": "modules/789823af-f74b-4666-a112-31e3b12eee19.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:14:41.010971'),
      "id": "2ef507e4cba646a58814b034e7ca51c5",
      "description": "IPA PHONETICS 32",
      "audiofile": "modules/d0fc17d3-0afa-4a00-b9e6-3fd184f50997.mp3>32 petmap.mp3",
      "drillfile": "modules/789823af-f74b-4666-a112-31e3b12eee19.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:14:41.010971'),
      "id": "2ef507e4cba646a58814b034e7ca51c5",
      "description": "IPA PHONETICS 32",
      "audiofile": "modules/d0fc17d3-0afa-4a00-b9e6-3fd184f50997.mp3>32 petmap.mp3",
      "drillfile": "modules/789823af-f74b-4666-a112-31e3b12eee19.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:14:41.010971'),
      "id": "2ef507e4cba646a58814b034e7ca51c5",
      "description": "IPA PHONETICS 32",
      "audiofile": "modules/d0fc17d3-0afa-4a00-b9e6-3fd184f50997.mp3>32 petmap.mp3",
      "drillfile": "modules/789823af-f74b-4666-a112-31e3b12eee19.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:14:41.010971'),
      "id": "2ef507e4cba646a58814b034e7ca51c5",
      "description": "IPA PHONETICS 32",
      "audiofile": "modules/d0fc17d3-0afa-4a00-b9e6-3fd184f50997.mp3>32 petmap.mp3",
      "drillfile": "modules/789823af-f74b-4666-a112-31e3b12eee19.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:14:41.010971'),
      "id": "2ef507e4cba646a58814b034e7ca51c5",
      "description": "IPA PHONETICS 32",
      "audiofile": "modules/d0fc17d3-0afa-4a00-b9e6-3fd184f50997.mp3>32 petmap.mp3",
      "drillfile": "modules/789823af-f74b-4666-a112-31e3b12eee19.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:43.903025'),
      "id": "fe6be7dc36a2410ab5977bcce33334cf",
      "description": "CONVERSATION: HEAVY WORKLOAD",
      "audiofile": "modules/cb00005f-a2af-436c-900f-3959bea19ada.mp3>overwhelmedcomplete.mp3",
      "drillfile": "modules/539a5829-6444-4448-b37e-a4f39e1cb912.pdf>I_m overwhelmed with a heavy workload.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:43.903025'),
      "id": "fe6be7dc36a2410ab5977bcce33334cf",
      "description": "CONVERSATION: HEAVY WORKLOAD",
      "audiofile": "modules/cb00005f-a2af-436c-900f-3959bea19ada.mp3>overwhelmedcomplete.mp3",
      "drillfile": "modules/539a5829-6444-4448-b37e-a4f39e1cb912.pdf>I_m overwhelmed with a heavy workload.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:43.903025'),
      "id": "fe6be7dc36a2410ab5977bcce33334cf",
      "description": "CONVERSATION: HEAVY WORKLOAD",
      "audiofile": "modules/cb00005f-a2af-436c-900f-3959bea19ada.mp3>overwhelmedcomplete.mp3",
      "drillfile": "modules/539a5829-6444-4448-b37e-a4f39e1cb912.pdf>I_m overwhelmed with a heavy workload.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:43.903025'),
      "id": "fe6be7dc36a2410ab5977bcce33334cf",
      "description": "CONVERSATION: HEAVY WORKLOAD",
      "audiofile": "modules/cb00005f-a2af-436c-900f-3959bea19ada.mp3>overwhelmedcomplete.mp3",
      "drillfile": "modules/539a5829-6444-4448-b37e-a4f39e1cb912.pdf>I_m overwhelmed with a heavy workload.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:43.903025'),
      "id": "fe6be7dc36a2410ab5977bcce33334cf",
      "description": "CONVERSATION: HEAVY WORKLOAD",
      "audiofile": "modules/cb00005f-a2af-436c-900f-3959bea19ada.mp3>overwhelmedcomplete.mp3",
      "drillfile": "modules/539a5829-6444-4448-b37e-a4f39e1cb912.pdf>I_m overwhelmed with a heavy workload.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:14:43.903025'),
      "id": "fe6be7dc36a2410ab5977bcce33334cf",
      "description": "CONVERSATION: HEAVY WORKLOAD",
      "audiofile": "modules/cb00005f-a2af-436c-900f-3959bea19ada.mp3>overwhelmedcomplete.mp3",
      "drillfile": "modules/539a5829-6444-4448-b37e-a4f39e1cb912.pdf>I_m overwhelmed with a heavy workload.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:15:05.436095'),
      "id": "24f20c8a7ef649689e9e7d96686fc259",
      "description": "CONVERSATION: HER SKIN",
      "audiofile": "modules/ee2352de-c222-4f87-93a7-ae3d63155143.mp3>babysmoothcomplete.mp3",
      "drillfile": "modules/aa23ebed-44e6-4e5b-9bb4-bd283b831e78.pdf>Her Skin Looks So Baby Smooth - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:15:05.436095'),
      "id": "24f20c8a7ef649689e9e7d96686fc259",
      "description": "CONVERSATION: HER SKIN",
      "audiofile": "modules/ee2352de-c222-4f87-93a7-ae3d63155143.mp3>babysmoothcomplete.mp3",
      "drillfile": "modules/aa23ebed-44e6-4e5b-9bb4-bd283b831e78.pdf>Her Skin Looks So Baby Smooth - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:15:05.436095'),
      "id": "24f20c8a7ef649689e9e7d96686fc259",
      "description": "CONVERSATION: HER SKIN",
      "audiofile": "modules/ee2352de-c222-4f87-93a7-ae3d63155143.mp3>babysmoothcomplete.mp3",
      "drillfile": "modules/aa23ebed-44e6-4e5b-9bb4-bd283b831e78.pdf>Her Skin Looks So Baby Smooth - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:15:05.436095'),
      "id": "24f20c8a7ef649689e9e7d96686fc259",
      "description": "CONVERSATION: HER SKIN",
      "audiofile": "modules/ee2352de-c222-4f87-93a7-ae3d63155143.mp3>babysmoothcomplete.mp3",
      "drillfile": "modules/aa23ebed-44e6-4e5b-9bb4-bd283b831e78.pdf>Her Skin Looks So Baby Smooth - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:15:05.436095'),
      "id": "24f20c8a7ef649689e9e7d96686fc259",
      "description": "CONVERSATION: HER SKIN",
      "audiofile": "modules/ee2352de-c222-4f87-93a7-ae3d63155143.mp3>babysmoothcomplete.mp3",
      "drillfile": "modules/aa23ebed-44e6-4e5b-9bb4-bd283b831e78.pdf>Her Skin Looks So Baby Smooth - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:15:05.436095'),
      "id": "24f20c8a7ef649689e9e7d96686fc259",
      "description": "CONVERSATION: HER SKIN",
      "audiofile": "modules/ee2352de-c222-4f87-93a7-ae3d63155143.mp3>babysmoothcomplete.mp3",
      "drillfile": "modules/aa23ebed-44e6-4e5b-9bb4-bd283b831e78.pdf>Her Skin Looks So Baby Smooth - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:15:24.463248'),
      "id": "3aea768197ef4005801f180d42f5a110",
      "description": "IPA PHONETICS 33",
      "audiofile": "modules/d341239f-3e35-43b6-b419-82d9310d3115.mp3>33 redtry.mp3",
      "drillfile": "modules/4644dece-e916-47d6-90cf-bbaa72087788.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:15:24.463248'),
      "id": "3aea768197ef4005801f180d42f5a110",
      "description": "IPA PHONETICS 33",
      "audiofile": "modules/d341239f-3e35-43b6-b419-82d9310d3115.mp3>33 redtry.mp3",
      "drillfile": "modules/4644dece-e916-47d6-90cf-bbaa72087788.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:15:24.463248'),
      "id": "3aea768197ef4005801f180d42f5a110",
      "description": "IPA PHONETICS 33",
      "audiofile": "modules/d341239f-3e35-43b6-b419-82d9310d3115.mp3>33 redtry.mp3",
      "drillfile": "modules/4644dece-e916-47d6-90cf-bbaa72087788.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:15:24.463248'),
      "id": "3aea768197ef4005801f180d42f5a110",
      "description": "IPA PHONETICS 33",
      "audiofile": "modules/d341239f-3e35-43b6-b419-82d9310d3115.mp3>33 redtry.mp3",
      "drillfile": "modules/4644dece-e916-47d6-90cf-bbaa72087788.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:15:24.463248'),
      "id": "3aea768197ef4005801f180d42f5a110",
      "description": "IPA PHONETICS 33",
      "audiofile": "modules/d341239f-3e35-43b6-b419-82d9310d3115.mp3>33 redtry.mp3",
      "drillfile": "modules/4644dece-e916-47d6-90cf-bbaa72087788.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:15:24.463248'),
      "id": "3aea768197ef4005801f180d42f5a110",
      "description": "IPA PHONETICS 33",
      "audiofile": "modules/d341239f-3e35-43b6-b419-82d9310d3115.mp3>33 redtry.mp3",
      "drillfile": "modules/4644dece-e916-47d6-90cf-bbaa72087788.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:15:45.446309'),
      "id": "8a316130b0f4491393257f70931dec19",
      "description": "CONVERSATION: HIVES",
      "audiofile": "modules/b2c26631-0df4-4312-b924-89a4e407dc17.mp3>hivescomp.mp3",
      "drillfile": "modules/75ffb4bf-17e1-43a4-aabc-7b987a5b7bda.pdf>I Think School Is Giving Me Hives.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:15:45.446309'),
      "id": "8a316130b0f4491393257f70931dec19",
      "description": "CONVERSATION: HIVES",
      "audiofile": "modules/b2c26631-0df4-4312-b924-89a4e407dc17.mp3>hivescomp.mp3",
      "drillfile": "modules/75ffb4bf-17e1-43a4-aabc-7b987a5b7bda.pdf>I Think School Is Giving Me Hives.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:15:45.446309'),
      "id": "8a316130b0f4491393257f70931dec19",
      "description": "CONVERSATION: HIVES",
      "audiofile": "modules/b2c26631-0df4-4312-b924-89a4e407dc17.mp3>hivescomp.mp3",
      "drillfile": "modules/75ffb4bf-17e1-43a4-aabc-7b987a5b7bda.pdf>I Think School Is Giving Me Hives.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:15:45.446309'),
      "id": "8a316130b0f4491393257f70931dec19",
      "description": "CONVERSATION: HIVES",
      "audiofile": "modules/b2c26631-0df4-4312-b924-89a4e407dc17.mp3>hivescomp.mp3",
      "drillfile": "modules/75ffb4bf-17e1-43a4-aabc-7b987a5b7bda.pdf>I Think School Is Giving Me Hives.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:15:45.446309'),
      "id": "8a316130b0f4491393257f70931dec19",
      "description": "CONVERSATION: HIVES",
      "audiofile": "modules/b2c26631-0df4-4312-b924-89a4e407dc17.mp3>hivescomp.mp3",
      "drillfile": "modules/75ffb4bf-17e1-43a4-aabc-7b987a5b7bda.pdf>I Think School Is Giving Me Hives.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:15:45.446309'),
      "id": "8a316130b0f4491393257f70931dec19",
      "description": "CONVERSATION: HIVES",
      "audiofile": "modules/b2c26631-0df4-4312-b924-89a4e407dc17.mp3>hivescomp.mp3",
      "drillfile": "modules/75ffb4bf-17e1-43a4-aabc-7b987a5b7bda.pdf>I Think School Is Giving Me Hives.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:16:10.466961'),
      "id": "4cad955f724d4f0dbf08e86bdcd8c63d",
      "description": "CONVERSATION: HONESTY IS THE BEST POLICY",
      "audiofile": "modules/c21ffc1b-dcc5-4e9a-8217-2b563acd5cde.mp3>honestycomplete.mp3",
      "drillfile": "modules/1d31b531-5d78-4279-8e4e-c3f115b953db.pdf>Honesty is the best policy - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:16:10.466961'),
      "id": "4cad955f724d4f0dbf08e86bdcd8c63d",
      "description": "CONVERSATION: HONESTY IS THE BEST POLICY",
      "audiofile": "modules/c21ffc1b-dcc5-4e9a-8217-2b563acd5cde.mp3>honestycomplete.mp3",
      "drillfile": "modules/1d31b531-5d78-4279-8e4e-c3f115b953db.pdf>Honesty is the best policy - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:16:10.466961'),
      "id": "4cad955f724d4f0dbf08e86bdcd8c63d",
      "description": "CONVERSATION: HONESTY IS THE BEST POLICY",
      "audiofile": "modules/c21ffc1b-dcc5-4e9a-8217-2b563acd5cde.mp3>honestycomplete.mp3",
      "drillfile": "modules/1d31b531-5d78-4279-8e4e-c3f115b953db.pdf>Honesty is the best policy - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:16:10.466961'),
      "id": "4cad955f724d4f0dbf08e86bdcd8c63d",
      "description": "CONVERSATION: HONESTY IS THE BEST POLICY",
      "audiofile": "modules/c21ffc1b-dcc5-4e9a-8217-2b563acd5cde.mp3>honestycomplete.mp3",
      "drillfile": "modules/1d31b531-5d78-4279-8e4e-c3f115b953db.pdf>Honesty is the best policy - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:16:10.466961'),
      "id": "4cad955f724d4f0dbf08e86bdcd8c63d",
      "description": "CONVERSATION: HONESTY IS THE BEST POLICY",
      "audiofile": "modules/c21ffc1b-dcc5-4e9a-8217-2b563acd5cde.mp3>honestycomplete.mp3",
      "drillfile": "modules/1d31b531-5d78-4279-8e4e-c3f115b953db.pdf>Honesty is the best policy - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:16:10.466961'),
      "id": "4cad955f724d4f0dbf08e86bdcd8c63d",
      "description": "CONVERSATION: HONESTY IS THE BEST POLICY",
      "audiofile": "modules/c21ffc1b-dcc5-4e9a-8217-2b563acd5cde.mp3>honestycomplete.mp3",
      "drillfile": "modules/1d31b531-5d78-4279-8e4e-c3f115b953db.pdf>Honesty is the best policy - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:17:29.673103'),
      "id": "abbaebc9f19d41debdf99c55043b8340",
      "description": "IPA PHONETICS 34",
      "audiofile": "modules/af7095be-9ca1-4148-9c5e-e82e11c4627f.mp3>34 sunmiss.mp3",
      "drillfile": "modules/613410d2-9ffd-4101-976c-8d2e216ea3ac.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:17:29.673103'),
      "id": "abbaebc9f19d41debdf99c55043b8340",
      "description": "IPA PHONETICS 34",
      "audiofile": "modules/af7095be-9ca1-4148-9c5e-e82e11c4627f.mp3>34 sunmiss.mp3",
      "drillfile": "modules/613410d2-9ffd-4101-976c-8d2e216ea3ac.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:17:29.673103'),
      "id": "abbaebc9f19d41debdf99c55043b8340",
      "description": "IPA PHONETICS 34",
      "audiofile": "modules/af7095be-9ca1-4148-9c5e-e82e11c4627f.mp3>34 sunmiss.mp3",
      "drillfile": "modules/613410d2-9ffd-4101-976c-8d2e216ea3ac.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:17:29.673103'),
      "id": "abbaebc9f19d41debdf99c55043b8340",
      "description": "IPA PHONETICS 34",
      "audiofile": "modules/af7095be-9ca1-4148-9c5e-e82e11c4627f.mp3>34 sunmiss.mp3",
      "drillfile": "modules/613410d2-9ffd-4101-976c-8d2e216ea3ac.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:17:29.673103'),
      "id": "abbaebc9f19d41debdf99c55043b8340",
      "description": "IPA PHONETICS 34",
      "audiofile": "modules/af7095be-9ca1-4148-9c5e-e82e11c4627f.mp3>34 sunmiss.mp3",
      "drillfile": "modules/613410d2-9ffd-4101-976c-8d2e216ea3ac.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:17:29.673103'),
      "id": "abbaebc9f19d41debdf99c55043b8340",
      "description": "IPA PHONETICS 34",
      "audiofile": "modules/af7095be-9ca1-4148-9c5e-e82e11c4627f.mp3>34 sunmiss.mp3",
      "drillfile": "modules/613410d2-9ffd-4101-976c-8d2e216ea3ac.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:18:02.607062'),
      "id": "9ce20bf05cc34cadace6f3eed9931eb1",
      "description": "IPA PHONETICS 35",
      "audiofile": "modules/52a4f487-7aef-4e02-88a8-3f8e7eadb446.mp3>35 shecrash.mp3",
      "drillfile": "modules/9f704364-a8d5-4eb5-a9b9-35f05c2541c4.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:18:02.607062'),
      "id": "9ce20bf05cc34cadace6f3eed9931eb1",
      "description": "IPA PHONETICS 35",
      "audiofile": "modules/52a4f487-7aef-4e02-88a8-3f8e7eadb446.mp3>35 shecrash.mp3",
      "drillfile": "modules/9f704364-a8d5-4eb5-a9b9-35f05c2541c4.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:18:02.607062'),
      "id": "9ce20bf05cc34cadace6f3eed9931eb1",
      "description": "IPA PHONETICS 35",
      "audiofile": "modules/52a4f487-7aef-4e02-88a8-3f8e7eadb446.mp3>35 shecrash.mp3",
      "drillfile": "modules/9f704364-a8d5-4eb5-a9b9-35f05c2541c4.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:18:02.607062'),
      "id": "9ce20bf05cc34cadace6f3eed9931eb1",
      "description": "IPA PHONETICS 35",
      "audiofile": "modules/52a4f487-7aef-4e02-88a8-3f8e7eadb446.mp3>35 shecrash.mp3",
      "drillfile": "modules/9f704364-a8d5-4eb5-a9b9-35f05c2541c4.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:18:02.607062'),
      "id": "9ce20bf05cc34cadace6f3eed9931eb1",
      "description": "IPA PHONETICS 35",
      "audiofile": "modules/52a4f487-7aef-4e02-88a8-3f8e7eadb446.mp3>35 shecrash.mp3",
      "drillfile": "modules/9f704364-a8d5-4eb5-a9b9-35f05c2541c4.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:18:02.607062'),
      "id": "9ce20bf05cc34cadace6f3eed9931eb1",
      "description": "IPA PHONETICS 35",
      "audiofile": "modules/52a4f487-7aef-4e02-88a8-3f8e7eadb446.mp3>35 shecrash.mp3",
      "drillfile": "modules/9f704364-a8d5-4eb5-a9b9-35f05c2541c4.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:10:21.011142'),
      "id": "3dbdc832da5f48898f5767e38b6b0573",
      "description": "Peter Piper",
      "audiofile": "modules/8f8c5b63-d7ac-4ac8-ae99-58c3243d458e.mp3>peterpiper (1).mp3",
      "drillfile": "modules/df40d549-b264-4d15-9c96-b036713dd76c.pdf>PETER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:10:21.011142'),
      "id": "3dbdc832da5f48898f5767e38b6b0573",
      "description": "Peter Piper",
      "audiofile": "modules/8f8c5b63-d7ac-4ac8-ae99-58c3243d458e.mp3>peterpiper (1).mp3",
      "drillfile": "modules/df40d549-b264-4d15-9c96-b036713dd76c.pdf>PETER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:10:21.011142'),
      "id": "3dbdc832da5f48898f5767e38b6b0573",
      "description": "Peter Piper",
      "audiofile": "modules/8f8c5b63-d7ac-4ac8-ae99-58c3243d458e.mp3>peterpiper (1).mp3",
      "drillfile": "modules/df40d549-b264-4d15-9c96-b036713dd76c.pdf>PETER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:10:21.011142'),
      "id": "3dbdc832da5f48898f5767e38b6b0573",
      "description": "Peter Piper",
      "audiofile": "modules/8f8c5b63-d7ac-4ac8-ae99-58c3243d458e.mp3>peterpiper (1).mp3",
      "drillfile": "modules/df40d549-b264-4d15-9c96-b036713dd76c.pdf>PETER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:10:21.011142'),
      "id": "3dbdc832da5f48898f5767e38b6b0573",
      "description": "Peter Piper",
      "audiofile": "modules/8f8c5b63-d7ac-4ac8-ae99-58c3243d458e.mp3>peterpiper (1).mp3",
      "drillfile": "modules/df40d549-b264-4d15-9c96-b036713dd76c.pdf>PETER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:10:21.011142'),
      "id": "3dbdc832da5f48898f5767e38b6b0573",
      "description": "Peter Piper",
      "audiofile": "modules/8f8c5b63-d7ac-4ac8-ae99-58c3243d458e.mp3>peterpiper (1).mp3",
      "drillfile": "modules/df40d549-b264-4d15-9c96-b036713dd76c.pdf>PETER.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:18:07.466232'),
      "id": "17112b35a585423cb8826803e55a2d6c",
      "description": "CONVERSATION: HOW OFTEN DO YOU EAT OUT?",
      "audiofile": "modules/b8fd6c48-5c19-4f39-9bd4-9291cb2c9942.mp3>eatoutcomplete.mp3",
      "drillfile": "modules/da99dc63-4fea-44a7-b9b9-0821a1fe2792.pdf>How Often Do You Eat Out - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:18:07.466232'),
      "id": "17112b35a585423cb8826803e55a2d6c",
      "description": "CONVERSATION: HOW OFTEN DO YOU EAT OUT?",
      "audiofile": "modules/b8fd6c48-5c19-4f39-9bd4-9291cb2c9942.mp3>eatoutcomplete.mp3",
      "drillfile": "modules/da99dc63-4fea-44a7-b9b9-0821a1fe2792.pdf>How Often Do You Eat Out - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:18:07.466232'),
      "id": "17112b35a585423cb8826803e55a2d6c",
      "description": "CONVERSATION: HOW OFTEN DO YOU EAT OUT?",
      "audiofile": "modules/b8fd6c48-5c19-4f39-9bd4-9291cb2c9942.mp3>eatoutcomplete.mp3",
      "drillfile": "modules/da99dc63-4fea-44a7-b9b9-0821a1fe2792.pdf>How Often Do You Eat Out - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:18:07.466232'),
      "id": "17112b35a585423cb8826803e55a2d6c",
      "description": "CONVERSATION: HOW OFTEN DO YOU EAT OUT?",
      "audiofile": "modules/b8fd6c48-5c19-4f39-9bd4-9291cb2c9942.mp3>eatoutcomplete.mp3",
      "drillfile": "modules/da99dc63-4fea-44a7-b9b9-0821a1fe2792.pdf>How Often Do You Eat Out - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:18:07.466232'),
      "id": "17112b35a585423cb8826803e55a2d6c",
      "description": "CONVERSATION: HOW OFTEN DO YOU EAT OUT?",
      "audiofile": "modules/b8fd6c48-5c19-4f39-9bd4-9291cb2c9942.mp3>eatoutcomplete.mp3",
      "drillfile": "modules/da99dc63-4fea-44a7-b9b9-0821a1fe2792.pdf>How Often Do You Eat Out - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:18:07.466232'),
      "id": "17112b35a585423cb8826803e55a2d6c",
      "description": "CONVERSATION: HOW OFTEN DO YOU EAT OUT?",
      "audiofile": "modules/b8fd6c48-5c19-4f39-9bd4-9291cb2c9942.mp3>eatoutcomplete.mp3",
      "drillfile": "modules/da99dc63-4fea-44a7-b9b9-0821a1fe2792.pdf>How Often Do You Eat Out - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:18:36.520638'),
      "id": "dff3949940cd4901b8e99e610f216336",
      "description": "CONVERSATION: I CAN'T STAND HIM ANY LONGER",
      "audiofile": "modules/2826b119-9296-44c1-a688-e3fb17fbc09b.mp3>cantstandcomplete.mp3",
      "drillfile": "modules/7f342cd7-6d22-4ad0-9eba-2702aaccaf00.pdf>I Can_t Stand Him Any Longer - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:18:36.520638'),
      "id": "dff3949940cd4901b8e99e610f216336",
      "description": "CONVERSATION: I CAN'T STAND HIM ANY LONGER",
      "audiofile": "modules/2826b119-9296-44c1-a688-e3fb17fbc09b.mp3>cantstandcomplete.mp3",
      "drillfile": "modules/7f342cd7-6d22-4ad0-9eba-2702aaccaf00.pdf>I Can_t Stand Him Any Longer - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:18:36.520638'),
      "id": "dff3949940cd4901b8e99e610f216336",
      "description": "CONVERSATION: I CAN'T STAND HIM ANY LONGER",
      "audiofile": "modules/2826b119-9296-44c1-a688-e3fb17fbc09b.mp3>cantstandcomplete.mp3",
      "drillfile": "modules/7f342cd7-6d22-4ad0-9eba-2702aaccaf00.pdf>I Can_t Stand Him Any Longer - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:18:36.520638'),
      "id": "dff3949940cd4901b8e99e610f216336",
      "description": "CONVERSATION: I CAN'T STAND HIM ANY LONGER",
      "audiofile": "modules/2826b119-9296-44c1-a688-e3fb17fbc09b.mp3>cantstandcomplete.mp3",
      "drillfile": "modules/7f342cd7-6d22-4ad0-9eba-2702aaccaf00.pdf>I Can_t Stand Him Any Longer - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:18:36.520638'),
      "id": "dff3949940cd4901b8e99e610f216336",
      "description": "CONVERSATION: I CAN'T STAND HIM ANY LONGER",
      "audiofile": "modules/2826b119-9296-44c1-a688-e3fb17fbc09b.mp3>cantstandcomplete.mp3",
      "drillfile": "modules/7f342cd7-6d22-4ad0-9eba-2702aaccaf00.pdf>I Can_t Stand Him Any Longer - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:18:36.520638'),
      "id": "dff3949940cd4901b8e99e610f216336",
      "description": "CONVERSATION: I CAN'T STAND HIM ANY LONGER",
      "audiofile": "modules/2826b119-9296-44c1-a688-e3fb17fbc09b.mp3>cantstandcomplete.mp3",
      "drillfile": "modules/7f342cd7-6d22-4ad0-9eba-2702aaccaf00.pdf>I Can_t Stand Him Any Longer - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:18:56.271626'),
      "id": "898889c861664bf6af6b3d0a47ca0387",
      "description": "IPA PHONETICS 36",
      "audiofile": "modules/6ce2360b-ba39-4bda-84a1-d46916355fc6.mp3>36 teagetting.mp3",
      "drillfile": "modules/1bb675e2-76d8-44d5-8d96-b1a4754f7f51.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:18:56.271626'),
      "id": "898889c861664bf6af6b3d0a47ca0387",
      "description": "IPA PHONETICS 36",
      "audiofile": "modules/6ce2360b-ba39-4bda-84a1-d46916355fc6.mp3>36 teagetting.mp3",
      "drillfile": "modules/1bb675e2-76d8-44d5-8d96-b1a4754f7f51.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:18:56.271626'),
      "id": "898889c861664bf6af6b3d0a47ca0387",
      "description": "IPA PHONETICS 36",
      "audiofile": "modules/6ce2360b-ba39-4bda-84a1-d46916355fc6.mp3>36 teagetting.mp3",
      "drillfile": "modules/1bb675e2-76d8-44d5-8d96-b1a4754f7f51.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:18:56.271626'),
      "id": "898889c861664bf6af6b3d0a47ca0387",
      "description": "IPA PHONETICS 36",
      "audiofile": "modules/6ce2360b-ba39-4bda-84a1-d46916355fc6.mp3>36 teagetting.mp3",
      "drillfile": "modules/1bb675e2-76d8-44d5-8d96-b1a4754f7f51.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:18:56.271626'),
      "id": "898889c861664bf6af6b3d0a47ca0387",
      "description": "IPA PHONETICS 36",
      "audiofile": "modules/6ce2360b-ba39-4bda-84a1-d46916355fc6.mp3>36 teagetting.mp3",
      "drillfile": "modules/1bb675e2-76d8-44d5-8d96-b1a4754f7f51.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:18:56.271626'),
      "id": "898889c861664bf6af6b3d0a47ca0387",
      "description": "IPA PHONETICS 36",
      "audiofile": "modules/6ce2360b-ba39-4bda-84a1-d46916355fc6.mp3>36 teagetting.mp3",
      "drillfile": "modules/1bb675e2-76d8-44d5-8d96-b1a4754f7f51.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:19:05.084466'),
      "id": "f26f6903e6834df0bd66b8535fedd856",
      "description": "CONVERSATION: I COULDN'T HELP IT",
      "audiofile": "modules/f52221d1-afe8-4e6e-89ce-6a99eeb779d3.mp3>couldnthelpitcomplete.mp3",
      "drillfile": "modules/caba3e4d-d6cf-43ba-a54f-479885210cb7.pdf>I couldn_t help it - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:19:05.084466'),
      "id": "f26f6903e6834df0bd66b8535fedd856",
      "description": "CONVERSATION: I COULDN'T HELP IT",
      "audiofile": "modules/f52221d1-afe8-4e6e-89ce-6a99eeb779d3.mp3>couldnthelpitcomplete.mp3",
      "drillfile": "modules/caba3e4d-d6cf-43ba-a54f-479885210cb7.pdf>I couldn_t help it - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:19:05.084466'),
      "id": "f26f6903e6834df0bd66b8535fedd856",
      "description": "CONVERSATION: I COULDN'T HELP IT",
      "audiofile": "modules/f52221d1-afe8-4e6e-89ce-6a99eeb779d3.mp3>couldnthelpitcomplete.mp3",
      "drillfile": "modules/caba3e4d-d6cf-43ba-a54f-479885210cb7.pdf>I couldn_t help it - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:19:05.084466'),
      "id": "f26f6903e6834df0bd66b8535fedd856",
      "description": "CONVERSATION: I COULDN'T HELP IT",
      "audiofile": "modules/f52221d1-afe8-4e6e-89ce-6a99eeb779d3.mp3>couldnthelpitcomplete.mp3",
      "drillfile": "modules/caba3e4d-d6cf-43ba-a54f-479885210cb7.pdf>I couldn_t help it - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:19:05.084466'),
      "id": "f26f6903e6834df0bd66b8535fedd856",
      "description": "CONVERSATION: I COULDN'T HELP IT",
      "audiofile": "modules/f52221d1-afe8-4e6e-89ce-6a99eeb779d3.mp3>couldnthelpitcomplete.mp3",
      "drillfile": "modules/caba3e4d-d6cf-43ba-a54f-479885210cb7.pdf>I couldn_t help it - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:19:05.084466'),
      "id": "f26f6903e6834df0bd66b8535fedd856",
      "description": "CONVERSATION: I COULDN'T HELP IT",
      "audiofile": "modules/f52221d1-afe8-4e6e-89ce-6a99eeb779d3.mp3>couldnthelpitcomplete.mp3",
      "drillfile": "modules/caba3e4d-d6cf-43ba-a54f-479885210cb7.pdf>I couldn_t help it - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:19:22.969119'),
      "id": "d9b02ba867a3498a8b07081a88ee9230",
      "description": "IPA PHONETICS 37",
      "audiofile": "modules/ef15c003-0c23-41c8-93a5-71217a146c4a.mp3>37 checkchurch.mp3",
      "drillfile": "modules/5a85734c-d249-42fa-a2a2-1dcdcc2dda92.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:19:22.969119'),
      "id": "d9b02ba867a3498a8b07081a88ee9230",
      "description": "IPA PHONETICS 37",
      "audiofile": "modules/ef15c003-0c23-41c8-93a5-71217a146c4a.mp3>37 checkchurch.mp3",
      "drillfile": "modules/5a85734c-d249-42fa-a2a2-1dcdcc2dda92.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:19:22.969119'),
      "id": "d9b02ba867a3498a8b07081a88ee9230",
      "description": "IPA PHONETICS 37",
      "audiofile": "modules/ef15c003-0c23-41c8-93a5-71217a146c4a.mp3>37 checkchurch.mp3",
      "drillfile": "modules/5a85734c-d249-42fa-a2a2-1dcdcc2dda92.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:19:22.969119'),
      "id": "d9b02ba867a3498a8b07081a88ee9230",
      "description": "IPA PHONETICS 37",
      "audiofile": "modules/ef15c003-0c23-41c8-93a5-71217a146c4a.mp3>37 checkchurch.mp3",
      "drillfile": "modules/5a85734c-d249-42fa-a2a2-1dcdcc2dda92.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:19:22.969119'),
      "id": "d9b02ba867a3498a8b07081a88ee9230",
      "description": "IPA PHONETICS 37",
      "audiofile": "modules/ef15c003-0c23-41c8-93a5-71217a146c4a.mp3>37 checkchurch.mp3",
      "drillfile": "modules/5a85734c-d249-42fa-a2a2-1dcdcc2dda92.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:19:22.969119'),
      "id": "d9b02ba867a3498a8b07081a88ee9230",
      "description": "IPA PHONETICS 37",
      "audiofile": "modules/ef15c003-0c23-41c8-93a5-71217a146c4a.mp3>37 checkchurch.mp3",
      "drillfile": "modules/5a85734c-d249-42fa-a2a2-1dcdcc2dda92.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:19:41.159637'),
      "id": "891b4a8d89e94295ae8ff8acfcd0d346",
      "description": "CONVERSATION: I DIDN'T SLEEP",
      "audiofile": "modules/7cbfe49c-2aa4-4d54-b103-5046eab59155.mp3>sleepawink_complete.mp3",
      "drillfile": "modules/eda43334-d6f6-4fb7-b4a4-7634d2102706.pdf>I Didn_t Sleep a Wink Last Night - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:19:41.159637'),
      "id": "891b4a8d89e94295ae8ff8acfcd0d346",
      "description": "CONVERSATION: I DIDN'T SLEEP",
      "audiofile": "modules/7cbfe49c-2aa4-4d54-b103-5046eab59155.mp3>sleepawink_complete.mp3",
      "drillfile": "modules/eda43334-d6f6-4fb7-b4a4-7634d2102706.pdf>I Didn_t Sleep a Wink Last Night - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:19:41.159637'),
      "id": "891b4a8d89e94295ae8ff8acfcd0d346",
      "description": "CONVERSATION: I DIDN'T SLEEP",
      "audiofile": "modules/7cbfe49c-2aa4-4d54-b103-5046eab59155.mp3>sleepawink_complete.mp3",
      "drillfile": "modules/eda43334-d6f6-4fb7-b4a4-7634d2102706.pdf>I Didn_t Sleep a Wink Last Night - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:19:41.159637'),
      "id": "891b4a8d89e94295ae8ff8acfcd0d346",
      "description": "CONVERSATION: I DIDN'T SLEEP",
      "audiofile": "modules/7cbfe49c-2aa4-4d54-b103-5046eab59155.mp3>sleepawink_complete.mp3",
      "drillfile": "modules/eda43334-d6f6-4fb7-b4a4-7634d2102706.pdf>I Didn_t Sleep a Wink Last Night - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:19:41.159637'),
      "id": "891b4a8d89e94295ae8ff8acfcd0d346",
      "description": "CONVERSATION: I DIDN'T SLEEP",
      "audiofile": "modules/7cbfe49c-2aa4-4d54-b103-5046eab59155.mp3>sleepawink_complete.mp3",
      "drillfile": "modules/eda43334-d6f6-4fb7-b4a4-7634d2102706.pdf>I Didn_t Sleep a Wink Last Night - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:19:41.159637'),
      "id": "891b4a8d89e94295ae8ff8acfcd0d346",
      "description": "CONVERSATION: I DIDN'T SLEEP",
      "audiofile": "modules/7cbfe49c-2aa4-4d54-b103-5046eab59155.mp3>sleepawink_complete.mp3",
      "drillfile": "modules/eda43334-d6f6-4fb7-b4a4-7634d2102706.pdf>I Didn_t Sleep a Wink Last Night - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:19:57.298577'),
      "id": "6544d5f226794fb1be8911ab7a5ed831",
      "description": "IPA PHONETICS 38",
      "audiofile": "modules/63fc40c3-d9cb-479f-be8d-df0941768fb4.mp3>38 thinkboth.mp3",
      "drillfile": "modules/03f158d7-7070-4e2f-9cbe-e5bd48a60c2c.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:19:57.298577'),
      "id": "6544d5f226794fb1be8911ab7a5ed831",
      "description": "IPA PHONETICS 38",
      "audiofile": "modules/63fc40c3-d9cb-479f-be8d-df0941768fb4.mp3>38 thinkboth.mp3",
      "drillfile": "modules/03f158d7-7070-4e2f-9cbe-e5bd48a60c2c.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:19:57.298577'),
      "id": "6544d5f226794fb1be8911ab7a5ed831",
      "description": "IPA PHONETICS 38",
      "audiofile": "modules/63fc40c3-d9cb-479f-be8d-df0941768fb4.mp3>38 thinkboth.mp3",
      "drillfile": "modules/03f158d7-7070-4e2f-9cbe-e5bd48a60c2c.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:19:57.298577'),
      "id": "6544d5f226794fb1be8911ab7a5ed831",
      "description": "IPA PHONETICS 38",
      "audiofile": "modules/63fc40c3-d9cb-479f-be8d-df0941768fb4.mp3>38 thinkboth.mp3",
      "drillfile": "modules/03f158d7-7070-4e2f-9cbe-e5bd48a60c2c.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:19:57.298577'),
      "id": "6544d5f226794fb1be8911ab7a5ed831",
      "description": "IPA PHONETICS 38",
      "audiofile": "modules/63fc40c3-d9cb-479f-be8d-df0941768fb4.mp3>38 thinkboth.mp3",
      "drillfile": "modules/03f158d7-7070-4e2f-9cbe-e5bd48a60c2c.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:19:57.298577'),
      "id": "6544d5f226794fb1be8911ab7a5ed831",
      "description": "IPA PHONETICS 38",
      "audiofile": "modules/63fc40c3-d9cb-479f-be8d-df0941768fb4.mp3>38 thinkboth.mp3",
      "drillfile": "modules/03f158d7-7070-4e2f-9cbe-e5bd48a60c2c.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:20:07.698709'),
      "id": "88258adf5e4542838e2ef41f494a045d",
      "description": "CONVERSATION: I FEEL LIKE A NEW PERSON",
      "audiofile": "modules/dd98e4b6-684f-44f2-8e3a-de44b549f679.mp3>anewperson_complete.mp3",
      "drillfile": "modules/edcdc158-f343-4398-852c-108bcee8417c.pdf>I Feel Like a New Person - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:20:07.698709'),
      "id": "88258adf5e4542838e2ef41f494a045d",
      "description": "CONVERSATION: I FEEL LIKE A NEW PERSON",
      "audiofile": "modules/dd98e4b6-684f-44f2-8e3a-de44b549f679.mp3>anewperson_complete.mp3",
      "drillfile": "modules/edcdc158-f343-4398-852c-108bcee8417c.pdf>I Feel Like a New Person - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:20:07.698709'),
      "id": "88258adf5e4542838e2ef41f494a045d",
      "description": "CONVERSATION: I FEEL LIKE A NEW PERSON",
      "audiofile": "modules/dd98e4b6-684f-44f2-8e3a-de44b549f679.mp3>anewperson_complete.mp3",
      "drillfile": "modules/edcdc158-f343-4398-852c-108bcee8417c.pdf>I Feel Like a New Person - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:20:07.698709'),
      "id": "88258adf5e4542838e2ef41f494a045d",
      "description": "CONVERSATION: I FEEL LIKE A NEW PERSON",
      "audiofile": "modules/dd98e4b6-684f-44f2-8e3a-de44b549f679.mp3>anewperson_complete.mp3",
      "drillfile": "modules/edcdc158-f343-4398-852c-108bcee8417c.pdf>I Feel Like a New Person - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:20:07.698709'),
      "id": "88258adf5e4542838e2ef41f494a045d",
      "description": "CONVERSATION: I FEEL LIKE A NEW PERSON",
      "audiofile": "modules/dd98e4b6-684f-44f2-8e3a-de44b549f679.mp3>anewperson_complete.mp3",
      "drillfile": "modules/edcdc158-f343-4398-852c-108bcee8417c.pdf>I Feel Like a New Person - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:20:07.698709'),
      "id": "88258adf5e4542838e2ef41f494a045d",
      "description": "CONVERSATION: I FEEL LIKE A NEW PERSON",
      "audiofile": "modules/dd98e4b6-684f-44f2-8e3a-de44b549f679.mp3>anewperson_complete.mp3",
      "drillfile": "modules/edcdc158-f343-4398-852c-108bcee8417c.pdf>I Feel Like a New Person - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:20:26.617768'),
      "id": "c86a515f16a44870a3d88bd396d40756",
      "description": "IPA PHONETICS 39",
      "audiofile": "modules/349c0ae9-19a5-4909-89ba-647a3663b3aa.mp3>39 thismother.mp3",
      "drillfile": "modules/8f326c24-805a-4c40-97dd-bf4fba78ad0f.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:20:26.617768'),
      "id": "c86a515f16a44870a3d88bd396d40756",
      "description": "IPA PHONETICS 39",
      "audiofile": "modules/349c0ae9-19a5-4909-89ba-647a3663b3aa.mp3>39 thismother.mp3",
      "drillfile": "modules/8f326c24-805a-4c40-97dd-bf4fba78ad0f.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:20:26.617768'),
      "id": "c86a515f16a44870a3d88bd396d40756",
      "description": "IPA PHONETICS 39",
      "audiofile": "modules/349c0ae9-19a5-4909-89ba-647a3663b3aa.mp3>39 thismother.mp3",
      "drillfile": "modules/8f326c24-805a-4c40-97dd-bf4fba78ad0f.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:20:26.617768'),
      "id": "c86a515f16a44870a3d88bd396d40756",
      "description": "IPA PHONETICS 39",
      "audiofile": "modules/349c0ae9-19a5-4909-89ba-647a3663b3aa.mp3>39 thismother.mp3",
      "drillfile": "modules/8f326c24-805a-4c40-97dd-bf4fba78ad0f.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:20:26.617768'),
      "id": "c86a515f16a44870a3d88bd396d40756",
      "description": "IPA PHONETICS 39",
      "audiofile": "modules/349c0ae9-19a5-4909-89ba-647a3663b3aa.mp3>39 thismother.mp3",
      "drillfile": "modules/8f326c24-805a-4c40-97dd-bf4fba78ad0f.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:20:26.617768'),
      "id": "c86a515f16a44870a3d88bd396d40756",
      "description": "IPA PHONETICS 39",
      "audiofile": "modules/349c0ae9-19a5-4909-89ba-647a3663b3aa.mp3>39 thismother.mp3",
      "drillfile": "modules/8f326c24-805a-4c40-97dd-bf4fba78ad0f.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:20:33.825102'),
      "id": "4436ea7919e64a168d4785f2656e07ae",
      "description": "CONVERSATION: I THINK I'M RUNNING A TEMPERATURE",
      "audiofile": "modules/db679cb1-0636-4355-8290-2481058e548b.mp3>runatemperaturecomplete.mp3",
      "drillfile": "modules/db1fec85-baae-4382-a044-3e22fbd1eac1.pdf>I Think I_m Running a Temperature - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:20:33.825102'),
      "id": "4436ea7919e64a168d4785f2656e07ae",
      "description": "CONVERSATION: I THINK I'M RUNNING A TEMPERATURE",
      "audiofile": "modules/db679cb1-0636-4355-8290-2481058e548b.mp3>runatemperaturecomplete.mp3",
      "drillfile": "modules/db1fec85-baae-4382-a044-3e22fbd1eac1.pdf>I Think I_m Running a Temperature - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:20:33.825102'),
      "id": "4436ea7919e64a168d4785f2656e07ae",
      "description": "CONVERSATION: I THINK I'M RUNNING A TEMPERATURE",
      "audiofile": "modules/db679cb1-0636-4355-8290-2481058e548b.mp3>runatemperaturecomplete.mp3",
      "drillfile": "modules/db1fec85-baae-4382-a044-3e22fbd1eac1.pdf>I Think I_m Running a Temperature - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:20:33.825102'),
      "id": "4436ea7919e64a168d4785f2656e07ae",
      "description": "CONVERSATION: I THINK I'M RUNNING A TEMPERATURE",
      "audiofile": "modules/db679cb1-0636-4355-8290-2481058e548b.mp3>runatemperaturecomplete.mp3",
      "drillfile": "modules/db1fec85-baae-4382-a044-3e22fbd1eac1.pdf>I Think I_m Running a Temperature - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:20:33.825102'),
      "id": "4436ea7919e64a168d4785f2656e07ae",
      "description": "CONVERSATION: I THINK I'M RUNNING A TEMPERATURE",
      "audiofile": "modules/db679cb1-0636-4355-8290-2481058e548b.mp3>runatemperaturecomplete.mp3",
      "drillfile": "modules/db1fec85-baae-4382-a044-3e22fbd1eac1.pdf>I Think I_m Running a Temperature - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:20:33.825102'),
      "id": "4436ea7919e64a168d4785f2656e07ae",
      "description": "CONVERSATION: I THINK I'M RUNNING A TEMPERATURE",
      "audiofile": "modules/db679cb1-0636-4355-8290-2481058e548b.mp3>runatemperaturecomplete.mp3",
      "drillfile": "modules/db1fec85-baae-4382-a044-3e22fbd1eac1.pdf>I Think I_m Running a Temperature - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:20:57.623749'),
      "id": "5d4229e6c1ee498a90b67cacca941787",
      "description": "IPA PHONETICS 40",
      "audiofile": "modules/8f5044c1-5aed-4e50-807a-9ee5e1073af4.mp3>40 voicefive.mp3",
      "drillfile": "modules/1ca66b05-0379-4a48-a29a-8fecf43d746a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:20:57.623749'),
      "id": "5d4229e6c1ee498a90b67cacca941787",
      "description": "IPA PHONETICS 40",
      "audiofile": "modules/8f5044c1-5aed-4e50-807a-9ee5e1073af4.mp3>40 voicefive.mp3",
      "drillfile": "modules/1ca66b05-0379-4a48-a29a-8fecf43d746a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:20:57.623749'),
      "id": "5d4229e6c1ee498a90b67cacca941787",
      "description": "IPA PHONETICS 40",
      "audiofile": "modules/8f5044c1-5aed-4e50-807a-9ee5e1073af4.mp3>40 voicefive.mp3",
      "drillfile": "modules/1ca66b05-0379-4a48-a29a-8fecf43d746a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:20:57.623749'),
      "id": "5d4229e6c1ee498a90b67cacca941787",
      "description": "IPA PHONETICS 40",
      "audiofile": "modules/8f5044c1-5aed-4e50-807a-9ee5e1073af4.mp3>40 voicefive.mp3",
      "drillfile": "modules/1ca66b05-0379-4a48-a29a-8fecf43d746a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:20:57.623749'),
      "id": "5d4229e6c1ee498a90b67cacca941787",
      "description": "IPA PHONETICS 40",
      "audiofile": "modules/8f5044c1-5aed-4e50-807a-9ee5e1073af4.mp3>40 voicefive.mp3",
      "drillfile": "modules/1ca66b05-0379-4a48-a29a-8fecf43d746a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:20:57.623749'),
      "id": "5d4229e6c1ee498a90b67cacca941787",
      "description": "IPA PHONETICS 40",
      "audiofile": "modules/8f5044c1-5aed-4e50-807a-9ee5e1073af4.mp3>40 voicefive.mp3",
      "drillfile": "modules/1ca66b05-0379-4a48-a29a-8fecf43d746a.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:21:08.250914'),
      "id": "71b6472800874d4cb2970eb533078674",
      "description": "CONVERSATION: I WANT IT TO BE VERY, VERY LEAN",
      "audiofile": "modules/089008bb-df5f-4885-8c61-b4b778e42048.mp3>leancomplete.mp3",
      "drillfile": "modules/24ca1d92-afd9-426b-bdee-aa8eb779bb83.pdf>I want it to be very, very lean - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:21:08.250914'),
      "id": "71b6472800874d4cb2970eb533078674",
      "description": "CONVERSATION: I WANT IT TO BE VERY, VERY LEAN",
      "audiofile": "modules/089008bb-df5f-4885-8c61-b4b778e42048.mp3>leancomplete.mp3",
      "drillfile": "modules/24ca1d92-afd9-426b-bdee-aa8eb779bb83.pdf>I want it to be very, very lean - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:21:08.250914'),
      "id": "71b6472800874d4cb2970eb533078674",
      "description": "CONVERSATION: I WANT IT TO BE VERY, VERY LEAN",
      "audiofile": "modules/089008bb-df5f-4885-8c61-b4b778e42048.mp3>leancomplete.mp3",
      "drillfile": "modules/24ca1d92-afd9-426b-bdee-aa8eb779bb83.pdf>I want it to be very, very lean - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:21:08.250914'),
      "id": "71b6472800874d4cb2970eb533078674",
      "description": "CONVERSATION: I WANT IT TO BE VERY, VERY LEAN",
      "audiofile": "modules/089008bb-df5f-4885-8c61-b4b778e42048.mp3>leancomplete.mp3",
      "drillfile": "modules/24ca1d92-afd9-426b-bdee-aa8eb779bb83.pdf>I want it to be very, very lean - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:21:08.250914'),
      "id": "71b6472800874d4cb2970eb533078674",
      "description": "CONVERSATION: I WANT IT TO BE VERY, VERY LEAN",
      "audiofile": "modules/089008bb-df5f-4885-8c61-b4b778e42048.mp3>leancomplete.mp3",
      "drillfile": "modules/24ca1d92-afd9-426b-bdee-aa8eb779bb83.pdf>I want it to be very, very lean - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:21:08.250914'),
      "id": "71b6472800874d4cb2970eb533078674",
      "description": "CONVERSATION: I WANT IT TO BE VERY, VERY LEAN",
      "audiofile": "modules/089008bb-df5f-4885-8c61-b4b778e42048.mp3>leancomplete.mp3",
      "drillfile": "modules/24ca1d92-afd9-426b-bdee-aa8eb779bb83.pdf>I want it to be very, very lean - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:21:31.333516'),
      "id": "41a7c5fa6a124a7589b97f091c96c101",
      "description": "IPA PHONETICS 41",
      "audiofile": "modules/32cad71e-b4e9-4f40-9589-5f7118f8cbdf.mp3>41 wetwindow.mp3",
      "drillfile": "modules/c863b23e-103d-4bc1-99d5-30f715edd62c.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:21:31.333516'),
      "id": "41a7c5fa6a124a7589b97f091c96c101",
      "description": "IPA PHONETICS 41",
      "audiofile": "modules/32cad71e-b4e9-4f40-9589-5f7118f8cbdf.mp3>41 wetwindow.mp3",
      "drillfile": "modules/c863b23e-103d-4bc1-99d5-30f715edd62c.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:21:31.333516'),
      "id": "41a7c5fa6a124a7589b97f091c96c101",
      "description": "IPA PHONETICS 41",
      "audiofile": "modules/32cad71e-b4e9-4f40-9589-5f7118f8cbdf.mp3>41 wetwindow.mp3",
      "drillfile": "modules/c863b23e-103d-4bc1-99d5-30f715edd62c.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:21:31.333516'),
      "id": "41a7c5fa6a124a7589b97f091c96c101",
      "description": "IPA PHONETICS 41",
      "audiofile": "modules/32cad71e-b4e9-4f40-9589-5f7118f8cbdf.mp3>41 wetwindow.mp3",
      "drillfile": "modules/c863b23e-103d-4bc1-99d5-30f715edd62c.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:21:31.333516'),
      "id": "41a7c5fa6a124a7589b97f091c96c101",
      "description": "IPA PHONETICS 41",
      "audiofile": "modules/32cad71e-b4e9-4f40-9589-5f7118f8cbdf.mp3>41 wetwindow.mp3",
      "drillfile": "modules/c863b23e-103d-4bc1-99d5-30f715edd62c.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:21:31.333516'),
      "id": "41a7c5fa6a124a7589b97f091c96c101",
      "description": "IPA PHONETICS 41",
      "audiofile": "modules/32cad71e-b4e9-4f40-9589-5f7118f8cbdf.mp3>41 wetwindow.mp3",
      "drillfile": "modules/c863b23e-103d-4bc1-99d5-30f715edd62c.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:21:36.577355'),
      "id": "e1f31a631fca477393c030109aa93842",
      "description": "CONVERSATION: I WAS ALL OVER THE BED",
      "audiofile": "modules/df0b46ba-c688-435c-b135-c5378a7101b6.mp3>alloverthebed_complete.mp3",
      "drillfile": "modules/6d0f1071-d954-4aa6-a278-73fb9d658d98.pdf>I Was All Over the Bed the Whole Night Last Night - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:21:36.577355'),
      "id": "e1f31a631fca477393c030109aa93842",
      "description": "CONVERSATION: I WAS ALL OVER THE BED",
      "audiofile": "modules/df0b46ba-c688-435c-b135-c5378a7101b6.mp3>alloverthebed_complete.mp3",
      "drillfile": "modules/6d0f1071-d954-4aa6-a278-73fb9d658d98.pdf>I Was All Over the Bed the Whole Night Last Night - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:21:36.577355'),
      "id": "e1f31a631fca477393c030109aa93842",
      "description": "CONVERSATION: I WAS ALL OVER THE BED",
      "audiofile": "modules/df0b46ba-c688-435c-b135-c5378a7101b6.mp3>alloverthebed_complete.mp3",
      "drillfile": "modules/6d0f1071-d954-4aa6-a278-73fb9d658d98.pdf>I Was All Over the Bed the Whole Night Last Night - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:21:36.577355'),
      "id": "e1f31a631fca477393c030109aa93842",
      "description": "CONVERSATION: I WAS ALL OVER THE BED",
      "audiofile": "modules/df0b46ba-c688-435c-b135-c5378a7101b6.mp3>alloverthebed_complete.mp3",
      "drillfile": "modules/6d0f1071-d954-4aa6-a278-73fb9d658d98.pdf>I Was All Over the Bed the Whole Night Last Night - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:21:36.577355'),
      "id": "e1f31a631fca477393c030109aa93842",
      "description": "CONVERSATION: I WAS ALL OVER THE BED",
      "audiofile": "modules/df0b46ba-c688-435c-b135-c5378a7101b6.mp3>alloverthebed_complete.mp3",
      "drillfile": "modules/6d0f1071-d954-4aa6-a278-73fb9d658d98.pdf>I Was All Over the Bed the Whole Night Last Night - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:21:36.577355'),
      "id": "e1f31a631fca477393c030109aa93842",
      "description": "CONVERSATION: I WAS ALL OVER THE BED",
      "audiofile": "modules/df0b46ba-c688-435c-b135-c5378a7101b6.mp3>alloverthebed_complete.mp3",
      "drillfile": "modules/6d0f1071-d954-4aa6-a278-73fb9d658d98.pdf>I Was All Over the Bed the Whole Night Last Night - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:21:57.108575'),
      "id": "6f7eb90bb6ab47dc951e07bf2795085a",
      "description": "IPA PHONETICS 42",
      "audiofile": "modules/afd2c3c9-f35f-4b32-b873-07f9bf4a24b8.mp3>42 zoolazy.mp3",
      "drillfile": "modules/d9fe1d62-89be-4126-9302-a52132e8c20f.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:21:57.108575'),
      "id": "6f7eb90bb6ab47dc951e07bf2795085a",
      "description": "IPA PHONETICS 42",
      "audiofile": "modules/afd2c3c9-f35f-4b32-b873-07f9bf4a24b8.mp3>42 zoolazy.mp3",
      "drillfile": "modules/d9fe1d62-89be-4126-9302-a52132e8c20f.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:21:57.108575'),
      "id": "6f7eb90bb6ab47dc951e07bf2795085a",
      "description": "IPA PHONETICS 42",
      "audiofile": "modules/afd2c3c9-f35f-4b32-b873-07f9bf4a24b8.mp3>42 zoolazy.mp3",
      "drillfile": "modules/d9fe1d62-89be-4126-9302-a52132e8c20f.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:21:57.108575'),
      "id": "6f7eb90bb6ab47dc951e07bf2795085a",
      "description": "IPA PHONETICS 42",
      "audiofile": "modules/afd2c3c9-f35f-4b32-b873-07f9bf4a24b8.mp3>42 zoolazy.mp3",
      "drillfile": "modules/d9fe1d62-89be-4126-9302-a52132e8c20f.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:21:57.108575'),
      "id": "6f7eb90bb6ab47dc951e07bf2795085a",
      "description": "IPA PHONETICS 42",
      "audiofile": "modules/afd2c3c9-f35f-4b32-b873-07f9bf4a24b8.mp3>42 zoolazy.mp3",
      "drillfile": "modules/d9fe1d62-89be-4126-9302-a52132e8c20f.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:21:57.108575'),
      "id": "6f7eb90bb6ab47dc951e07bf2795085a",
      "description": "IPA PHONETICS 42",
      "audiofile": "modules/afd2c3c9-f35f-4b32-b873-07f9bf4a24b8.mp3>42 zoolazy.mp3",
      "drillfile": "modules/d9fe1d62-89be-4126-9302-a52132e8c20f.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:22:04.809592'),
      "id": "e1a0b1d0a9864223ab9616e44f8d03e1",
      "description": "CONVERSATION: I'D LIKE TO GET TELEPHONE SERVICE",
      "audiofile": "modules/cb28043f-a673-4468-ab17-f0344cd764ec.mp3>phoneservice1com.mp3",
      "drillfile": "modules/858e9aa4-f0a8-4d1c-8a22-d32efe3d4bfd.pdf>I_d Like to Get Telephone Service - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:22:04.809592'),
      "id": "e1a0b1d0a9864223ab9616e44f8d03e1",
      "description": "CONVERSATION: I'D LIKE TO GET TELEPHONE SERVICE",
      "audiofile": "modules/cb28043f-a673-4468-ab17-f0344cd764ec.mp3>phoneservice1com.mp3",
      "drillfile": "modules/858e9aa4-f0a8-4d1c-8a22-d32efe3d4bfd.pdf>I_d Like to Get Telephone Service - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:22:04.809592'),
      "id": "e1a0b1d0a9864223ab9616e44f8d03e1",
      "description": "CONVERSATION: I'D LIKE TO GET TELEPHONE SERVICE",
      "audiofile": "modules/cb28043f-a673-4468-ab17-f0344cd764ec.mp3>phoneservice1com.mp3",
      "drillfile": "modules/858e9aa4-f0a8-4d1c-8a22-d32efe3d4bfd.pdf>I_d Like to Get Telephone Service - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:22:04.809592'),
      "id": "e1a0b1d0a9864223ab9616e44f8d03e1",
      "description": "CONVERSATION: I'D LIKE TO GET TELEPHONE SERVICE",
      "audiofile": "modules/cb28043f-a673-4468-ab17-f0344cd764ec.mp3>phoneservice1com.mp3",
      "drillfile": "modules/858e9aa4-f0a8-4d1c-8a22-d32efe3d4bfd.pdf>I_d Like to Get Telephone Service - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:22:04.809592'),
      "id": "e1a0b1d0a9864223ab9616e44f8d03e1",
      "description": "CONVERSATION: I'D LIKE TO GET TELEPHONE SERVICE",
      "audiofile": "modules/cb28043f-a673-4468-ab17-f0344cd764ec.mp3>phoneservice1com.mp3",
      "drillfile": "modules/858e9aa4-f0a8-4d1c-8a22-d32efe3d4bfd.pdf>I_d Like to Get Telephone Service - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:22:04.809592'),
      "id": "e1a0b1d0a9864223ab9616e44f8d03e1",
      "description": "CONVERSATION: I'D LIKE TO GET TELEPHONE SERVICE",
      "audiofile": "modules/cb28043f-a673-4468-ab17-f0344cd764ec.mp3>phoneservice1com.mp3",
      "drillfile": "modules/858e9aa4-f0a8-4d1c-8a22-d32efe3d4bfd.pdf>I_d Like to Get Telephone Service - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:22:25.125887'),
      "id": "a57ad9aa608f4188a90e33614c96f61e",
      "description": "IPA PHONETICS 43",
      "audiofile": "modules/127b9817-1f9e-46fb-90fe-103e48f03877.mp3>43 pleasurevision.mp3",
      "drillfile": "modules/1bc605a4-e19f-4d73-8596-8949d33a59e0.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:22:25.125887'),
      "id": "a57ad9aa608f4188a90e33614c96f61e",
      "description": "IPA PHONETICS 43",
      "audiofile": "modules/127b9817-1f9e-46fb-90fe-103e48f03877.mp3>43 pleasurevision.mp3",
      "drillfile": "modules/1bc605a4-e19f-4d73-8596-8949d33a59e0.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:22:25.125887'),
      "id": "a57ad9aa608f4188a90e33614c96f61e",
      "description": "IPA PHONETICS 43",
      "audiofile": "modules/127b9817-1f9e-46fb-90fe-103e48f03877.mp3>43 pleasurevision.mp3",
      "drillfile": "modules/1bc605a4-e19f-4d73-8596-8949d33a59e0.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:22:25.125887'),
      "id": "a57ad9aa608f4188a90e33614c96f61e",
      "description": "IPA PHONETICS 43",
      "audiofile": "modules/127b9817-1f9e-46fb-90fe-103e48f03877.mp3>43 pleasurevision.mp3",
      "drillfile": "modules/1bc605a4-e19f-4d73-8596-8949d33a59e0.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:22:25.125887'),
      "id": "a57ad9aa608f4188a90e33614c96f61e",
      "description": "IPA PHONETICS 43",
      "audiofile": "modules/127b9817-1f9e-46fb-90fe-103e48f03877.mp3>43 pleasurevision.mp3",
      "drillfile": "modules/1bc605a4-e19f-4d73-8596-8949d33a59e0.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:22:25.125887'),
      "id": "a57ad9aa608f4188a90e33614c96f61e",
      "description": "IPA PHONETICS 43",
      "audiofile": "modules/127b9817-1f9e-46fb-90fe-103e48f03877.mp3>43 pleasurevision.mp3",
      "drillfile": "modules/1bc605a4-e19f-4d73-8596-8949d33a59e0.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:22:31.291238'),
      "id": "0f5d3dce41774810919e594cf58ba298",
      "description": "CONVERSATION: I'D LIKE TO HAVE A PHONE",
      "audiofile": "modules/6b67e166-2994-4cb8-9dc7-fea4839c65a4.mp3>phoneservice2com.mp3",
      "drillfile": "modules/7975e983-a798-44bb-b611-6e48a3044c89.pdf>I_d Like to Have a Phone Installed - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:22:31.291238'),
      "id": "0f5d3dce41774810919e594cf58ba298",
      "description": "CONVERSATION: I'D LIKE TO HAVE A PHONE",
      "audiofile": "modules/6b67e166-2994-4cb8-9dc7-fea4839c65a4.mp3>phoneservice2com.mp3",
      "drillfile": "modules/7975e983-a798-44bb-b611-6e48a3044c89.pdf>I_d Like to Have a Phone Installed - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:22:31.291238'),
      "id": "0f5d3dce41774810919e594cf58ba298",
      "description": "CONVERSATION: I'D LIKE TO HAVE A PHONE",
      "audiofile": "modules/6b67e166-2994-4cb8-9dc7-fea4839c65a4.mp3>phoneservice2com.mp3",
      "drillfile": "modules/7975e983-a798-44bb-b611-6e48a3044c89.pdf>I_d Like to Have a Phone Installed - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:22:31.291238'),
      "id": "0f5d3dce41774810919e594cf58ba298",
      "description": "CONVERSATION: I'D LIKE TO HAVE A PHONE",
      "audiofile": "modules/6b67e166-2994-4cb8-9dc7-fea4839c65a4.mp3>phoneservice2com.mp3",
      "drillfile": "modules/7975e983-a798-44bb-b611-6e48a3044c89.pdf>I_d Like to Have a Phone Installed - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:22:31.291238'),
      "id": "0f5d3dce41774810919e594cf58ba298",
      "description": "CONVERSATION: I'D LIKE TO HAVE A PHONE",
      "audiofile": "modules/6b67e166-2994-4cb8-9dc7-fea4839c65a4.mp3>phoneservice2com.mp3",
      "drillfile": "modules/7975e983-a798-44bb-b611-6e48a3044c89.pdf>I_d Like to Have a Phone Installed - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:22:31.291238'),
      "id": "0f5d3dce41774810919e594cf58ba298",
      "description": "CONVERSATION: I'D LIKE TO HAVE A PHONE",
      "audiofile": "modules/6b67e166-2994-4cb8-9dc7-fea4839c65a4.mp3>phoneservice2com.mp3",
      "drillfile": "modules/7975e983-a798-44bb-b611-6e48a3044c89.pdf>I_d Like to Have a Phone Installed - Google Docs.pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:22:55.964241'),
      "id": "be0c0197686d4c85bfae7962daa052eb",
      "description": "IPA PHONETICS 44",
      "audiofile": "modules/fe59d46e-952c-465f-9251-1c19f140958c.mp3>44 justlarge.mp3",
      "drillfile": "modules/0636fc7f-93dd-4089-8f1b-de2d30aa6f77.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:22:55.964241'),
      "id": "be0c0197686d4c85bfae7962daa052eb",
      "description": "IPA PHONETICS 44",
      "audiofile": "modules/fe59d46e-952c-465f-9251-1c19f140958c.mp3>44 justlarge.mp3",
      "drillfile": "modules/0636fc7f-93dd-4089-8f1b-de2d30aa6f77.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:22:55.964241'),
      "id": "be0c0197686d4c85bfae7962daa052eb",
      "description": "IPA PHONETICS 44",
      "audiofile": "modules/fe59d46e-952c-465f-9251-1c19f140958c.mp3>44 justlarge.mp3",
      "drillfile": "modules/0636fc7f-93dd-4089-8f1b-de2d30aa6f77.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:22:55.964241'),
      "id": "be0c0197686d4c85bfae7962daa052eb",
      "description": "IPA PHONETICS 44",
      "audiofile": "modules/fe59d46e-952c-465f-9251-1c19f140958c.mp3>44 justlarge.mp3",
      "drillfile": "modules/0636fc7f-93dd-4089-8f1b-de2d30aa6f77.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:22:55.964241'),
      "id": "be0c0197686d4c85bfae7962daa052eb",
      "description": "IPA PHONETICS 44",
      "audiofile": "modules/fe59d46e-952c-465f-9251-1c19f140958c.mp3>44 justlarge.mp3",
      "drillfile": "modules/0636fc7f-93dd-4089-8f1b-de2d30aa6f77.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "d75ccf1afc9545a0b0576847ea570e54",
      "timestamp": new Date('2024-03-14 10:22:55.964241'),
      "id": "be0c0197686d4c85bfae7962daa052eb",
      "description": "IPA PHONETICS 44",
      "audiofile": "modules/fe59d46e-952c-465f-9251-1c19f140958c.mp3>44 justlarge.mp3",
      "drillfile": "modules/0636fc7f-93dd-4089-8f1b-de2d30aa6f77.pdf>phonchart2008 (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:24:48.194809'),
      "id": "781a7445a9e3417bbf36d5a9d23af741",
      "description": "CONVERSATION: DISCONNECT",
      "audiofile": "modules/72ece41f-4964-417f-8fef-1a66e8638579.mp3>disconnectedcom.mp3",
      "drillfile": "modules/a440d879-51ff-4c16-809e-82df2fbc976e.pdf>I_d Like to Have My Phone Disconnected - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:24:48.194809'),
      "id": "781a7445a9e3417bbf36d5a9d23af741",
      "description": "CONVERSATION: DISCONNECT",
      "audiofile": "modules/72ece41f-4964-417f-8fef-1a66e8638579.mp3>disconnectedcom.mp3",
      "drillfile": "modules/a440d879-51ff-4c16-809e-82df2fbc976e.pdf>I_d Like to Have My Phone Disconnected - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:24:48.194809'),
      "id": "781a7445a9e3417bbf36d5a9d23af741",
      "description": "CONVERSATION: DISCONNECT",
      "audiofile": "modules/72ece41f-4964-417f-8fef-1a66e8638579.mp3>disconnectedcom.mp3",
      "drillfile": "modules/a440d879-51ff-4c16-809e-82df2fbc976e.pdf>I_d Like to Have My Phone Disconnected - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:24:48.194809'),
      "id": "781a7445a9e3417bbf36d5a9d23af741",
      "description": "CONVERSATION: DISCONNECT",
      "audiofile": "modules/72ece41f-4964-417f-8fef-1a66e8638579.mp3>disconnectedcom.mp3",
      "drillfile": "modules/a440d879-51ff-4c16-809e-82df2fbc976e.pdf>I_d Like to Have My Phone Disconnected - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:24:48.194809'),
      "id": "781a7445a9e3417bbf36d5a9d23af741",
      "description": "CONVERSATION: DISCONNECT",
      "audiofile": "modules/72ece41f-4964-417f-8fef-1a66e8638579.mp3>disconnectedcom.mp3",
      "drillfile": "modules/a440d879-51ff-4c16-809e-82df2fbc976e.pdf>I_d Like to Have My Phone Disconnected - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:24:48.194809'),
      "id": "781a7445a9e3417bbf36d5a9d23af741",
      "description": "CONVERSATION: DISCONNECT",
      "audiofile": "modules/72ece41f-4964-417f-8fef-1a66e8638579.mp3>disconnectedcom.mp3",
      "drillfile": "modules/a440d879-51ff-4c16-809e-82df2fbc976e.pdf>I_d Like to Have My Phone Disconnected - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:25:10.429016'),
      "id": "d31924f83b864f7f8c260d6d951f053f",
      "description": "CONVERSATION: RESERVE",
      "audiofile": "modules/9deded56-1985-4ce9-aa38-d16a6aebc7b3.mp3>reserveatablecomplete.mp3",
      "drillfile": "modules/1e467ae0-6613-4a58-a0a2-32536eecb81d.pdf>I_d like to reserve a table for dinner - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:25:10.429016'),
      "id": "d31924f83b864f7f8c260d6d951f053f",
      "description": "CONVERSATION: RESERVE",
      "audiofile": "modules/9deded56-1985-4ce9-aa38-d16a6aebc7b3.mp3>reserveatablecomplete.mp3",
      "drillfile": "modules/1e467ae0-6613-4a58-a0a2-32536eecb81d.pdf>I_d like to reserve a table for dinner - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:25:10.429016'),
      "id": "d31924f83b864f7f8c260d6d951f053f",
      "description": "CONVERSATION: RESERVE",
      "audiofile": "modules/9deded56-1985-4ce9-aa38-d16a6aebc7b3.mp3>reserveatablecomplete.mp3",
      "drillfile": "modules/1e467ae0-6613-4a58-a0a2-32536eecb81d.pdf>I_d like to reserve a table for dinner - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:25:10.429016'),
      "id": "d31924f83b864f7f8c260d6d951f053f",
      "description": "CONVERSATION: RESERVE",
      "audiofile": "modules/9deded56-1985-4ce9-aa38-d16a6aebc7b3.mp3>reserveatablecomplete.mp3",
      "drillfile": "modules/1e467ae0-6613-4a58-a0a2-32536eecb81d.pdf>I_d like to reserve a table for dinner - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:25:10.429016'),
      "id": "d31924f83b864f7f8c260d6d951f053f",
      "description": "CONVERSATION: RESERVE",
      "audiofile": "modules/9deded56-1985-4ce9-aa38-d16a6aebc7b3.mp3>reserveatablecomplete.mp3",
      "drillfile": "modules/1e467ae0-6613-4a58-a0a2-32536eecb81d.pdf>I_d like to reserve a table for dinner - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:25:10.429016'),
      "id": "d31924f83b864f7f8c260d6d951f053f",
      "description": "CONVERSATION: RESERVE",
      "audiofile": "modules/9deded56-1985-4ce9-aa38-d16a6aebc7b3.mp3>reserveatablecomplete.mp3",
      "drillfile": "modules/1e467ae0-6613-4a58-a0a2-32536eecb81d.pdf>I_d like to reserve a table for dinner - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:25:30.17826'),
      "id": "3ad59f3123534eb99ce5245f40e0df78",
      "description": "CONVERSATION: I'M ON A DIET",
      "audiofile": "modules/2af2e357-29ec-4b31-8c21-a564411687da.mp3>onadiet_complete.mp3",
      "drillfile": "modules/479b6371-9367-4e9a-a429-89c8abc34dfa.pdf>I_m on a Diet to Lose Weight - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:25:30.17826'),
      "id": "3ad59f3123534eb99ce5245f40e0df78",
      "description": "CONVERSATION: I'M ON A DIET",
      "audiofile": "modules/2af2e357-29ec-4b31-8c21-a564411687da.mp3>onadiet_complete.mp3",
      "drillfile": "modules/479b6371-9367-4e9a-a429-89c8abc34dfa.pdf>I_m on a Diet to Lose Weight - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:25:30.17826'),
      "id": "3ad59f3123534eb99ce5245f40e0df78",
      "description": "CONVERSATION: I'M ON A DIET",
      "audiofile": "modules/2af2e357-29ec-4b31-8c21-a564411687da.mp3>onadiet_complete.mp3",
      "drillfile": "modules/479b6371-9367-4e9a-a429-89c8abc34dfa.pdf>I_m on a Diet to Lose Weight - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:25:30.17826'),
      "id": "3ad59f3123534eb99ce5245f40e0df78",
      "description": "CONVERSATION: I'M ON A DIET",
      "audiofile": "modules/2af2e357-29ec-4b31-8c21-a564411687da.mp3>onadiet_complete.mp3",
      "drillfile": "modules/479b6371-9367-4e9a-a429-89c8abc34dfa.pdf>I_m on a Diet to Lose Weight - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:25:30.17826'),
      "id": "3ad59f3123534eb99ce5245f40e0df78",
      "description": "CONVERSATION: I'M ON A DIET",
      "audiofile": "modules/2af2e357-29ec-4b31-8c21-a564411687da.mp3>onadiet_complete.mp3",
      "drillfile": "modules/479b6371-9367-4e9a-a429-89c8abc34dfa.pdf>I_m on a Diet to Lose Weight - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:25:30.17826'),
      "id": "3ad59f3123534eb99ce5245f40e0df78",
      "description": "CONVERSATION: I'M ON A DIET",
      "audiofile": "modules/2af2e357-29ec-4b31-8c21-a564411687da.mp3>onadiet_complete.mp3",
      "drillfile": "modules/479b6371-9367-4e9a-a429-89c8abc34dfa.pdf>I_m on a Diet to Lose Weight - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:26:06.858092'),
      "id": "9ab5d7c410594e9b9134df097a1a5f7f",
      "description": "CONVERSATION: I'M READY FOR A LIFT",
      "audiofile": "modules/5fa21a7d-d2b4-4d63-8909-c4eb257084d7.mp3>readyforaliftcomplete.mp3",
      "drillfile": "modules/bdb328b7-9961-4b5c-8623-769db4eeeefc.pdf>I_m ready for a lift - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:26:06.858092'),
      "id": "9ab5d7c410594e9b9134df097a1a5f7f",
      "description": "CONVERSATION: I'M READY FOR A LIFT",
      "audiofile": "modules/5fa21a7d-d2b4-4d63-8909-c4eb257084d7.mp3>readyforaliftcomplete.mp3",
      "drillfile": "modules/bdb328b7-9961-4b5c-8623-769db4eeeefc.pdf>I_m ready for a lift - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:26:06.858092'),
      "id": "9ab5d7c410594e9b9134df097a1a5f7f",
      "description": "CONVERSATION: I'M READY FOR A LIFT",
      "audiofile": "modules/5fa21a7d-d2b4-4d63-8909-c4eb257084d7.mp3>readyforaliftcomplete.mp3",
      "drillfile": "modules/bdb328b7-9961-4b5c-8623-769db4eeeefc.pdf>I_m ready for a lift - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:26:06.858092'),
      "id": "9ab5d7c410594e9b9134df097a1a5f7f",
      "description": "CONVERSATION: I'M READY FOR A LIFT",
      "audiofile": "modules/5fa21a7d-d2b4-4d63-8909-c4eb257084d7.mp3>readyforaliftcomplete.mp3",
      "drillfile": "modules/bdb328b7-9961-4b5c-8623-769db4eeeefc.pdf>I_m ready for a lift - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:26:06.858092'),
      "id": "9ab5d7c410594e9b9134df097a1a5f7f",
      "description": "CONVERSATION: I'M READY FOR A LIFT",
      "audiofile": "modules/5fa21a7d-d2b4-4d63-8909-c4eb257084d7.mp3>readyforaliftcomplete.mp3",
      "drillfile": "modules/bdb328b7-9961-4b5c-8623-769db4eeeefc.pdf>I_m ready for a lift - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:26:06.858092'),
      "id": "9ab5d7c410594e9b9134df097a1a5f7f",
      "description": "CONVERSATION: I'M READY FOR A LIFT",
      "audiofile": "modules/5fa21a7d-d2b4-4d63-8909-c4eb257084d7.mp3>readyforaliftcomplete.mp3",
      "drillfile": "modules/bdb328b7-9961-4b5c-8623-769db4eeeefc.pdf>I_m ready for a lift - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:26:34.94601'),
      "id": "709905b244984128968361250efb6ec1",
      "description": "CONVERSATION: I'VE PUT HIM ON HOLD",
      "audiofile": "modules/883961c2-6084-4e2d-bed5-0d2069603173.mp3>putonholdcom.mp3",
      "drillfile": "modules/1290445e-028f-4c38-a358-a602702aa666.pdf>There_s a Call for You - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:26:34.94601'),
      "id": "709905b244984128968361250efb6ec1",
      "description": "CONVERSATION: I'VE PUT HIM ON HOLD",
      "audiofile": "modules/883961c2-6084-4e2d-bed5-0d2069603173.mp3>putonholdcom.mp3",
      "drillfile": "modules/1290445e-028f-4c38-a358-a602702aa666.pdf>There_s a Call for You - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:26:34.94601'),
      "id": "709905b244984128968361250efb6ec1",
      "description": "CONVERSATION: I'VE PUT HIM ON HOLD",
      "audiofile": "modules/883961c2-6084-4e2d-bed5-0d2069603173.mp3>putonholdcom.mp3",
      "drillfile": "modules/1290445e-028f-4c38-a358-a602702aa666.pdf>There_s a Call for You - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:26:34.94601'),
      "id": "709905b244984128968361250efb6ec1",
      "description": "CONVERSATION: I'VE PUT HIM ON HOLD",
      "audiofile": "modules/883961c2-6084-4e2d-bed5-0d2069603173.mp3>putonholdcom.mp3",
      "drillfile": "modules/1290445e-028f-4c38-a358-a602702aa666.pdf>There_s a Call for You - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:26:34.94601'),
      "id": "709905b244984128968361250efb6ec1",
      "description": "CONVERSATION: I'VE PUT HIM ON HOLD",
      "audiofile": "modules/883961c2-6084-4e2d-bed5-0d2069603173.mp3>putonholdcom.mp3",
      "drillfile": "modules/1290445e-028f-4c38-a358-a602702aa666.pdf>There_s a Call for You - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:26:34.94601'),
      "id": "709905b244984128968361250efb6ec1",
      "description": "CONVERSATION: I'VE PUT HIM ON HOLD",
      "audiofile": "modules/883961c2-6084-4e2d-bed5-0d2069603173.mp3>putonholdcom.mp3",
      "drillfile": "modules/1290445e-028f-4c38-a358-a602702aa666.pdf>There_s a Call for You - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:05.194995'),
      "id": "377feecce3434e02970875a9d3469d77",
      "description": "CONVERSATION: IN LOVE",
      "audiofile": "modules/a6062aa6-1ebc-44f4-a9ca-a8535f33648d.mp3>mrrightcomplete (1).mp3",
      "drillfile": "modules/50ce3f88-fb9a-42d3-8571-e2851ffa643c.pdf>He_s head over heels in love with you.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:05.194995'),
      "id": "377feecce3434e02970875a9d3469d77",
      "description": "CONVERSATION: IN LOVE",
      "audiofile": "modules/a6062aa6-1ebc-44f4-a9ca-a8535f33648d.mp3>mrrightcomplete (1).mp3",
      "drillfile": "modules/50ce3f88-fb9a-42d3-8571-e2851ffa643c.pdf>He_s head over heels in love with you.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:05.194995'),
      "id": "377feecce3434e02970875a9d3469d77",
      "description": "CONVERSATION: IN LOVE",
      "audiofile": "modules/a6062aa6-1ebc-44f4-a9ca-a8535f33648d.mp3>mrrightcomplete (1).mp3",
      "drillfile": "modules/50ce3f88-fb9a-42d3-8571-e2851ffa643c.pdf>He_s head over heels in love with you.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:05.194995'),
      "id": "377feecce3434e02970875a9d3469d77",
      "description": "CONVERSATION: IN LOVE",
      "audiofile": "modules/a6062aa6-1ebc-44f4-a9ca-a8535f33648d.mp3>mrrightcomplete (1).mp3",
      "drillfile": "modules/50ce3f88-fb9a-42d3-8571-e2851ffa643c.pdf>He_s head over heels in love with you.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:05.194995'),
      "id": "377feecce3434e02970875a9d3469d77",
      "description": "CONVERSATION: IN LOVE",
      "audiofile": "modules/a6062aa6-1ebc-44f4-a9ca-a8535f33648d.mp3>mrrightcomplete (1).mp3",
      "drillfile": "modules/50ce3f88-fb9a-42d3-8571-e2851ffa643c.pdf>He_s head over heels in love with you.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:05.194995'),
      "id": "377feecce3434e02970875a9d3469d77",
      "description": "CONVERSATION: IN LOVE",
      "audiofile": "modules/a6062aa6-1ebc-44f4-a9ca-a8535f33648d.mp3>mrrightcomplete (1).mp3",
      "drillfile": "modules/50ce3f88-fb9a-42d3-8571-e2851ffa643c.pdf>He_s head over heels in love with you.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:30.926039'),
      "id": "4930a5ad8ea443a1b890460e068dc0a0",
      "description": "CONVERSATION: IRON STOMACH",
      "audiofile": "modules/3051efa5-6a84-4f9a-a33c-497ee878cdd0.mp3>ironstomachcomp.mp3",
      "drillfile": "modules/42e732d7-440a-4803-8bc6-d0f5ca5060f1.pdf>We Have an Iron Stomach.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:30.926039'),
      "id": "4930a5ad8ea443a1b890460e068dc0a0",
      "description": "CONVERSATION: IRON STOMACH",
      "audiofile": "modules/3051efa5-6a84-4f9a-a33c-497ee878cdd0.mp3>ironstomachcomp.mp3",
      "drillfile": "modules/42e732d7-440a-4803-8bc6-d0f5ca5060f1.pdf>We Have an Iron Stomach.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:30.926039'),
      "id": "4930a5ad8ea443a1b890460e068dc0a0",
      "description": "CONVERSATION: IRON STOMACH",
      "audiofile": "modules/3051efa5-6a84-4f9a-a33c-497ee878cdd0.mp3>ironstomachcomp.mp3",
      "drillfile": "modules/42e732d7-440a-4803-8bc6-d0f5ca5060f1.pdf>We Have an Iron Stomach.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:30.926039'),
      "id": "4930a5ad8ea443a1b890460e068dc0a0",
      "description": "CONVERSATION: IRON STOMACH",
      "audiofile": "modules/3051efa5-6a84-4f9a-a33c-497ee878cdd0.mp3>ironstomachcomp.mp3",
      "drillfile": "modules/42e732d7-440a-4803-8bc6-d0f5ca5060f1.pdf>We Have an Iron Stomach.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:30.926039'),
      "id": "4930a5ad8ea443a1b890460e068dc0a0",
      "description": "CONVERSATION: IRON STOMACH",
      "audiofile": "modules/3051efa5-6a84-4f9a-a33c-497ee878cdd0.mp3>ironstomachcomp.mp3",
      "drillfile": "modules/42e732d7-440a-4803-8bc6-d0f5ca5060f1.pdf>We Have an Iron Stomach.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:30.926039'),
      "id": "4930a5ad8ea443a1b890460e068dc0a0",
      "description": "CONVERSATION: IRON STOMACH",
      "audiofile": "modules/3051efa5-6a84-4f9a-a33c-497ee878cdd0.mp3>ironstomachcomp.mp3",
      "drillfile": "modules/42e732d7-440a-4803-8bc6-d0f5ca5060f1.pdf>We Have an Iron Stomach.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:55.025166'),
      "id": "6ce7eacc8bbf4759899f9dc26b7748da",
      "description": "CONVERSATION: IS YOUR PHONE OUT OF ORDER?",
      "audiofile": "modules/1e1e063a-f5ac-46ed-92c2-0fd06c28dba1.mp3>outofordercom.mp3",
      "drillfile": "modules/35e2d750-fa71-46bf-a05c-0a51575fa1ee.pdf>IS YOUR PHONE OUT OF ORDER_.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:55.025166'),
      "id": "6ce7eacc8bbf4759899f9dc26b7748da",
      "description": "CONVERSATION: IS YOUR PHONE OUT OF ORDER?",
      "audiofile": "modules/1e1e063a-f5ac-46ed-92c2-0fd06c28dba1.mp3>outofordercom.mp3",
      "drillfile": "modules/35e2d750-fa71-46bf-a05c-0a51575fa1ee.pdf>IS YOUR PHONE OUT OF ORDER_.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:55.025166'),
      "id": "6ce7eacc8bbf4759899f9dc26b7748da",
      "description": "CONVERSATION: IS YOUR PHONE OUT OF ORDER?",
      "audiofile": "modules/1e1e063a-f5ac-46ed-92c2-0fd06c28dba1.mp3>outofordercom.mp3",
      "drillfile": "modules/35e2d750-fa71-46bf-a05c-0a51575fa1ee.pdf>IS YOUR PHONE OUT OF ORDER_.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:55.025166'),
      "id": "6ce7eacc8bbf4759899f9dc26b7748da",
      "description": "CONVERSATION: IS YOUR PHONE OUT OF ORDER?",
      "audiofile": "modules/1e1e063a-f5ac-46ed-92c2-0fd06c28dba1.mp3>outofordercom.mp3",
      "drillfile": "modules/35e2d750-fa71-46bf-a05c-0a51575fa1ee.pdf>IS YOUR PHONE OUT OF ORDER_.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:55.025166'),
      "id": "6ce7eacc8bbf4759899f9dc26b7748da",
      "description": "CONVERSATION: IS YOUR PHONE OUT OF ORDER?",
      "audiofile": "modules/1e1e063a-f5ac-46ed-92c2-0fd06c28dba1.mp3>outofordercom.mp3",
      "drillfile": "modules/35e2d750-fa71-46bf-a05c-0a51575fa1ee.pdf>IS YOUR PHONE OUT OF ORDER_.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:27:55.025166'),
      "id": "6ce7eacc8bbf4759899f9dc26b7748da",
      "description": "CONVERSATION: IS YOUR PHONE OUT OF ORDER?",
      "audiofile": "modules/1e1e063a-f5ac-46ed-92c2-0fd06c28dba1.mp3>outofordercom.mp3",
      "drillfile": "modules/35e2d750-fa71-46bf-a05c-0a51575fa1ee.pdf>IS YOUR PHONE OUT OF ORDER_.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:28:20.626068'),
      "id": "7a508b34576d4ab2b67aefb91cd4531c",
      "description": "CONVERSATION: IT KNOCKS OUT BACTERIA",
      "audiofile": "modules/aee68005-4b71-4d5a-bdc0-a804afc55fb6.mp3>knockoutfungicom.mp3",
      "drillfile": "modules/98a14fcc-d670-4845-911d-c0f7f07c358a.pdf>It Knocks Out Bacteria and Gungi - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:28:20.626068'),
      "id": "7a508b34576d4ab2b67aefb91cd4531c",
      "description": "CONVERSATION: IT KNOCKS OUT BACTERIA",
      "audiofile": "modules/aee68005-4b71-4d5a-bdc0-a804afc55fb6.mp3>knockoutfungicom.mp3",
      "drillfile": "modules/98a14fcc-d670-4845-911d-c0f7f07c358a.pdf>It Knocks Out Bacteria and Gungi - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:28:20.626068'),
      "id": "7a508b34576d4ab2b67aefb91cd4531c",
      "description": "CONVERSATION: IT KNOCKS OUT BACTERIA",
      "audiofile": "modules/aee68005-4b71-4d5a-bdc0-a804afc55fb6.mp3>knockoutfungicom.mp3",
      "drillfile": "modules/98a14fcc-d670-4845-911d-c0f7f07c358a.pdf>It Knocks Out Bacteria and Gungi - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:28:20.626068'),
      "id": "7a508b34576d4ab2b67aefb91cd4531c",
      "description": "CONVERSATION: IT KNOCKS OUT BACTERIA",
      "audiofile": "modules/aee68005-4b71-4d5a-bdc0-a804afc55fb6.mp3>knockoutfungicom.mp3",
      "drillfile": "modules/98a14fcc-d670-4845-911d-c0f7f07c358a.pdf>It Knocks Out Bacteria and Gungi - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:28:20.626068'),
      "id": "7a508b34576d4ab2b67aefb91cd4531c",
      "description": "CONVERSATION: IT KNOCKS OUT BACTERIA",
      "audiofile": "modules/aee68005-4b71-4d5a-bdc0-a804afc55fb6.mp3>knockoutfungicom.mp3",
      "drillfile": "modules/98a14fcc-d670-4845-911d-c0f7f07c358a.pdf>It Knocks Out Bacteria and Gungi - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:28:20.626068'),
      "id": "7a508b34576d4ab2b67aefb91cd4531c",
      "description": "CONVERSATION: IT KNOCKS OUT BACTERIA",
      "audiofile": "modules/aee68005-4b71-4d5a-bdc0-a804afc55fb6.mp3>knockoutfungicom.mp3",
      "drillfile": "modules/98a14fcc-d670-4845-911d-c0f7f07c358a.pdf>It Knocks Out Bacteria and Gungi - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:28:46.142759'),
      "id": "b3d6cdad8ef0424f8f5878a9d4116ac1",
      "description": "CONVERSATION: IT TASTE STALE",
      "audiofile": "modules/195db120-af52-4480-aba2-7326742c1197.mp3>stalecomplete.mp3",
      "drillfile": "modules/4702cfff-e3ac-4f5a-8cbd-83548e651fc4.pdf>It tastes stale.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:28:46.142759'),
      "id": "b3d6cdad8ef0424f8f5878a9d4116ac1",
      "description": "CONVERSATION: IT TASTE STALE",
      "audiofile": "modules/195db120-af52-4480-aba2-7326742c1197.mp3>stalecomplete.mp3",
      "drillfile": "modules/4702cfff-e3ac-4f5a-8cbd-83548e651fc4.pdf>It tastes stale.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:28:46.142759'),
      "id": "b3d6cdad8ef0424f8f5878a9d4116ac1",
      "description": "CONVERSATION: IT TASTE STALE",
      "audiofile": "modules/195db120-af52-4480-aba2-7326742c1197.mp3>stalecomplete.mp3",
      "drillfile": "modules/4702cfff-e3ac-4f5a-8cbd-83548e651fc4.pdf>It tastes stale.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:28:46.142759'),
      "id": "b3d6cdad8ef0424f8f5878a9d4116ac1",
      "description": "CONVERSATION: IT TASTE STALE",
      "audiofile": "modules/195db120-af52-4480-aba2-7326742c1197.mp3>stalecomplete.mp3",
      "drillfile": "modules/4702cfff-e3ac-4f5a-8cbd-83548e651fc4.pdf>It tastes stale.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:28:46.142759'),
      "id": "b3d6cdad8ef0424f8f5878a9d4116ac1",
      "description": "CONVERSATION: IT TASTE STALE",
      "audiofile": "modules/195db120-af52-4480-aba2-7326742c1197.mp3>stalecomplete.mp3",
      "drillfile": "modules/4702cfff-e3ac-4f5a-8cbd-83548e651fc4.pdf>It tastes stale.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:28:46.142759'),
      "id": "b3d6cdad8ef0424f8f5878a9d4116ac1",
      "description": "CONVERSATION: IT TASTE STALE",
      "audiofile": "modules/195db120-af52-4480-aba2-7326742c1197.mp3>stalecomplete.mp3",
      "drillfile": "modules/4702cfff-e3ac-4f5a-8cbd-83548e651fc4.pdf>It tastes stale.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:10.578059'),
      "id": "83023f02d07e49f7851d76d2db82f777",
      "description": "CONVERSATION: IT'S HARD TO KEEP",
      "audiofile": "modules/b7245b2e-b51b-43a3-a439-46394caa5039.mp3>keepupcontactcomplete.mp3",
      "drillfile": "modules/05ae8d41-3cfd-414a-b072-91c38fa5eb29.pdf>It_s hard to keep up contact - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:10.578059'),
      "id": "83023f02d07e49f7851d76d2db82f777",
      "description": "CONVERSATION: IT'S HARD TO KEEP",
      "audiofile": "modules/b7245b2e-b51b-43a3-a439-46394caa5039.mp3>keepupcontactcomplete.mp3",
      "drillfile": "modules/05ae8d41-3cfd-414a-b072-91c38fa5eb29.pdf>It_s hard to keep up contact - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:10.578059'),
      "id": "83023f02d07e49f7851d76d2db82f777",
      "description": "CONVERSATION: IT'S HARD TO KEEP",
      "audiofile": "modules/b7245b2e-b51b-43a3-a439-46394caa5039.mp3>keepupcontactcomplete.mp3",
      "drillfile": "modules/05ae8d41-3cfd-414a-b072-91c38fa5eb29.pdf>It_s hard to keep up contact - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:10.578059'),
      "id": "83023f02d07e49f7851d76d2db82f777",
      "description": "CONVERSATION: IT'S HARD TO KEEP",
      "audiofile": "modules/b7245b2e-b51b-43a3-a439-46394caa5039.mp3>keepupcontactcomplete.mp3",
      "drillfile": "modules/05ae8d41-3cfd-414a-b072-91c38fa5eb29.pdf>It_s hard to keep up contact - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:10.578059'),
      "id": "83023f02d07e49f7851d76d2db82f777",
      "description": "CONVERSATION: IT'S HARD TO KEEP",
      "audiofile": "modules/b7245b2e-b51b-43a3-a439-46394caa5039.mp3>keepupcontactcomplete.mp3",
      "drillfile": "modules/05ae8d41-3cfd-414a-b072-91c38fa5eb29.pdf>It_s hard to keep up contact - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:10.578059'),
      "id": "83023f02d07e49f7851d76d2db82f777",
      "description": "CONVERSATION: IT'S HARD TO KEEP",
      "audiofile": "modules/b7245b2e-b51b-43a3-a439-46394caa5039.mp3>keepupcontactcomplete.mp3",
      "drillfile": "modules/05ae8d41-3cfd-414a-b072-91c38fa5eb29.pdf>It_s hard to keep up contact - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:33.805647'),
      "id": "b08de3da1d68416e92320749b98ca378",
      "description": "CONVERSATION: IT'S ON ME",
      "audiofile": "modules/c6945f83-b1d7-498c-8dca-995e82f84b70.mp3>itsonme_complete.mp3",
      "drillfile": "modules/bed3f0c0-0d09-418b-bd41-af3735e842d4.pdf>It_s on me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:33.805647'),
      "id": "b08de3da1d68416e92320749b98ca378",
      "description": "CONVERSATION: IT'S ON ME",
      "audiofile": "modules/c6945f83-b1d7-498c-8dca-995e82f84b70.mp3>itsonme_complete.mp3",
      "drillfile": "modules/bed3f0c0-0d09-418b-bd41-af3735e842d4.pdf>It_s on me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:33.805647'),
      "id": "b08de3da1d68416e92320749b98ca378",
      "description": "CONVERSATION: IT'S ON ME",
      "audiofile": "modules/c6945f83-b1d7-498c-8dca-995e82f84b70.mp3>itsonme_complete.mp3",
      "drillfile": "modules/bed3f0c0-0d09-418b-bd41-af3735e842d4.pdf>It_s on me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:33.805647'),
      "id": "b08de3da1d68416e92320749b98ca378",
      "description": "CONVERSATION: IT'S ON ME",
      "audiofile": "modules/c6945f83-b1d7-498c-8dca-995e82f84b70.mp3>itsonme_complete.mp3",
      "drillfile": "modules/bed3f0c0-0d09-418b-bd41-af3735e842d4.pdf>It_s on me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:33.805647'),
      "id": "b08de3da1d68416e92320749b98ca378",
      "description": "CONVERSATION: IT'S ON ME",
      "audiofile": "modules/c6945f83-b1d7-498c-8dca-995e82f84b70.mp3>itsonme_complete.mp3",
      "drillfile": "modules/bed3f0c0-0d09-418b-bd41-af3735e842d4.pdf>It_s on me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:33.805647'),
      "id": "b08de3da1d68416e92320749b98ca378",
      "description": "CONVERSATION: IT'S ON ME",
      "audiofile": "modules/c6945f83-b1d7-498c-8dca-995e82f84b70.mp3>itsonme_complete.mp3",
      "drillfile": "modules/bed3f0c0-0d09-418b-bd41-af3735e842d4.pdf>It_s on me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:54.381579'),
      "id": "eb21c54bc8754a9087e5f25fd09df43e",
      "description": "CONVERSATION: KEEP IN MIND",
      "audiofile": "modules/f664d7e2-539f-462b-9d16-c8f30a5462f0.mp3>keepthatinmindcomplete.mp3",
      "drillfile": "modules/7ee3286f-d1fd-4f31-919a-bd1bbb743a70.pdf>I_ll keep that in mind.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:54.381579'),
      "id": "eb21c54bc8754a9087e5f25fd09df43e",
      "description": "CONVERSATION: KEEP IN MIND",
      "audiofile": "modules/f664d7e2-539f-462b-9d16-c8f30a5462f0.mp3>keepthatinmindcomplete.mp3",
      "drillfile": "modules/7ee3286f-d1fd-4f31-919a-bd1bbb743a70.pdf>I_ll keep that in mind.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:54.381579'),
      "id": "eb21c54bc8754a9087e5f25fd09df43e",
      "description": "CONVERSATION: KEEP IN MIND",
      "audiofile": "modules/f664d7e2-539f-462b-9d16-c8f30a5462f0.mp3>keepthatinmindcomplete.mp3",
      "drillfile": "modules/7ee3286f-d1fd-4f31-919a-bd1bbb743a70.pdf>I_ll keep that in mind.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:54.381579'),
      "id": "eb21c54bc8754a9087e5f25fd09df43e",
      "description": "CONVERSATION: KEEP IN MIND",
      "audiofile": "modules/f664d7e2-539f-462b-9d16-c8f30a5462f0.mp3>keepthatinmindcomplete.mp3",
      "drillfile": "modules/7ee3286f-d1fd-4f31-919a-bd1bbb743a70.pdf>I_ll keep that in mind.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:54.381579'),
      "id": "eb21c54bc8754a9087e5f25fd09df43e",
      "description": "CONVERSATION: KEEP IN MIND",
      "audiofile": "modules/f664d7e2-539f-462b-9d16-c8f30a5462f0.mp3>keepthatinmindcomplete.mp3",
      "drillfile": "modules/7ee3286f-d1fd-4f31-919a-bd1bbb743a70.pdf>I_ll keep that in mind.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:29:54.381579'),
      "id": "eb21c54bc8754a9087e5f25fd09df43e",
      "description": "CONVERSATION: KEEP IN MIND",
      "audiofile": "modules/f664d7e2-539f-462b-9d16-c8f30a5462f0.mp3>keepthatinmindcomplete.mp3",
      "drillfile": "modules/7ee3286f-d1fd-4f31-919a-bd1bbb743a70.pdf>I_ll keep that in mind.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:12.793548'),
      "id": "d68d420bdcde4b16983d36b2b01570fc",
      "description": "CONVERSATION: LET ME GET BACK",
      "audiofile": "modules/19c940b8-4209-49bf-b5cd-19073f3a24aa.mp3>getbackcom.mp3",
      "drillfile": "modules/4b716412-cbbc-4752-ba49-c78bdbe63608.pdf>Let Me Get Back to You in a Few Minutes - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:12.793548'),
      "id": "d68d420bdcde4b16983d36b2b01570fc",
      "description": "CONVERSATION: LET ME GET BACK",
      "audiofile": "modules/19c940b8-4209-49bf-b5cd-19073f3a24aa.mp3>getbackcom.mp3",
      "drillfile": "modules/4b716412-cbbc-4752-ba49-c78bdbe63608.pdf>Let Me Get Back to You in a Few Minutes - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:12.793548'),
      "id": "d68d420bdcde4b16983d36b2b01570fc",
      "description": "CONVERSATION: LET ME GET BACK",
      "audiofile": "modules/19c940b8-4209-49bf-b5cd-19073f3a24aa.mp3>getbackcom.mp3",
      "drillfile": "modules/4b716412-cbbc-4752-ba49-c78bdbe63608.pdf>Let Me Get Back to You in a Few Minutes - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:12.793548'),
      "id": "d68d420bdcde4b16983d36b2b01570fc",
      "description": "CONVERSATION: LET ME GET BACK",
      "audiofile": "modules/19c940b8-4209-49bf-b5cd-19073f3a24aa.mp3>getbackcom.mp3",
      "drillfile": "modules/4b716412-cbbc-4752-ba49-c78bdbe63608.pdf>Let Me Get Back to You in a Few Minutes - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:12.793548'),
      "id": "d68d420bdcde4b16983d36b2b01570fc",
      "description": "CONVERSATION: LET ME GET BACK",
      "audiofile": "modules/19c940b8-4209-49bf-b5cd-19073f3a24aa.mp3>getbackcom.mp3",
      "drillfile": "modules/4b716412-cbbc-4752-ba49-c78bdbe63608.pdf>Let Me Get Back to You in a Few Minutes - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:12.793548'),
      "id": "d68d420bdcde4b16983d36b2b01570fc",
      "description": "CONVERSATION: LET ME GET BACK",
      "audiofile": "modules/19c940b8-4209-49bf-b5cd-19073f3a24aa.mp3>getbackcom.mp3",
      "drillfile": "modules/4b716412-cbbc-4752-ba49-c78bdbe63608.pdf>Let Me Get Back to You in a Few Minutes - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:30.482176'),
      "id": "5a35afe8868d4078aa2d3a0ccd871042",
      "description": "CONVERSATION:  LIFE",
      "audiofile": "modules/1fa804fe-91b9-4bc8-8d7f-67b71832973e.mp3>tightschedule_complete.mp3",
      "drillfile": "modules/4b3f4d21-236f-47eb-8238-761ba25e8859.pdf>I_ve got a pretty tight schedule today.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:30.482176'),
      "id": "5a35afe8868d4078aa2d3a0ccd871042",
      "description": "CONVERSATION:  LIFE",
      "audiofile": "modules/1fa804fe-91b9-4bc8-8d7f-67b71832973e.mp3>tightschedule_complete.mp3",
      "drillfile": "modules/4b3f4d21-236f-47eb-8238-761ba25e8859.pdf>I_ve got a pretty tight schedule today.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:30.482176'),
      "id": "5a35afe8868d4078aa2d3a0ccd871042",
      "description": "CONVERSATION:  LIFE",
      "audiofile": "modules/1fa804fe-91b9-4bc8-8d7f-67b71832973e.mp3>tightschedule_complete.mp3",
      "drillfile": "modules/4b3f4d21-236f-47eb-8238-761ba25e8859.pdf>I_ve got a pretty tight schedule today.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:30.482176'),
      "id": "5a35afe8868d4078aa2d3a0ccd871042",
      "description": "CONVERSATION:  LIFE",
      "audiofile": "modules/1fa804fe-91b9-4bc8-8d7f-67b71832973e.mp3>tightschedule_complete.mp3",
      "drillfile": "modules/4b3f4d21-236f-47eb-8238-761ba25e8859.pdf>I_ve got a pretty tight schedule today.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:30.482176'),
      "id": "5a35afe8868d4078aa2d3a0ccd871042",
      "description": "CONVERSATION:  LIFE",
      "audiofile": "modules/1fa804fe-91b9-4bc8-8d7f-67b71832973e.mp3>tightschedule_complete.mp3",
      "drillfile": "modules/4b3f4d21-236f-47eb-8238-761ba25e8859.pdf>I_ve got a pretty tight schedule today.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:30.482176'),
      "id": "5a35afe8868d4078aa2d3a0ccd871042",
      "description": "CONVERSATION:  LIFE",
      "audiofile": "modules/1fa804fe-91b9-4bc8-8d7f-67b71832973e.mp3>tightschedule_complete.mp3",
      "drillfile": "modules/4b3f4d21-236f-47eb-8238-761ba25e8859.pdf>I_ve got a pretty tight schedule today.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:49.688801'),
      "id": "c6447cd62e774e23b3a5dc1de8aad0ac",
      "description": "CONVERSATION: LONG FACEQ",
      "audiofile": "modules/f4c1c834-edd9-4301-b016-3adcacac421b.mp3>longfacecomplete.mp3",
      "drillfile": "modules/b7c3cb0c-7cbf-4955-8ad5-d88a20a423d8.pdf>Why does she have a long face.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:49.688801'),
      "id": "c6447cd62e774e23b3a5dc1de8aad0ac",
      "description": "CONVERSATION: LONG FACEQ",
      "audiofile": "modules/f4c1c834-edd9-4301-b016-3adcacac421b.mp3>longfacecomplete.mp3",
      "drillfile": "modules/b7c3cb0c-7cbf-4955-8ad5-d88a20a423d8.pdf>Why does she have a long face.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:49.688801'),
      "id": "c6447cd62e774e23b3a5dc1de8aad0ac",
      "description": "CONVERSATION: LONG FACEQ",
      "audiofile": "modules/f4c1c834-edd9-4301-b016-3adcacac421b.mp3>longfacecomplete.mp3",
      "drillfile": "modules/b7c3cb0c-7cbf-4955-8ad5-d88a20a423d8.pdf>Why does she have a long face.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:49.688801'),
      "id": "c6447cd62e774e23b3a5dc1de8aad0ac",
      "description": "CONVERSATION: LONG FACEQ",
      "audiofile": "modules/f4c1c834-edd9-4301-b016-3adcacac421b.mp3>longfacecomplete.mp3",
      "drillfile": "modules/b7c3cb0c-7cbf-4955-8ad5-d88a20a423d8.pdf>Why does she have a long face.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:49.688801'),
      "id": "c6447cd62e774e23b3a5dc1de8aad0ac",
      "description": "CONVERSATION: LONG FACEQ",
      "audiofile": "modules/f4c1c834-edd9-4301-b016-3adcacac421b.mp3>longfacecomplete.mp3",
      "drillfile": "modules/b7c3cb0c-7cbf-4955-8ad5-d88a20a423d8.pdf>Why does she have a long face.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:30:49.688801'),
      "id": "c6447cd62e774e23b3a5dc1de8aad0ac",
      "description": "CONVERSATION: LONG FACEQ",
      "audiofile": "modules/f4c1c834-edd9-4301-b016-3adcacac421b.mp3>longfacecomplete.mp3",
      "drillfile": "modules/b7c3cb0c-7cbf-4955-8ad5-d88a20a423d8.pdf>Why does she have a long face.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:09.996252'),
      "id": "e323c5257dc740d68c70c8790b89ac52",
      "description": "CONVERSATION: LOT'S OF FLUID",
      "audiofile": "modules/ca102e72-882f-4bcf-95ae-6002e2e334d6.mp3>fluidscomplete.mp3",
      "drillfile": "modules/42f1d424-ca4d-427b-a2f1-aeb7bef28400.pdf>You_ve got to drink a lot of fluids.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:09.996252'),
      "id": "e323c5257dc740d68c70c8790b89ac52",
      "description": "CONVERSATION: LOT'S OF FLUID",
      "audiofile": "modules/ca102e72-882f-4bcf-95ae-6002e2e334d6.mp3>fluidscomplete.mp3",
      "drillfile": "modules/42f1d424-ca4d-427b-a2f1-aeb7bef28400.pdf>You_ve got to drink a lot of fluids.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:09.996252'),
      "id": "e323c5257dc740d68c70c8790b89ac52",
      "description": "CONVERSATION: LOT'S OF FLUID",
      "audiofile": "modules/ca102e72-882f-4bcf-95ae-6002e2e334d6.mp3>fluidscomplete.mp3",
      "drillfile": "modules/42f1d424-ca4d-427b-a2f1-aeb7bef28400.pdf>You_ve got to drink a lot of fluids.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:09.996252'),
      "id": "e323c5257dc740d68c70c8790b89ac52",
      "description": "CONVERSATION: LOT'S OF FLUID",
      "audiofile": "modules/ca102e72-882f-4bcf-95ae-6002e2e334d6.mp3>fluidscomplete.mp3",
      "drillfile": "modules/42f1d424-ca4d-427b-a2f1-aeb7bef28400.pdf>You_ve got to drink a lot of fluids.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:09.996252'),
      "id": "e323c5257dc740d68c70c8790b89ac52",
      "description": "CONVERSATION: LOT'S OF FLUID",
      "audiofile": "modules/ca102e72-882f-4bcf-95ae-6002e2e334d6.mp3>fluidscomplete.mp3",
      "drillfile": "modules/42f1d424-ca4d-427b-a2f1-aeb7bef28400.pdf>You_ve got to drink a lot of fluids.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:09.996252'),
      "id": "e323c5257dc740d68c70c8790b89ac52",
      "description": "CONVERSATION: LOT'S OF FLUID",
      "audiofile": "modules/ca102e72-882f-4bcf-95ae-6002e2e334d6.mp3>fluidscomplete.mp3",
      "drillfile": "modules/42f1d424-ca4d-427b-a2f1-aeb7bef28400.pdf>You_ve got to drink a lot of fluids.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:30.756045'),
      "id": "37644730b86046e88c4cf5c4a0e18ecb",
      "description": "CONVERSATION: MAKE IT SMALL",
      "audiofile": "modules/577dba22-9a87-4e43-8a1a-4afb7e19d1dd.mp3>smallcomplete.mp3",
      "drillfile": "modules/546283e8-32c7-4731-83fb-3de11198e789.pdf>Make it small, please - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:30.756045'),
      "id": "37644730b86046e88c4cf5c4a0e18ecb",
      "description": "CONVERSATION: MAKE IT SMALL",
      "audiofile": "modules/577dba22-9a87-4e43-8a1a-4afb7e19d1dd.mp3>smallcomplete.mp3",
      "drillfile": "modules/546283e8-32c7-4731-83fb-3de11198e789.pdf>Make it small, please - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:30.756045'),
      "id": "37644730b86046e88c4cf5c4a0e18ecb",
      "description": "CONVERSATION: MAKE IT SMALL",
      "audiofile": "modules/577dba22-9a87-4e43-8a1a-4afb7e19d1dd.mp3>smallcomplete.mp3",
      "drillfile": "modules/546283e8-32c7-4731-83fb-3de11198e789.pdf>Make it small, please - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:30.756045'),
      "id": "37644730b86046e88c4cf5c4a0e18ecb",
      "description": "CONVERSATION: MAKE IT SMALL",
      "audiofile": "modules/577dba22-9a87-4e43-8a1a-4afb7e19d1dd.mp3>smallcomplete.mp3",
      "drillfile": "modules/546283e8-32c7-4731-83fb-3de11198e789.pdf>Make it small, please - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:30.756045'),
      "id": "37644730b86046e88c4cf5c4a0e18ecb",
      "description": "CONVERSATION: MAKE IT SMALL",
      "audiofile": "modules/577dba22-9a87-4e43-8a1a-4afb7e19d1dd.mp3>smallcomplete.mp3",
      "drillfile": "modules/546283e8-32c7-4731-83fb-3de11198e789.pdf>Make it small, please - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:30.756045'),
      "id": "37644730b86046e88c4cf5c4a0e18ecb",
      "description": "CONVERSATION: MAKE IT SMALL",
      "audiofile": "modules/577dba22-9a87-4e43-8a1a-4afb7e19d1dd.mp3>smallcomplete.mp3",
      "drillfile": "modules/546283e8-32c7-4731-83fb-3de11198e789.pdf>Make it small, please - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:53.701858'),
      "id": "0661b5ce27c54812b7564c1c7743543b",
      "description": "CONVERSATION: MY HEAD IS SPINNING",
      "audiofile": "modules/17d48d37-b5fc-4de4-a94d-5d48c3bd8e9c.mp3>headspincomp.mp3",
      "drillfile": "modules/09eed272-b9d7-4867-90b7-9728c10b42e4.pdf>My Head Is Spinning Now.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:53.701858'),
      "id": "0661b5ce27c54812b7564c1c7743543b",
      "description": "CONVERSATION: MY HEAD IS SPINNING",
      "audiofile": "modules/17d48d37-b5fc-4de4-a94d-5d48c3bd8e9c.mp3>headspincomp.mp3",
      "drillfile": "modules/09eed272-b9d7-4867-90b7-9728c10b42e4.pdf>My Head Is Spinning Now.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:53.701858'),
      "id": "0661b5ce27c54812b7564c1c7743543b",
      "description": "CONVERSATION: MY HEAD IS SPINNING",
      "audiofile": "modules/17d48d37-b5fc-4de4-a94d-5d48c3bd8e9c.mp3>headspincomp.mp3",
      "drillfile": "modules/09eed272-b9d7-4867-90b7-9728c10b42e4.pdf>My Head Is Spinning Now.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:53.701858'),
      "id": "0661b5ce27c54812b7564c1c7743543b",
      "description": "CONVERSATION: MY HEAD IS SPINNING",
      "audiofile": "modules/17d48d37-b5fc-4de4-a94d-5d48c3bd8e9c.mp3>headspincomp.mp3",
      "drillfile": "modules/09eed272-b9d7-4867-90b7-9728c10b42e4.pdf>My Head Is Spinning Now.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:53.701858'),
      "id": "0661b5ce27c54812b7564c1c7743543b",
      "description": "CONVERSATION: MY HEAD IS SPINNING",
      "audiofile": "modules/17d48d37-b5fc-4de4-a94d-5d48c3bd8e9c.mp3>headspincomp.mp3",
      "drillfile": "modules/09eed272-b9d7-4867-90b7-9728c10b42e4.pdf>My Head Is Spinning Now.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:31:53.701858'),
      "id": "0661b5ce27c54812b7564c1c7743543b",
      "description": "CONVERSATION: MY HEAD IS SPINNING",
      "audiofile": "modules/17d48d37-b5fc-4de4-a94d-5d48c3bd8e9c.mp3>headspincomp.mp3",
      "drillfile": "modules/09eed272-b9d7-4867-90b7-9728c10b42e4.pdf>My Head Is Spinning Now.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:11.774896'),
      "id": "8f6f41839d4448098e400dd9eaf14eb6",
      "description": "CONVERSATION: MOMENT",
      "audiofile": "modules/4767dc31-df1a-41b8-a7d0-6f716ef57b9e.mp3>tiedupcomplete.mp3",
      "drillfile": "modules/a9aa609a-e890-4cf9-ac18-b6476a699e4b.pdf>I_m tied up with something for the moment.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:11.774896'),
      "id": "8f6f41839d4448098e400dd9eaf14eb6",
      "description": "CONVERSATION: MOMENT",
      "audiofile": "modules/4767dc31-df1a-41b8-a7d0-6f716ef57b9e.mp3>tiedupcomplete.mp3",
      "drillfile": "modules/a9aa609a-e890-4cf9-ac18-b6476a699e4b.pdf>I_m tied up with something for the moment.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:11.774896'),
      "id": "8f6f41839d4448098e400dd9eaf14eb6",
      "description": "CONVERSATION: MOMENT",
      "audiofile": "modules/4767dc31-df1a-41b8-a7d0-6f716ef57b9e.mp3>tiedupcomplete.mp3",
      "drillfile": "modules/a9aa609a-e890-4cf9-ac18-b6476a699e4b.pdf>I_m tied up with something for the moment.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:11.774896'),
      "id": "8f6f41839d4448098e400dd9eaf14eb6",
      "description": "CONVERSATION: MOMENT",
      "audiofile": "modules/4767dc31-df1a-41b8-a7d0-6f716ef57b9e.mp3>tiedupcomplete.mp3",
      "drillfile": "modules/a9aa609a-e890-4cf9-ac18-b6476a699e4b.pdf>I_m tied up with something for the moment.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:11.774896'),
      "id": "8f6f41839d4448098e400dd9eaf14eb6",
      "description": "CONVERSATION: MOMENT",
      "audiofile": "modules/4767dc31-df1a-41b8-a7d0-6f716ef57b9e.mp3>tiedupcomplete.mp3",
      "drillfile": "modules/a9aa609a-e890-4cf9-ac18-b6476a699e4b.pdf>I_m tied up with something for the moment.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:11.774896'),
      "id": "8f6f41839d4448098e400dd9eaf14eb6",
      "description": "CONVERSATION: MOMENT",
      "audiofile": "modules/4767dc31-df1a-41b8-a7d0-6f716ef57b9e.mp3>tiedupcomplete.mp3",
      "drillfile": "modules/a9aa609a-e890-4cf9-ac18-b6476a699e4b.pdf>I_m tied up with something for the moment.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:29.510587'),
      "id": "63cf3b4cf0014f1cb5960222e93d36fb",
      "description": "CONVERSATION: MY TELEPHONE",
      "audiofile": "modules/163b8d87-32e9-4beb-837a-d25e818cd19d.mp3>cutcom.mp3",
      "drillfile": "modules/38d94fb8-542b-4459-bade-8ca4b7d3639c.pdf>My Telephone Was Disconnected - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:29.510587'),
      "id": "63cf3b4cf0014f1cb5960222e93d36fb",
      "description": "CONVERSATION: MY TELEPHONE",
      "audiofile": "modules/163b8d87-32e9-4beb-837a-d25e818cd19d.mp3>cutcom.mp3",
      "drillfile": "modules/38d94fb8-542b-4459-bade-8ca4b7d3639c.pdf>My Telephone Was Disconnected - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:29.510587'),
      "id": "63cf3b4cf0014f1cb5960222e93d36fb",
      "description": "CONVERSATION: MY TELEPHONE",
      "audiofile": "modules/163b8d87-32e9-4beb-837a-d25e818cd19d.mp3>cutcom.mp3",
      "drillfile": "modules/38d94fb8-542b-4459-bade-8ca4b7d3639c.pdf>My Telephone Was Disconnected - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:29.510587'),
      "id": "63cf3b4cf0014f1cb5960222e93d36fb",
      "description": "CONVERSATION: MY TELEPHONE",
      "audiofile": "modules/163b8d87-32e9-4beb-837a-d25e818cd19d.mp3>cutcom.mp3",
      "drillfile": "modules/38d94fb8-542b-4459-bade-8ca4b7d3639c.pdf>My Telephone Was Disconnected - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:29.510587'),
      "id": "63cf3b4cf0014f1cb5960222e93d36fb",
      "description": "CONVERSATION: MY TELEPHONE",
      "audiofile": "modules/163b8d87-32e9-4beb-837a-d25e818cd19d.mp3>cutcom.mp3",
      "drillfile": "modules/38d94fb8-542b-4459-bade-8ca4b7d3639c.pdf>My Telephone Was Disconnected - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:29.510587'),
      "id": "63cf3b4cf0014f1cb5960222e93d36fb",
      "description": "CONVERSATION: MY TELEPHONE",
      "audiofile": "modules/163b8d87-32e9-4beb-837a-d25e818cd19d.mp3>cutcom.mp3",
      "drillfile": "modules/38d94fb8-542b-4459-bade-8ca4b7d3639c.pdf>My Telephone Was Disconnected - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:54.761871'),
      "id": "54f9819a33884f27a22be44279aa7b7d",
      "description": "CONVERSATION: NO WONDER",
      "audiofile": "modules/e4c1926d-e923-4b6c-a3fd-92001b5d95d3.mp3>lividcomplete.mp3",
      "drillfile": "modules/0934b35b-3596-45ac-9c28-46998ff56382.pdf>No Wonder You_re Livid - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:54.761871'),
      "id": "54f9819a33884f27a22be44279aa7b7d",
      "description": "CONVERSATION: NO WONDER",
      "audiofile": "modules/e4c1926d-e923-4b6c-a3fd-92001b5d95d3.mp3>lividcomplete.mp3",
      "drillfile": "modules/0934b35b-3596-45ac-9c28-46998ff56382.pdf>No Wonder You_re Livid - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:54.761871'),
      "id": "54f9819a33884f27a22be44279aa7b7d",
      "description": "CONVERSATION: NO WONDER",
      "audiofile": "modules/e4c1926d-e923-4b6c-a3fd-92001b5d95d3.mp3>lividcomplete.mp3",
      "drillfile": "modules/0934b35b-3596-45ac-9c28-46998ff56382.pdf>No Wonder You_re Livid - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:54.761871'),
      "id": "54f9819a33884f27a22be44279aa7b7d",
      "description": "CONVERSATION: NO WONDER",
      "audiofile": "modules/e4c1926d-e923-4b6c-a3fd-92001b5d95d3.mp3>lividcomplete.mp3",
      "drillfile": "modules/0934b35b-3596-45ac-9c28-46998ff56382.pdf>No Wonder You_re Livid - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:54.761871'),
      "id": "54f9819a33884f27a22be44279aa7b7d",
      "description": "CONVERSATION: NO WONDER",
      "audiofile": "modules/e4c1926d-e923-4b6c-a3fd-92001b5d95d3.mp3>lividcomplete.mp3",
      "drillfile": "modules/0934b35b-3596-45ac-9c28-46998ff56382.pdf>No Wonder You_re Livid - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:32:54.761871'),
      "id": "54f9819a33884f27a22be44279aa7b7d",
      "description": "CONVERSATION: NO WONDER",
      "audiofile": "modules/e4c1926d-e923-4b6c-a3fd-92001b5d95d3.mp3>lividcomplete.mp3",
      "drillfile": "modules/0934b35b-3596-45ac-9c28-46998ff56382.pdf>No Wonder You_re Livid - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:33:13.278638'),
      "id": "8454e808cde04109bc998bd55b99dce9",
      "description": "CONVERSATION: OFF",
      "audiofile": "modules/f630e076-a6cc-471a-b6ee-3e070d89fe49.mp3>outmindcomplete.mp3",
      "drillfile": "modules/fb561804-da8d-4411-a5a8-4e1b90e3fe2f.pdf>I can_t get it off my mind.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:33:13.278638'),
      "id": "8454e808cde04109bc998bd55b99dce9",
      "description": "CONVERSATION: OFF",
      "audiofile": "modules/f630e076-a6cc-471a-b6ee-3e070d89fe49.mp3>outmindcomplete.mp3",
      "drillfile": "modules/fb561804-da8d-4411-a5a8-4e1b90e3fe2f.pdf>I can_t get it off my mind.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:33:13.278638'),
      "id": "8454e808cde04109bc998bd55b99dce9",
      "description": "CONVERSATION: OFF",
      "audiofile": "modules/f630e076-a6cc-471a-b6ee-3e070d89fe49.mp3>outmindcomplete.mp3",
      "drillfile": "modules/fb561804-da8d-4411-a5a8-4e1b90e3fe2f.pdf>I can_t get it off my mind.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:33:13.278638'),
      "id": "8454e808cde04109bc998bd55b99dce9",
      "description": "CONVERSATION: OFF",
      "audiofile": "modules/f630e076-a6cc-471a-b6ee-3e070d89fe49.mp3>outmindcomplete.mp3",
      "drillfile": "modules/fb561804-da8d-4411-a5a8-4e1b90e3fe2f.pdf>I can_t get it off my mind.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:33:13.278638'),
      "id": "8454e808cde04109bc998bd55b99dce9",
      "description": "CONVERSATION: OFF",
      "audiofile": "modules/f630e076-a6cc-471a-b6ee-3e070d89fe49.mp3>outmindcomplete.mp3",
      "drillfile": "modules/fb561804-da8d-4411-a5a8-4e1b90e3fe2f.pdf>I can_t get it off my mind.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:33:13.278638'),
      "id": "8454e808cde04109bc998bd55b99dce9",
      "description": "CONVERSATION: OFF",
      "audiofile": "modules/f630e076-a6cc-471a-b6ee-3e070d89fe49.mp3>outmindcomplete.mp3",
      "drillfile": "modules/fb561804-da8d-4411-a5a8-4e1b90e3fe2f.pdf>I can_t get it off my mind.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:33:37.207989'),
      "id": "5194ef822c354c3eb431648010bfe17e",
      "description": "CONVERSATION: OUT OF BUSINESS",
      "audiofile": "modules/a5cb41f6-1b70-40c0-ab1a-4df0ec6ff069.mp3>outofbusinesscomp.mp3",
      "drillfile": "modules/c40eb9a5-e04a-444d-ad58-b6a527f5ef53.pdf>James went out of business recently.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:33:37.207989'),
      "id": "5194ef822c354c3eb431648010bfe17e",
      "description": "CONVERSATION: OUT OF BUSINESS",
      "audiofile": "modules/a5cb41f6-1b70-40c0-ab1a-4df0ec6ff069.mp3>outofbusinesscomp.mp3",
      "drillfile": "modules/c40eb9a5-e04a-444d-ad58-b6a527f5ef53.pdf>James went out of business recently.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:33:37.207989'),
      "id": "5194ef822c354c3eb431648010bfe17e",
      "description": "CONVERSATION: OUT OF BUSINESS",
      "audiofile": "modules/a5cb41f6-1b70-40c0-ab1a-4df0ec6ff069.mp3>outofbusinesscomp.mp3",
      "drillfile": "modules/c40eb9a5-e04a-444d-ad58-b6a527f5ef53.pdf>James went out of business recently.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:33:37.207989'),
      "id": "5194ef822c354c3eb431648010bfe17e",
      "description": "CONVERSATION: OUT OF BUSINESS",
      "audiofile": "modules/a5cb41f6-1b70-40c0-ab1a-4df0ec6ff069.mp3>outofbusinesscomp.mp3",
      "drillfile": "modules/c40eb9a5-e04a-444d-ad58-b6a527f5ef53.pdf>James went out of business recently.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:33:37.207989'),
      "id": "5194ef822c354c3eb431648010bfe17e",
      "description": "CONVERSATION: OUT OF BUSINESS",
      "audiofile": "modules/a5cb41f6-1b70-40c0-ab1a-4df0ec6ff069.mp3>outofbusinesscomp.mp3",
      "drillfile": "modules/c40eb9a5-e04a-444d-ad58-b6a527f5ef53.pdf>James went out of business recently.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:33:37.207989'),
      "id": "5194ef822c354c3eb431648010bfe17e",
      "description": "CONVERSATION: OUT OF BUSINESS",
      "audiofile": "modules/a5cb41f6-1b70-40c0-ab1a-4df0ec6ff069.mp3>outofbusinesscomp.mp3",
      "drillfile": "modules/c40eb9a5-e04a-444d-ad58-b6a527f5ef53.pdf>James went out of business recently.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:05.722751'),
      "id": "8f56255c033a4932b0853990dca27d2a",
      "description": "CONVERSATION: RAINING CATS AND DOGS",
      "audiofile": "modules/10b544de-d789-4c0f-bd54-91b3af17ecc6.mp3>catsdogscomplete.mp3",
      "drillfile": "modules/5b5b9bcd-fa5d-4cff-b164-8ac9467a8556.pdf>It_s raining cats and dogs today.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:05.722751'),
      "id": "8f56255c033a4932b0853990dca27d2a",
      "description": "CONVERSATION: RAINING CATS AND DOGS",
      "audiofile": "modules/10b544de-d789-4c0f-bd54-91b3af17ecc6.mp3>catsdogscomplete.mp3",
      "drillfile": "modules/5b5b9bcd-fa5d-4cff-b164-8ac9467a8556.pdf>It_s raining cats and dogs today.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:05.722751'),
      "id": "8f56255c033a4932b0853990dca27d2a",
      "description": "CONVERSATION: RAINING CATS AND DOGS",
      "audiofile": "modules/10b544de-d789-4c0f-bd54-91b3af17ecc6.mp3>catsdogscomplete.mp3",
      "drillfile": "modules/5b5b9bcd-fa5d-4cff-b164-8ac9467a8556.pdf>It_s raining cats and dogs today.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:05.722751'),
      "id": "8f56255c033a4932b0853990dca27d2a",
      "description": "CONVERSATION: RAINING CATS AND DOGS",
      "audiofile": "modules/10b544de-d789-4c0f-bd54-91b3af17ecc6.mp3>catsdogscomplete.mp3",
      "drillfile": "modules/5b5b9bcd-fa5d-4cff-b164-8ac9467a8556.pdf>It_s raining cats and dogs today.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:05.722751'),
      "id": "8f56255c033a4932b0853990dca27d2a",
      "description": "CONVERSATION: RAINING CATS AND DOGS",
      "audiofile": "modules/10b544de-d789-4c0f-bd54-91b3af17ecc6.mp3>catsdogscomplete.mp3",
      "drillfile": "modules/5b5b9bcd-fa5d-4cff-b164-8ac9467a8556.pdf>It_s raining cats and dogs today.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:05.722751'),
      "id": "8f56255c033a4932b0853990dca27d2a",
      "description": "CONVERSATION: RAINING CATS AND DOGS",
      "audiofile": "modules/10b544de-d789-4c0f-bd54-91b3af17ecc6.mp3>catsdogscomplete.mp3",
      "drillfile": "modules/5b5b9bcd-fa5d-4cff-b164-8ac9467a8556.pdf>It_s raining cats and dogs today.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:34.835568'),
      "id": "57e7e1d07fcf4cc9a61deb41f1926618",
      "description": "CONVERSATION: ROMANCE",
      "audiofile": "modules/adda303c-8f84-4119-bdd8-de286f4b51e0.mp3>crushcomplete.mp3",
      "drillfile": "modules/46df2714-cf0e-4e46-8034-e6f083e5b932.pdf>Someone has a crush on Jenny.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:34.835568'),
      "id": "57e7e1d07fcf4cc9a61deb41f1926618",
      "description": "CONVERSATION: ROMANCE",
      "audiofile": "modules/adda303c-8f84-4119-bdd8-de286f4b51e0.mp3>crushcomplete.mp3",
      "drillfile": "modules/46df2714-cf0e-4e46-8034-e6f083e5b932.pdf>Someone has a crush on Jenny.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:34.835568'),
      "id": "57e7e1d07fcf4cc9a61deb41f1926618",
      "description": "CONVERSATION: ROMANCE",
      "audiofile": "modules/adda303c-8f84-4119-bdd8-de286f4b51e0.mp3>crushcomplete.mp3",
      "drillfile": "modules/46df2714-cf0e-4e46-8034-e6f083e5b932.pdf>Someone has a crush on Jenny.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:34.835568'),
      "id": "57e7e1d07fcf4cc9a61deb41f1926618",
      "description": "CONVERSATION: ROMANCE",
      "audiofile": "modules/adda303c-8f84-4119-bdd8-de286f4b51e0.mp3>crushcomplete.mp3",
      "drillfile": "modules/46df2714-cf0e-4e46-8034-e6f083e5b932.pdf>Someone has a crush on Jenny.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:34.835568'),
      "id": "57e7e1d07fcf4cc9a61deb41f1926618",
      "description": "CONVERSATION: ROMANCE",
      "audiofile": "modules/adda303c-8f84-4119-bdd8-de286f4b51e0.mp3>crushcomplete.mp3",
      "drillfile": "modules/46df2714-cf0e-4e46-8034-e6f083e5b932.pdf>Someone has a crush on Jenny.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:34.835568'),
      "id": "57e7e1d07fcf4cc9a61deb41f1926618",
      "description": "CONVERSATION: ROMANCE",
      "audiofile": "modules/adda303c-8f84-4119-bdd8-de286f4b51e0.mp3>crushcomplete.mp3",
      "drillfile": "modules/46df2714-cf0e-4e46-8034-e6f083e5b932.pdf>Someone has a crush on Jenny.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:53.257285'),
      "id": "9a360ee76e10491fb1fcb03c5f4c4635",
      "description": "CONVERSATION: RUMORS",
      "audiofile": "modules/e356f2d5-c5fe-456f-8b8e-99d11388720c.mp3>rumorcomplete.mp3",
      "drillfile": "modules/d1de0867-176d-45a6-937c-0141ca8c9c5e.pdf>That_s how rumors get started.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:53.257285'),
      "id": "9a360ee76e10491fb1fcb03c5f4c4635",
      "description": "CONVERSATION: RUMORS",
      "audiofile": "modules/e356f2d5-c5fe-456f-8b8e-99d11388720c.mp3>rumorcomplete.mp3",
      "drillfile": "modules/d1de0867-176d-45a6-937c-0141ca8c9c5e.pdf>That_s how rumors get started.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:53.257285'),
      "id": "9a360ee76e10491fb1fcb03c5f4c4635",
      "description": "CONVERSATION: RUMORS",
      "audiofile": "modules/e356f2d5-c5fe-456f-8b8e-99d11388720c.mp3>rumorcomplete.mp3",
      "drillfile": "modules/d1de0867-176d-45a6-937c-0141ca8c9c5e.pdf>That_s how rumors get started.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:53.257285'),
      "id": "9a360ee76e10491fb1fcb03c5f4c4635",
      "description": "CONVERSATION: RUMORS",
      "audiofile": "modules/e356f2d5-c5fe-456f-8b8e-99d11388720c.mp3>rumorcomplete.mp3",
      "drillfile": "modules/d1de0867-176d-45a6-937c-0141ca8c9c5e.pdf>That_s how rumors get started.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:53.257285'),
      "id": "9a360ee76e10491fb1fcb03c5f4c4635",
      "description": "CONVERSATION: RUMORS",
      "audiofile": "modules/e356f2d5-c5fe-456f-8b8e-99d11388720c.mp3>rumorcomplete.mp3",
      "drillfile": "modules/d1de0867-176d-45a6-937c-0141ca8c9c5e.pdf>That_s how rumors get started.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:34:53.257285'),
      "id": "9a360ee76e10491fb1fcb03c5f4c4635",
      "description": "CONVERSATION: RUMORS",
      "audiofile": "modules/e356f2d5-c5fe-456f-8b8e-99d11388720c.mp3>rumorcomplete.mp3",
      "drillfile": "modules/d1de0867-176d-45a6-937c-0141ca8c9c5e.pdf>That_s how rumors get started.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:35:27.069335'),
      "id": "49e6c7ff058d4f14ab026ada3be6f589",
      "description": "CONVERSATION: RUSHIE",
      "audiofile": "modules/f56e4ba1-0683-4fc9-801f-d408316d61db.mp3>rushierushiecomplete.mp3",
      "drillfile": "modules/7248c141-6f45-4cb9-9633-2bda002fc77f.pdf>Why is life always rushie-rushie.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:35:27.069335'),
      "id": "49e6c7ff058d4f14ab026ada3be6f589",
      "description": "CONVERSATION: RUSHIE",
      "audiofile": "modules/f56e4ba1-0683-4fc9-801f-d408316d61db.mp3>rushierushiecomplete.mp3",
      "drillfile": "modules/7248c141-6f45-4cb9-9633-2bda002fc77f.pdf>Why is life always rushie-rushie.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:35:27.069335'),
      "id": "49e6c7ff058d4f14ab026ada3be6f589",
      "description": "CONVERSATION: RUSHIE",
      "audiofile": "modules/f56e4ba1-0683-4fc9-801f-d408316d61db.mp3>rushierushiecomplete.mp3",
      "drillfile": "modules/7248c141-6f45-4cb9-9633-2bda002fc77f.pdf>Why is life always rushie-rushie.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:35:27.069335'),
      "id": "49e6c7ff058d4f14ab026ada3be6f589",
      "description": "CONVERSATION: RUSHIE",
      "audiofile": "modules/f56e4ba1-0683-4fc9-801f-d408316d61db.mp3>rushierushiecomplete.mp3",
      "drillfile": "modules/7248c141-6f45-4cb9-9633-2bda002fc77f.pdf>Why is life always rushie-rushie.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:35:27.069335'),
      "id": "49e6c7ff058d4f14ab026ada3be6f589",
      "description": "CONVERSATION: RUSHIE",
      "audiofile": "modules/f56e4ba1-0683-4fc9-801f-d408316d61db.mp3>rushierushiecomplete.mp3",
      "drillfile": "modules/7248c141-6f45-4cb9-9633-2bda002fc77f.pdf>Why is life always rushie-rushie.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:35:27.069335'),
      "id": "49e6c7ff058d4f14ab026ada3be6f589",
      "description": "CONVERSATION: RUSHIE",
      "audiofile": "modules/f56e4ba1-0683-4fc9-801f-d408316d61db.mp3>rushierushiecomplete.mp3",
      "drillfile": "modules/7248c141-6f45-4cb9-9633-2bda002fc77f.pdf>Why is life always rushie-rushie.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:09.530821'),
      "id": "43371d8bb8014a27b2c245020a06520b",
      "description": "CONVERSATION: SEVERE COMPLETE",
      "audiofile": "modules/762a6a12-27d3-4933-bc83-a3ed553119c8.mp3>severecomplete.mp3",
      "drillfile": "modules/99d2bd23-7578-4783-92bf-0f10f284a175.pdf>The drought conditions are severe.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:09.530821'),
      "id": "43371d8bb8014a27b2c245020a06520b",
      "description": "CONVERSATION: SEVERE COMPLETE",
      "audiofile": "modules/762a6a12-27d3-4933-bc83-a3ed553119c8.mp3>severecomplete.mp3",
      "drillfile": "modules/99d2bd23-7578-4783-92bf-0f10f284a175.pdf>The drought conditions are severe.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:09.530821'),
      "id": "43371d8bb8014a27b2c245020a06520b",
      "description": "CONVERSATION: SEVERE COMPLETE",
      "audiofile": "modules/762a6a12-27d3-4933-bc83-a3ed553119c8.mp3>severecomplete.mp3",
      "drillfile": "modules/99d2bd23-7578-4783-92bf-0f10f284a175.pdf>The drought conditions are severe.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:09.530821'),
      "id": "43371d8bb8014a27b2c245020a06520b",
      "description": "CONVERSATION: SEVERE COMPLETE",
      "audiofile": "modules/762a6a12-27d3-4933-bc83-a3ed553119c8.mp3>severecomplete.mp3",
      "drillfile": "modules/99d2bd23-7578-4783-92bf-0f10f284a175.pdf>The drought conditions are severe.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:09.530821'),
      "id": "43371d8bb8014a27b2c245020a06520b",
      "description": "CONVERSATION: SEVERE COMPLETE",
      "audiofile": "modules/762a6a12-27d3-4933-bc83-a3ed553119c8.mp3>severecomplete.mp3",
      "drillfile": "modules/99d2bd23-7578-4783-92bf-0f10f284a175.pdf>The drought conditions are severe.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:09.530821'),
      "id": "43371d8bb8014a27b2c245020a06520b",
      "description": "CONVERSATION: SEVERE COMPLETE",
      "audiofile": "modules/762a6a12-27d3-4933-bc83-a3ed553119c8.mp3>severecomplete.mp3",
      "drillfile": "modules/99d2bd23-7578-4783-92bf-0f10f284a175.pdf>The drought conditions are severe.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:27.533015'),
      "id": "e8c37648c22044a7b4d21c8c4c7294aa",
      "description": "CONVERSATION: SHE POKED ME IN THE EYE",
      "audiofile": "modules/1bb4612c-0f2b-4bb8-b63c-17a7bc25aca2.mp3>pokecomplete.mp3",
      "drillfile": "modules/948213a2-b411-45b9-9ea2-59a0bb41424a.pdf>She Poked Me in the Eye - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:27.533015'),
      "id": "e8c37648c22044a7b4d21c8c4c7294aa",
      "description": "CONVERSATION: SHE POKED ME IN THE EYE",
      "audiofile": "modules/1bb4612c-0f2b-4bb8-b63c-17a7bc25aca2.mp3>pokecomplete.mp3",
      "drillfile": "modules/948213a2-b411-45b9-9ea2-59a0bb41424a.pdf>She Poked Me in the Eye - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:27.533015'),
      "id": "e8c37648c22044a7b4d21c8c4c7294aa",
      "description": "CONVERSATION: SHE POKED ME IN THE EYE",
      "audiofile": "modules/1bb4612c-0f2b-4bb8-b63c-17a7bc25aca2.mp3>pokecomplete.mp3",
      "drillfile": "modules/948213a2-b411-45b9-9ea2-59a0bb41424a.pdf>She Poked Me in the Eye - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:27.533015'),
      "id": "e8c37648c22044a7b4d21c8c4c7294aa",
      "description": "CONVERSATION: SHE POKED ME IN THE EYE",
      "audiofile": "modules/1bb4612c-0f2b-4bb8-b63c-17a7bc25aca2.mp3>pokecomplete.mp3",
      "drillfile": "modules/948213a2-b411-45b9-9ea2-59a0bb41424a.pdf>She Poked Me in the Eye - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:27.533015'),
      "id": "e8c37648c22044a7b4d21c8c4c7294aa",
      "description": "CONVERSATION: SHE POKED ME IN THE EYE",
      "audiofile": "modules/1bb4612c-0f2b-4bb8-b63c-17a7bc25aca2.mp3>pokecomplete.mp3",
      "drillfile": "modules/948213a2-b411-45b9-9ea2-59a0bb41424a.pdf>She Poked Me in the Eye - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:27.533015'),
      "id": "e8c37648c22044a7b4d21c8c4c7294aa",
      "description": "CONVERSATION: SHE POKED ME IN THE EYE",
      "audiofile": "modules/1bb4612c-0f2b-4bb8-b63c-17a7bc25aca2.mp3>pokecomplete.mp3",
      "drillfile": "modules/948213a2-b411-45b9-9ea2-59a0bb41424a.pdf>She Poked Me in the Eye - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:44.517142'),
      "id": "deaa04a44f3640babcfd6d3d72ade60b",
      "description": "CONVERSATION: SNORE",
      "audiofile": "modules/8451cf5f-2e12-4591-8d57-7c42826b6537.mp3>snore1comp.mp3",
      "drillfile": "modules/bc5842b7-0171-46eb-b743-c424f4be40fc.pdf>It Wasn_t Just Any Snore.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:44.517142'),
      "id": "deaa04a44f3640babcfd6d3d72ade60b",
      "description": "CONVERSATION: SNORE",
      "audiofile": "modules/8451cf5f-2e12-4591-8d57-7c42826b6537.mp3>snore1comp.mp3",
      "drillfile": "modules/bc5842b7-0171-46eb-b743-c424f4be40fc.pdf>It Wasn_t Just Any Snore.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:44.517142'),
      "id": "deaa04a44f3640babcfd6d3d72ade60b",
      "description": "CONVERSATION: SNORE",
      "audiofile": "modules/8451cf5f-2e12-4591-8d57-7c42826b6537.mp3>snore1comp.mp3",
      "drillfile": "modules/bc5842b7-0171-46eb-b743-c424f4be40fc.pdf>It Wasn_t Just Any Snore.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:44.517142'),
      "id": "deaa04a44f3640babcfd6d3d72ade60b",
      "description": "CONVERSATION: SNORE",
      "audiofile": "modules/8451cf5f-2e12-4591-8d57-7c42826b6537.mp3>snore1comp.mp3",
      "drillfile": "modules/bc5842b7-0171-46eb-b743-c424f4be40fc.pdf>It Wasn_t Just Any Snore.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:44.517142'),
      "id": "deaa04a44f3640babcfd6d3d72ade60b",
      "description": "CONVERSATION: SNORE",
      "audiofile": "modules/8451cf5f-2e12-4591-8d57-7c42826b6537.mp3>snore1comp.mp3",
      "drillfile": "modules/bc5842b7-0171-46eb-b743-c424f4be40fc.pdf>It Wasn_t Just Any Snore.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:36:44.517142'),
      "id": "deaa04a44f3640babcfd6d3d72ade60b",
      "description": "CONVERSATION: SNORE",
      "audiofile": "modules/8451cf5f-2e12-4591-8d57-7c42826b6537.mp3>snore1comp.mp3",
      "drillfile": "modules/bc5842b7-0171-46eb-b743-c424f4be40fc.pdf>It Wasn_t Just Any Snore.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:03.061633'),
      "id": "b1777d1c165b41a69439e8119a314eae",
      "description": "CONVERSATION: STUFFED UP",
      "audiofile": "modules/65ed085a-0d47-4efe-871d-c9285aa29ad0.mp3>headstuffcomp.mp3",
      "drillfile": "modules/aa65ac78-4577-44c6-b9fe-10a5f0cea75b.pdf>My Head Is Stuffed Up.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:03.061633'),
      "id": "b1777d1c165b41a69439e8119a314eae",
      "description": "CONVERSATION: STUFFED UP",
      "audiofile": "modules/65ed085a-0d47-4efe-871d-c9285aa29ad0.mp3>headstuffcomp.mp3",
      "drillfile": "modules/aa65ac78-4577-44c6-b9fe-10a5f0cea75b.pdf>My Head Is Stuffed Up.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:03.061633'),
      "id": "b1777d1c165b41a69439e8119a314eae",
      "description": "CONVERSATION: STUFFED UP",
      "audiofile": "modules/65ed085a-0d47-4efe-871d-c9285aa29ad0.mp3>headstuffcomp.mp3",
      "drillfile": "modules/aa65ac78-4577-44c6-b9fe-10a5f0cea75b.pdf>My Head Is Stuffed Up.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:03.061633'),
      "id": "b1777d1c165b41a69439e8119a314eae",
      "description": "CONVERSATION: STUFFED UP",
      "audiofile": "modules/65ed085a-0d47-4efe-871d-c9285aa29ad0.mp3>headstuffcomp.mp3",
      "drillfile": "modules/aa65ac78-4577-44c6-b9fe-10a5f0cea75b.pdf>My Head Is Stuffed Up.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:03.061633'),
      "id": "b1777d1c165b41a69439e8119a314eae",
      "description": "CONVERSATION: STUFFED UP",
      "audiofile": "modules/65ed085a-0d47-4efe-871d-c9285aa29ad0.mp3>headstuffcomp.mp3",
      "drillfile": "modules/aa65ac78-4577-44c6-b9fe-10a5f0cea75b.pdf>My Head Is Stuffed Up.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:03.061633'),
      "id": "b1777d1c165b41a69439e8119a314eae",
      "description": "CONVERSATION: STUFFED UP",
      "audiofile": "modules/65ed085a-0d47-4efe-871d-c9285aa29ad0.mp3>headstuffcomp.mp3",
      "drillfile": "modules/aa65ac78-4577-44c6-b9fe-10a5f0cea75b.pdf>My Head Is Stuffed Up.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:24.922505'),
      "id": "d478be619e2b4108b41907113c8aa541",
      "description": "CONVERSATION: SLATHERED",
      "audiofile": "modules/13ca6294-3430-4524-a1e8-d4e4c60b8d2f.mp3>slathercomp.mp3",
      "drillfile": "modules/4e8ed8c6-74a8-4147-adc7-6b1218b7de63.pdf>I Slathered Her in Sunscreen.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:24.922505'),
      "id": "d478be619e2b4108b41907113c8aa541",
      "description": "CONVERSATION: SLATHERED",
      "audiofile": "modules/13ca6294-3430-4524-a1e8-d4e4c60b8d2f.mp3>slathercomp.mp3",
      "drillfile": "modules/4e8ed8c6-74a8-4147-adc7-6b1218b7de63.pdf>I Slathered Her in Sunscreen.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:24.922505'),
      "id": "d478be619e2b4108b41907113c8aa541",
      "description": "CONVERSATION: SLATHERED",
      "audiofile": "modules/13ca6294-3430-4524-a1e8-d4e4c60b8d2f.mp3>slathercomp.mp3",
      "drillfile": "modules/4e8ed8c6-74a8-4147-adc7-6b1218b7de63.pdf>I Slathered Her in Sunscreen.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:24.922505'),
      "id": "d478be619e2b4108b41907113c8aa541",
      "description": "CONVERSATION: SLATHERED",
      "audiofile": "modules/13ca6294-3430-4524-a1e8-d4e4c60b8d2f.mp3>slathercomp.mp3",
      "drillfile": "modules/4e8ed8c6-74a8-4147-adc7-6b1218b7de63.pdf>I Slathered Her in Sunscreen.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:24.922505'),
      "id": "d478be619e2b4108b41907113c8aa541",
      "description": "CONVERSATION: SLATHERED",
      "audiofile": "modules/13ca6294-3430-4524-a1e8-d4e4c60b8d2f.mp3>slathercomp.mp3",
      "drillfile": "modules/4e8ed8c6-74a8-4147-adc7-6b1218b7de63.pdf>I Slathered Her in Sunscreen.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:24.922505'),
      "id": "d478be619e2b4108b41907113c8aa541",
      "description": "CONVERSATION: SLATHERED",
      "audiofile": "modules/13ca6294-3430-4524-a1e8-d4e4c60b8d2f.mp3>slathercomp.mp3",
      "drillfile": "modules/4e8ed8c6-74a8-4147-adc7-6b1218b7de63.pdf>I Slathered Her in Sunscreen.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:10:59.914423'),
      "id": "9f2e258ba10e4becb6fe3291edde7e1a",
      "description": "Sandwich",
      "audiofile": "modules/7ab8a4ce-0fe8-436e-b06a-d4d1cae3ea4f.mp3>sandwichsanewitch (1).mp3",
      "drillfile": "modules/420a8303-71c2-4158-bb80-78d4642143c4.pdf>SANDWICH.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:10:59.914423'),
      "id": "9f2e258ba10e4becb6fe3291edde7e1a",
      "description": "Sandwich",
      "audiofile": "modules/7ab8a4ce-0fe8-436e-b06a-d4d1cae3ea4f.mp3>sandwichsanewitch (1).mp3",
      "drillfile": "modules/420a8303-71c2-4158-bb80-78d4642143c4.pdf>SANDWICH.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:10:59.914423'),
      "id": "9f2e258ba10e4becb6fe3291edde7e1a",
      "description": "Sandwich",
      "audiofile": "modules/7ab8a4ce-0fe8-436e-b06a-d4d1cae3ea4f.mp3>sandwichsanewitch (1).mp3",
      "drillfile": "modules/420a8303-71c2-4158-bb80-78d4642143c4.pdf>SANDWICH.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:10:59.914423'),
      "id": "9f2e258ba10e4becb6fe3291edde7e1a",
      "description": "Sandwich",
      "audiofile": "modules/7ab8a4ce-0fe8-436e-b06a-d4d1cae3ea4f.mp3>sandwichsanewitch (1).mp3",
      "drillfile": "modules/420a8303-71c2-4158-bb80-78d4642143c4.pdf>SANDWICH.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:10:59.914423'),
      "id": "9f2e258ba10e4becb6fe3291edde7e1a",
      "description": "Sandwich",
      "audiofile": "modules/7ab8a4ce-0fe8-436e-b06a-d4d1cae3ea4f.mp3>sandwichsanewitch (1).mp3",
      "drillfile": "modules/420a8303-71c2-4158-bb80-78d4642143c4.pdf>SANDWICH.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:10:59.914423'),
      "id": "9f2e258ba10e4becb6fe3291edde7e1a",
      "description": "Sandwich",
      "audiofile": "modules/7ab8a4ce-0fe8-436e-b06a-d4d1cae3ea4f.mp3>sandwichsanewitch (1).mp3",
      "drillfile": "modules/420a8303-71c2-4158-bb80-78d4642143c4.pdf>SANDWICH.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:43.183617'),
      "id": "63e96e21d1c04bc187275e5aaefbfdca",
      "description": "CONVERSATION: THE CAVITY",
      "audiofile": "modules/15b1c94f-27a3-4768-bd84-bab455ff48e7.mp3>cavitycomplete.mp3",
      "drillfile": "modules/85bb7f9a-bfb4-4be9-bba2-ca6b8c1f7dc4.pdf>The Cavity Is Killing Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:43.183617'),
      "id": "63e96e21d1c04bc187275e5aaefbfdca",
      "description": "CONVERSATION: THE CAVITY",
      "audiofile": "modules/15b1c94f-27a3-4768-bd84-bab455ff48e7.mp3>cavitycomplete.mp3",
      "drillfile": "modules/85bb7f9a-bfb4-4be9-bba2-ca6b8c1f7dc4.pdf>The Cavity Is Killing Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:43.183617'),
      "id": "63e96e21d1c04bc187275e5aaefbfdca",
      "description": "CONVERSATION: THE CAVITY",
      "audiofile": "modules/15b1c94f-27a3-4768-bd84-bab455ff48e7.mp3>cavitycomplete.mp3",
      "drillfile": "modules/85bb7f9a-bfb4-4be9-bba2-ca6b8c1f7dc4.pdf>The Cavity Is Killing Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:43.183617'),
      "id": "63e96e21d1c04bc187275e5aaefbfdca",
      "description": "CONVERSATION: THE CAVITY",
      "audiofile": "modules/15b1c94f-27a3-4768-bd84-bab455ff48e7.mp3>cavitycomplete.mp3",
      "drillfile": "modules/85bb7f9a-bfb4-4be9-bba2-ca6b8c1f7dc4.pdf>The Cavity Is Killing Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:43.183617'),
      "id": "63e96e21d1c04bc187275e5aaefbfdca",
      "description": "CONVERSATION: THE CAVITY",
      "audiofile": "modules/15b1c94f-27a3-4768-bd84-bab455ff48e7.mp3>cavitycomplete.mp3",
      "drillfile": "modules/85bb7f9a-bfb4-4be9-bba2-ca6b8c1f7dc4.pdf>The Cavity Is Killing Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:37:43.183617'),
      "id": "63e96e21d1c04bc187275e5aaefbfdca",
      "description": "CONVERSATION: THE CAVITY",
      "audiofile": "modules/15b1c94f-27a3-4768-bd84-bab455ff48e7.mp3>cavitycomplete.mp3",
      "drillfile": "modules/85bb7f9a-bfb4-4be9-bba2-ca6b8c1f7dc4.pdf>The Cavity Is Killing Me - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:38:01.747865'),
      "id": "13d5a42ef018425d958143552ef6e72c",
      "description": "CONVERSATION: THE RAZOR BURN",
      "audiofile": "modules/59e5cbd4-ab27-4d12-bb00-df58603090f0.mp3>razorburncomplete.mp3",
      "drillfile": "modules/a8e7dc9c-bb76-4489-9a67-241ffb995d7a.pdf>The razor burn is really irritating - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:38:01.747865'),
      "id": "13d5a42ef018425d958143552ef6e72c",
      "description": "CONVERSATION: THE RAZOR BURN",
      "audiofile": "modules/59e5cbd4-ab27-4d12-bb00-df58603090f0.mp3>razorburncomplete.mp3",
      "drillfile": "modules/a8e7dc9c-bb76-4489-9a67-241ffb995d7a.pdf>The razor burn is really irritating - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:38:01.747865'),
      "id": "13d5a42ef018425d958143552ef6e72c",
      "description": "CONVERSATION: THE RAZOR BURN",
      "audiofile": "modules/59e5cbd4-ab27-4d12-bb00-df58603090f0.mp3>razorburncomplete.mp3",
      "drillfile": "modules/a8e7dc9c-bb76-4489-9a67-241ffb995d7a.pdf>The razor burn is really irritating - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:38:01.747865'),
      "id": "13d5a42ef018425d958143552ef6e72c",
      "description": "CONVERSATION: THE RAZOR BURN",
      "audiofile": "modules/59e5cbd4-ab27-4d12-bb00-df58603090f0.mp3>razorburncomplete.mp3",
      "drillfile": "modules/a8e7dc9c-bb76-4489-9a67-241ffb995d7a.pdf>The razor burn is really irritating - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:38:01.747865'),
      "id": "13d5a42ef018425d958143552ef6e72c",
      "description": "CONVERSATION: THE RAZOR BURN",
      "audiofile": "modules/59e5cbd4-ab27-4d12-bb00-df58603090f0.mp3>razorburncomplete.mp3",
      "drillfile": "modules/a8e7dc9c-bb76-4489-9a67-241ffb995d7a.pdf>The razor burn is really irritating - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:38:01.747865'),
      "id": "13d5a42ef018425d958143552ef6e72c",
      "description": "CONVERSATION: THE RAZOR BURN",
      "audiofile": "modules/59e5cbd4-ab27-4d12-bb00-df58603090f0.mp3>razorburncomplete.mp3",
      "drillfile": "modules/a8e7dc9c-bb76-4489-9a67-241ffb995d7a.pdf>The razor burn is really irritating - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:38:20.989636'),
      "id": "f8a8d264e66245f9a3caf5584cc27462",
      "description": "CONVERSATION: THERE IS PLENTY OF FISH",
      "audiofile": "modules/2b89b137-bae6-42b8-9894-97c79a214f36.mp3>plentyoffishcomplete.mp3",
      "drillfile": "modules/cf895107-ffc6-4cf1-891b-495aa79b9585.pdf>There is plenty of fish in the sea.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:38:20.989636'),
      "id": "f8a8d264e66245f9a3caf5584cc27462",
      "description": "CONVERSATION: THERE IS PLENTY OF FISH",
      "audiofile": "modules/2b89b137-bae6-42b8-9894-97c79a214f36.mp3>plentyoffishcomplete.mp3",
      "drillfile": "modules/cf895107-ffc6-4cf1-891b-495aa79b9585.pdf>There is plenty of fish in the sea.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:38:20.989636'),
      "id": "f8a8d264e66245f9a3caf5584cc27462",
      "description": "CONVERSATION: THERE IS PLENTY OF FISH",
      "audiofile": "modules/2b89b137-bae6-42b8-9894-97c79a214f36.mp3>plentyoffishcomplete.mp3",
      "drillfile": "modules/cf895107-ffc6-4cf1-891b-495aa79b9585.pdf>There is plenty of fish in the sea.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:38:20.989636'),
      "id": "f8a8d264e66245f9a3caf5584cc27462",
      "description": "CONVERSATION: THERE IS PLENTY OF FISH",
      "audiofile": "modules/2b89b137-bae6-42b8-9894-97c79a214f36.mp3>plentyoffishcomplete.mp3",
      "drillfile": "modules/cf895107-ffc6-4cf1-891b-495aa79b9585.pdf>There is plenty of fish in the sea.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:38:20.989636'),
      "id": "f8a8d264e66245f9a3caf5584cc27462",
      "description": "CONVERSATION: THERE IS PLENTY OF FISH",
      "audiofile": "modules/2b89b137-bae6-42b8-9894-97c79a214f36.mp3>plentyoffishcomplete.mp3",
      "drillfile": "modules/cf895107-ffc6-4cf1-891b-495aa79b9585.pdf>There is plenty of fish in the sea.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:38:20.989636'),
      "id": "f8a8d264e66245f9a3caf5584cc27462",
      "description": "CONVERSATION: THERE IS PLENTY OF FISH",
      "audiofile": "modules/2b89b137-bae6-42b8-9894-97c79a214f36.mp3>plentyoffishcomplete.mp3",
      "drillfile": "modules/cf895107-ffc6-4cf1-891b-495aa79b9585.pdf>There is plenty of fish in the sea.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:39:31.824562'),
      "id": "363cd696dcfb4ab9a511d10a32a02b20",
      "description": "CONVERSATION: THINGS DO HAPPEN",
      "audiofile": "modules/bce83101-bdc7-4e59-8651-3264bfdbe12b.mp3>thingshappencomplete.mp3",
      "drillfile": "modules/673a72b5-ba4d-4d36-a6bc-445d665cd058.pdf>Things do happen.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:39:31.824562'),
      "id": "363cd696dcfb4ab9a511d10a32a02b20",
      "description": "CONVERSATION: THINGS DO HAPPEN",
      "audiofile": "modules/bce83101-bdc7-4e59-8651-3264bfdbe12b.mp3>thingshappencomplete.mp3",
      "drillfile": "modules/673a72b5-ba4d-4d36-a6bc-445d665cd058.pdf>Things do happen.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:39:31.824562'),
      "id": "363cd696dcfb4ab9a511d10a32a02b20",
      "description": "CONVERSATION: THINGS DO HAPPEN",
      "audiofile": "modules/bce83101-bdc7-4e59-8651-3264bfdbe12b.mp3>thingshappencomplete.mp3",
      "drillfile": "modules/673a72b5-ba4d-4d36-a6bc-445d665cd058.pdf>Things do happen.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:39:31.824562'),
      "id": "363cd696dcfb4ab9a511d10a32a02b20",
      "description": "CONVERSATION: THINGS DO HAPPEN",
      "audiofile": "modules/bce83101-bdc7-4e59-8651-3264bfdbe12b.mp3>thingshappencomplete.mp3",
      "drillfile": "modules/673a72b5-ba4d-4d36-a6bc-445d665cd058.pdf>Things do happen.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:39:31.824562'),
      "id": "363cd696dcfb4ab9a511d10a32a02b20",
      "description": "CONVERSATION: THINGS DO HAPPEN",
      "audiofile": "modules/bce83101-bdc7-4e59-8651-3264bfdbe12b.mp3>thingshappencomplete.mp3",
      "drillfile": "modules/673a72b5-ba4d-4d36-a6bc-445d665cd058.pdf>Things do happen.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:39:31.824562'),
      "id": "363cd696dcfb4ab9a511d10a32a02b20",
      "description": "CONVERSATION: THINGS DO HAPPEN",
      "audiofile": "modules/bce83101-bdc7-4e59-8651-3264bfdbe12b.mp3>thingshappencomplete.mp3",
      "drillfile": "modules/673a72b5-ba4d-4d36-a6bc-445d665cd058.pdf>Things do happen.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:39:52.206543'),
      "id": "ee38f5c8840d4662b98675eab4a39fd6",
      "description": "CONVERSATION: WE SEEM TO HAVE A BAD CONNECTION",
      "audiofile": "modules/141698ca-9793-477e-abe3-4acb579a5a80.mp3>badconnectioncom.mp3",
      "drillfile": "modules/e8365330-4f0a-4e8f-8155-b185a67c8fda.pdf>We Seem to Have a Bad Connection - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:39:52.206543'),
      "id": "ee38f5c8840d4662b98675eab4a39fd6",
      "description": "CONVERSATION: WE SEEM TO HAVE A BAD CONNECTION",
      "audiofile": "modules/141698ca-9793-477e-abe3-4acb579a5a80.mp3>badconnectioncom.mp3",
      "drillfile": "modules/e8365330-4f0a-4e8f-8155-b185a67c8fda.pdf>We Seem to Have a Bad Connection - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:39:52.206543'),
      "id": "ee38f5c8840d4662b98675eab4a39fd6",
      "description": "CONVERSATION: WE SEEM TO HAVE A BAD CONNECTION",
      "audiofile": "modules/141698ca-9793-477e-abe3-4acb579a5a80.mp3>badconnectioncom.mp3",
      "drillfile": "modules/e8365330-4f0a-4e8f-8155-b185a67c8fda.pdf>We Seem to Have a Bad Connection - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:39:52.206543'),
      "id": "ee38f5c8840d4662b98675eab4a39fd6",
      "description": "CONVERSATION: WE SEEM TO HAVE A BAD CONNECTION",
      "audiofile": "modules/141698ca-9793-477e-abe3-4acb579a5a80.mp3>badconnectioncom.mp3",
      "drillfile": "modules/e8365330-4f0a-4e8f-8155-b185a67c8fda.pdf>We Seem to Have a Bad Connection - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:39:52.206543'),
      "id": "ee38f5c8840d4662b98675eab4a39fd6",
      "description": "CONVERSATION: WE SEEM TO HAVE A BAD CONNECTION",
      "audiofile": "modules/141698ca-9793-477e-abe3-4acb579a5a80.mp3>badconnectioncom.mp3",
      "drillfile": "modules/e8365330-4f0a-4e8f-8155-b185a67c8fda.pdf>We Seem to Have a Bad Connection - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:39:52.206543'),
      "id": "ee38f5c8840d4662b98675eab4a39fd6",
      "description": "CONVERSATION: WE SEEM TO HAVE A BAD CONNECTION",
      "audiofile": "modules/141698ca-9793-477e-abe3-4acb579a5a80.mp3>badconnectioncom.mp3",
      "drillfile": "modules/e8365330-4f0a-4e8f-8155-b185a67c8fda.pdf>We Seem to Have a Bad Connection - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:08.758832'),
      "id": "bd3757f3a01f4c30b87ba98abddf4e04",
      "description": "CONVERSATION: WORK",
      "audiofile": "modules/0e0e1f2a-1541-452c-afe2-380b20b03216.mp3>uptomyneck_complete.mp3",
      "drillfile": "modules/3fddfe35-19e7-4ed0-a69b-5fa42f756857.pdf>I_m up to my neck in work.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:08.758832'),
      "id": "bd3757f3a01f4c30b87ba98abddf4e04",
      "description": "CONVERSATION: WORK",
      "audiofile": "modules/0e0e1f2a-1541-452c-afe2-380b20b03216.mp3>uptomyneck_complete.mp3",
      "drillfile": "modules/3fddfe35-19e7-4ed0-a69b-5fa42f756857.pdf>I_m up to my neck in work.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:08.758832'),
      "id": "bd3757f3a01f4c30b87ba98abddf4e04",
      "description": "CONVERSATION: WORK",
      "audiofile": "modules/0e0e1f2a-1541-452c-afe2-380b20b03216.mp3>uptomyneck_complete.mp3",
      "drillfile": "modules/3fddfe35-19e7-4ed0-a69b-5fa42f756857.pdf>I_m up to my neck in work.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:08.758832'),
      "id": "bd3757f3a01f4c30b87ba98abddf4e04",
      "description": "CONVERSATION: WORK",
      "audiofile": "modules/0e0e1f2a-1541-452c-afe2-380b20b03216.mp3>uptomyneck_complete.mp3",
      "drillfile": "modules/3fddfe35-19e7-4ed0-a69b-5fa42f756857.pdf>I_m up to my neck in work.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:08.758832'),
      "id": "bd3757f3a01f4c30b87ba98abddf4e04",
      "description": "CONVERSATION: WORK",
      "audiofile": "modules/0e0e1f2a-1541-452c-afe2-380b20b03216.mp3>uptomyneck_complete.mp3",
      "drillfile": "modules/3fddfe35-19e7-4ed0-a69b-5fa42f756857.pdf>I_m up to my neck in work.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:08.758832'),
      "id": "bd3757f3a01f4c30b87ba98abddf4e04",
      "description": "CONVERSATION: WORK",
      "audiofile": "modules/0e0e1f2a-1541-452c-afe2-380b20b03216.mp3>uptomyneck_complete.mp3",
      "drillfile": "modules/3fddfe35-19e7-4ed0-a69b-5fa42f756857.pdf>I_m up to my neck in work.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:25.8217'),
      "id": "07241c3b89db4e69b9617cc294f8f26e",
      "description": "CONVERSATION: WORK SNORE",
      "audiofile": "modules/0b1782c3-277d-4f0f-ab46-c651186f7434.mp3>snore2comp.mp3",
      "drillfile": "modules/86bb1acd-0ad0-482d-8b81-eba1b995b4a4.pdf>His Snoring Is Getting Worse and Worse.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:25.8217'),
      "id": "07241c3b89db4e69b9617cc294f8f26e",
      "description": "CONVERSATION: WORK SNORE",
      "audiofile": "modules/0b1782c3-277d-4f0f-ab46-c651186f7434.mp3>snore2comp.mp3",
      "drillfile": "modules/86bb1acd-0ad0-482d-8b81-eba1b995b4a4.pdf>His Snoring Is Getting Worse and Worse.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:25.8217'),
      "id": "07241c3b89db4e69b9617cc294f8f26e",
      "description": "CONVERSATION: WORK SNORE",
      "audiofile": "modules/0b1782c3-277d-4f0f-ab46-c651186f7434.mp3>snore2comp.mp3",
      "drillfile": "modules/86bb1acd-0ad0-482d-8b81-eba1b995b4a4.pdf>His Snoring Is Getting Worse and Worse.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:25.8217'),
      "id": "07241c3b89db4e69b9617cc294f8f26e",
      "description": "CONVERSATION: WORK SNORE",
      "audiofile": "modules/0b1782c3-277d-4f0f-ab46-c651186f7434.mp3>snore2comp.mp3",
      "drillfile": "modules/86bb1acd-0ad0-482d-8b81-eba1b995b4a4.pdf>His Snoring Is Getting Worse and Worse.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:25.8217'),
      "id": "07241c3b89db4e69b9617cc294f8f26e",
      "description": "CONVERSATION: WORK SNORE",
      "audiofile": "modules/0b1782c3-277d-4f0f-ab46-c651186f7434.mp3>snore2comp.mp3",
      "drillfile": "modules/86bb1acd-0ad0-482d-8b81-eba1b995b4a4.pdf>His Snoring Is Getting Worse and Worse.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:25.8217'),
      "id": "07241c3b89db4e69b9617cc294f8f26e",
      "description": "CONVERSATION: WORK SNORE",
      "audiofile": "modules/0b1782c3-277d-4f0f-ab46-c651186f7434.mp3>snore2comp.mp3",
      "drillfile": "modules/86bb1acd-0ad0-482d-8b81-eba1b995b4a4.pdf>His Snoring Is Getting Worse and Worse.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:47.503455'),
      "id": "965f89d5a990403c8b7a04888f4814da",
      "description": "CONVERSATION: WOULD YOU CARE?",
      "audiofile": "modules/0071b4da-217d-4f84-9c1f-0aac4da9f51d.mp3>lvmessage1com.mp3",
      "drillfile": "modules/4c0f5343-09a6-46f9-8019-a3a34d1cc6c8.pdf>Would You Care to Leave a Message - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:47.503455'),
      "id": "965f89d5a990403c8b7a04888f4814da",
      "description": "CONVERSATION: WOULD YOU CARE?",
      "audiofile": "modules/0071b4da-217d-4f84-9c1f-0aac4da9f51d.mp3>lvmessage1com.mp3",
      "drillfile": "modules/4c0f5343-09a6-46f9-8019-a3a34d1cc6c8.pdf>Would You Care to Leave a Message - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:47.503455'),
      "id": "965f89d5a990403c8b7a04888f4814da",
      "description": "CONVERSATION: WOULD YOU CARE?",
      "audiofile": "modules/0071b4da-217d-4f84-9c1f-0aac4da9f51d.mp3>lvmessage1com.mp3",
      "drillfile": "modules/4c0f5343-09a6-46f9-8019-a3a34d1cc6c8.pdf>Would You Care to Leave a Message - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:47.503455'),
      "id": "965f89d5a990403c8b7a04888f4814da",
      "description": "CONVERSATION: WOULD YOU CARE?",
      "audiofile": "modules/0071b4da-217d-4f84-9c1f-0aac4da9f51d.mp3>lvmessage1com.mp3",
      "drillfile": "modules/4c0f5343-09a6-46f9-8019-a3a34d1cc6c8.pdf>Would You Care to Leave a Message - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:47.503455'),
      "id": "965f89d5a990403c8b7a04888f4814da",
      "description": "CONVERSATION: WOULD YOU CARE?",
      "audiofile": "modules/0071b4da-217d-4f84-9c1f-0aac4da9f51d.mp3>lvmessage1com.mp3",
      "drillfile": "modules/4c0f5343-09a6-46f9-8019-a3a34d1cc6c8.pdf>Would You Care to Leave a Message - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:40:47.503455'),
      "id": "965f89d5a990403c8b7a04888f4814da",
      "description": "CONVERSATION: WOULD YOU CARE?",
      "audiofile": "modules/0071b4da-217d-4f84-9c1f-0aac4da9f51d.mp3>lvmessage1com.mp3",
      "drillfile": "modules/4c0f5343-09a6-46f9-8019-a3a34d1cc6c8.pdf>Would You Care to Leave a Message - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:41:10.418618'),
      "id": "0769f459ec044dd5980b1252d7d7d43d",
      "description": "CONVERSATION: RUN DOWN",
      "audiofile": "modules/56738199-edf9-4a24-88ad-831d6fc6f81e.mp3>rundowncomplete.mp3",
      "drillfile": "modules/dc6decb7-4502-4202-9fe1-2e1afc4729b9.pdf>You Look Run Down - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:41:10.418618'),
      "id": "0769f459ec044dd5980b1252d7d7d43d",
      "description": "CONVERSATION: RUN DOWN",
      "audiofile": "modules/56738199-edf9-4a24-88ad-831d6fc6f81e.mp3>rundowncomplete.mp3",
      "drillfile": "modules/dc6decb7-4502-4202-9fe1-2e1afc4729b9.pdf>You Look Run Down - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:41:10.418618'),
      "id": "0769f459ec044dd5980b1252d7d7d43d",
      "description": "CONVERSATION: RUN DOWN",
      "audiofile": "modules/56738199-edf9-4a24-88ad-831d6fc6f81e.mp3>rundowncomplete.mp3",
      "drillfile": "modules/dc6decb7-4502-4202-9fe1-2e1afc4729b9.pdf>You Look Run Down - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:41:10.418618'),
      "id": "0769f459ec044dd5980b1252d7d7d43d",
      "description": "CONVERSATION: RUN DOWN",
      "audiofile": "modules/56738199-edf9-4a24-88ad-831d6fc6f81e.mp3>rundowncomplete.mp3",
      "drillfile": "modules/dc6decb7-4502-4202-9fe1-2e1afc4729b9.pdf>You Look Run Down - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:41:10.418618'),
      "id": "0769f459ec044dd5980b1252d7d7d43d",
      "description": "CONVERSATION: RUN DOWN",
      "audiofile": "modules/56738199-edf9-4a24-88ad-831d6fc6f81e.mp3>rundowncomplete.mp3",
      "drillfile": "modules/dc6decb7-4502-4202-9fe1-2e1afc4729b9.pdf>You Look Run Down - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:41:10.418618'),
      "id": "0769f459ec044dd5980b1252d7d7d43d",
      "description": "CONVERSATION: RUN DOWN",
      "audiofile": "modules/56738199-edf9-4a24-88ad-831d6fc6f81e.mp3>rundowncomplete.mp3",
      "drillfile": "modules/dc6decb7-4502-4202-9fe1-2e1afc4729b9.pdf>You Look Run Down - Google Docs.pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:41:43.995468'),
      "id": "53cf6211306f49949ed2ffd83dd5e28b",
      "description": "CONVERSATION: CONJUCTIONS",
      "audiofile": "modules/5e20a291-e1c6-4c91-82b0-919cc60003d7.mp3>B1-11-Fanboys (1).mp3",
      "drillfile": "modules/41f78a75-bc45-4772-bbe8-ae7761499311.pdf>COORDINATING CONJUNCTIONS (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:41:43.995468'),
      "id": "53cf6211306f49949ed2ffd83dd5e28b",
      "description": "CONVERSATION: CONJUCTIONS",
      "audiofile": "modules/5e20a291-e1c6-4c91-82b0-919cc60003d7.mp3>B1-11-Fanboys (1).mp3",
      "drillfile": "modules/41f78a75-bc45-4772-bbe8-ae7761499311.pdf>COORDINATING CONJUNCTIONS (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:41:43.995468'),
      "id": "53cf6211306f49949ed2ffd83dd5e28b",
      "description": "CONVERSATION: CONJUCTIONS",
      "audiofile": "modules/5e20a291-e1c6-4c91-82b0-919cc60003d7.mp3>B1-11-Fanboys (1).mp3",
      "drillfile": "modules/41f78a75-bc45-4772-bbe8-ae7761499311.pdf>COORDINATING CONJUNCTIONS (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:41:43.995468'),
      "id": "53cf6211306f49949ed2ffd83dd5e28b",
      "description": "CONVERSATION: CONJUCTIONS",
      "audiofile": "modules/5e20a291-e1c6-4c91-82b0-919cc60003d7.mp3>B1-11-Fanboys (1).mp3",
      "drillfile": "modules/41f78a75-bc45-4772-bbe8-ae7761499311.pdf>COORDINATING CONJUNCTIONS (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:41:43.995468'),
      "id": "53cf6211306f49949ed2ffd83dd5e28b",
      "description": "CONVERSATION: CONJUCTIONS",
      "audiofile": "modules/5e20a291-e1c6-4c91-82b0-919cc60003d7.mp3>B1-11-Fanboys (1).mp3",
      "drillfile": "modules/41f78a75-bc45-4772-bbe8-ae7761499311.pdf>COORDINATING CONJUNCTIONS (1).pdf"
    },
    {
      "practiceid": "543ee61d0740489e9eb762058b90b78d",
      "timestamp": new Date('2024-03-14 10:41:43.995468'),
      "id": "53cf6211306f49949ed2ffd83dd5e28b",
      "description": "CONVERSATION: CONJUCTIONS",
      "audiofile": "modules/5e20a291-e1c6-4c91-82b0-919cc60003d7.mp3>B1-11-Fanboys (1).mp3",
      "drillfile": "modules/41f78a75-bc45-4772-bbe8-ae7761499311.pdf>COORDINATING CONJUNCTIONS (1).pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:55:18.902252'),
      "id": "4da73cda690542e79a29867e725b9d89",
      "description": "Thirty Three Thieves",
      "audiofile": "modules/7e040bd5-11be-4641-8a2c-33140e730c2e.mp3>thirtythreethieves.mp3",
      "drillfile": "modules/6b5da324-d3f4-4005-abb4-73b52b933c24.pdf>33.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:55:18.902252'),
      "id": "4da73cda690542e79a29867e725b9d89",
      "description": "Thirty Three Thieves",
      "audiofile": "modules/7e040bd5-11be-4641-8a2c-33140e730c2e.mp3>thirtythreethieves.mp3",
      "drillfile": "modules/6b5da324-d3f4-4005-abb4-73b52b933c24.pdf>33.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:55:18.902252'),
      "id": "4da73cda690542e79a29867e725b9d89",
      "description": "Thirty Three Thieves",
      "audiofile": "modules/7e040bd5-11be-4641-8a2c-33140e730c2e.mp3>thirtythreethieves.mp3",
      "drillfile": "modules/6b5da324-d3f4-4005-abb4-73b52b933c24.pdf>33.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:55:18.902252'),
      "id": "4da73cda690542e79a29867e725b9d89",
      "description": "Thirty Three Thieves",
      "audiofile": "modules/7e040bd5-11be-4641-8a2c-33140e730c2e.mp3>thirtythreethieves.mp3",
      "drillfile": "modules/6b5da324-d3f4-4005-abb4-73b52b933c24.pdf>33.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:55:18.902252'),
      "id": "4da73cda690542e79a29867e725b9d89",
      "description": "Thirty Three Thieves",
      "audiofile": "modules/7e040bd5-11be-4641-8a2c-33140e730c2e.mp3>thirtythreethieves.mp3",
      "drillfile": "modules/6b5da324-d3f4-4005-abb4-73b52b933c24.pdf>33.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:55:18.902252'),
      "id": "4da73cda690542e79a29867e725b9d89",
      "description": "Thirty Three Thieves",
      "audiofile": "modules/7e040bd5-11be-4641-8a2c-33140e730c2e.mp3>thirtythreethieves.mp3",
      "drillfile": "modules/6b5da324-d3f4-4005-abb4-73b52b933c24.pdf>33.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:55:46.95571'),
      "id": "8f2f6eb3299048e9ae0725ec07650652",
      "description": "Betty Butter",
      "audiofile": "modules/f127f1d1-6bbe-4986-8af7-aae6e05bbd77.mp3>bettybutter.mp3",
      "drillfile": "modules/cc929386-a9da-4552-b5b4-860d8a933bbe.pdf>BETTY BOTTER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:55:46.95571'),
      "id": "8f2f6eb3299048e9ae0725ec07650652",
      "description": "Betty Butter",
      "audiofile": "modules/f127f1d1-6bbe-4986-8af7-aae6e05bbd77.mp3>bettybutter.mp3",
      "drillfile": "modules/cc929386-a9da-4552-b5b4-860d8a933bbe.pdf>BETTY BOTTER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:55:46.95571'),
      "id": "8f2f6eb3299048e9ae0725ec07650652",
      "description": "Betty Butter",
      "audiofile": "modules/f127f1d1-6bbe-4986-8af7-aae6e05bbd77.mp3>bettybutter.mp3",
      "drillfile": "modules/cc929386-a9da-4552-b5b4-860d8a933bbe.pdf>BETTY BOTTER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:55:46.95571'),
      "id": "8f2f6eb3299048e9ae0725ec07650652",
      "description": "Betty Butter",
      "audiofile": "modules/f127f1d1-6bbe-4986-8af7-aae6e05bbd77.mp3>bettybutter.mp3",
      "drillfile": "modules/cc929386-a9da-4552-b5b4-860d8a933bbe.pdf>BETTY BOTTER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:55:46.95571'),
      "id": "8f2f6eb3299048e9ae0725ec07650652",
      "description": "Betty Butter",
      "audiofile": "modules/f127f1d1-6bbe-4986-8af7-aae6e05bbd77.mp3>bettybutter.mp3",
      "drillfile": "modules/cc929386-a9da-4552-b5b4-860d8a933bbe.pdf>BETTY BOTTER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:55:46.95571'),
      "id": "8f2f6eb3299048e9ae0725ec07650652",
      "description": "Betty Butter",
      "audiofile": "modules/f127f1d1-6bbe-4986-8af7-aae6e05bbd77.mp3>bettybutter.mp3",
      "drillfile": "modules/cc929386-a9da-4552-b5b4-860d8a933bbe.pdf>BETTY BOTTER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:56:07.299196'),
      "id": "2c98345701ad4a5c8139ae4c18a24217",
      "description": "Big Black Bear",
      "audiofile": "modules/0e4300f3-1b84-4767-a4b8-7659e11806b4.mp3>bigblackbearback.mp3",
      "drillfile": "modules/1b46e3a0-1166-45eb-81de-8313764a62d0.pdf>BIG BLACK BEAR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:56:07.299196'),
      "id": "2c98345701ad4a5c8139ae4c18a24217",
      "description": "Big Black Bear",
      "audiofile": "modules/0e4300f3-1b84-4767-a4b8-7659e11806b4.mp3>bigblackbearback.mp3",
      "drillfile": "modules/1b46e3a0-1166-45eb-81de-8313764a62d0.pdf>BIG BLACK BEAR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:56:07.299196'),
      "id": "2c98345701ad4a5c8139ae4c18a24217",
      "description": "Big Black Bear",
      "audiofile": "modules/0e4300f3-1b84-4767-a4b8-7659e11806b4.mp3>bigblackbearback.mp3",
      "drillfile": "modules/1b46e3a0-1166-45eb-81de-8313764a62d0.pdf>BIG BLACK BEAR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:56:07.299196'),
      "id": "2c98345701ad4a5c8139ae4c18a24217",
      "description": "Big Black Bear",
      "audiofile": "modules/0e4300f3-1b84-4767-a4b8-7659e11806b4.mp3>bigblackbearback.mp3",
      "drillfile": "modules/1b46e3a0-1166-45eb-81de-8313764a62d0.pdf>BIG BLACK BEAR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:56:07.299196'),
      "id": "2c98345701ad4a5c8139ae4c18a24217",
      "description": "Big Black Bear",
      "audiofile": "modules/0e4300f3-1b84-4767-a4b8-7659e11806b4.mp3>bigblackbearback.mp3",
      "drillfile": "modules/1b46e3a0-1166-45eb-81de-8313764a62d0.pdf>BIG BLACK BEAR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:56:07.299196'),
      "id": "2c98345701ad4a5c8139ae4c18a24217",
      "description": "Big Black Bear",
      "audiofile": "modules/0e4300f3-1b84-4767-a4b8-7659e11806b4.mp3>bigblackbearback.mp3",
      "drillfile": "modules/1b46e3a0-1166-45eb-81de-8313764a62d0.pdf>BIG BLACK BEAR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:20.787152'),
      "id": "0990c3b2df2a43658a0f64d499e9419a",
      "description": "Biscuit Mixer",
      "audiofile": "modules/fb4c3576-2503-440b-a5e0-4399ed0ffc30.mp3>biscuitmixer.mp3",
      "drillfile": "modules/c1021728-c29b-4295-b42e-7ca168079984.pdf>BISCUIT.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:20.787152'),
      "id": "0990c3b2df2a43658a0f64d499e9419a",
      "description": "Biscuit Mixer",
      "audiofile": "modules/fb4c3576-2503-440b-a5e0-4399ed0ffc30.mp3>biscuitmixer.mp3",
      "drillfile": "modules/c1021728-c29b-4295-b42e-7ca168079984.pdf>BISCUIT.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:20.787152'),
      "id": "0990c3b2df2a43658a0f64d499e9419a",
      "description": "Biscuit Mixer",
      "audiofile": "modules/fb4c3576-2503-440b-a5e0-4399ed0ffc30.mp3>biscuitmixer.mp3",
      "drillfile": "modules/c1021728-c29b-4295-b42e-7ca168079984.pdf>BISCUIT.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:20.787152'),
      "id": "0990c3b2df2a43658a0f64d499e9419a",
      "description": "Biscuit Mixer",
      "audiofile": "modules/fb4c3576-2503-440b-a5e0-4399ed0ffc30.mp3>biscuitmixer.mp3",
      "drillfile": "modules/c1021728-c29b-4295-b42e-7ca168079984.pdf>BISCUIT.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:20.787152'),
      "id": "0990c3b2df2a43658a0f64d499e9419a",
      "description": "Biscuit Mixer",
      "audiofile": "modules/fb4c3576-2503-440b-a5e0-4399ed0ffc30.mp3>biscuitmixer.mp3",
      "drillfile": "modules/c1021728-c29b-4295-b42e-7ca168079984.pdf>BISCUIT.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:20.787152'),
      "id": "0990c3b2df2a43658a0f64d499e9419a",
      "description": "Biscuit Mixer",
      "audiofile": "modules/fb4c3576-2503-440b-a5e0-4399ed0ffc30.mp3>biscuitmixer.mp3",
      "drillfile": "modules/c1021728-c29b-4295-b42e-7ca168079984.pdf>BISCUIT.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:38.372153'),
      "id": "914059f01fe74393bdf264ea1c89b637",
      "description": "Can you can",
      "audiofile": "modules/f1e642fa-9528-4db8-91a8-c3a6d4aeff35.mp3>can you can.mp3",
      "drillfile": "modules/009f2d36-9f14-461c-be54-56686bbd034b.pdf>CAN U CAN.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:38.372153'),
      "id": "914059f01fe74393bdf264ea1c89b637",
      "description": "Can you can",
      "audiofile": "modules/f1e642fa-9528-4db8-91a8-c3a6d4aeff35.mp3>can you can.mp3",
      "drillfile": "modules/009f2d36-9f14-461c-be54-56686bbd034b.pdf>CAN U CAN.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:38.372153'),
      "id": "914059f01fe74393bdf264ea1c89b637",
      "description": "Can you can",
      "audiofile": "modules/f1e642fa-9528-4db8-91a8-c3a6d4aeff35.mp3>can you can.mp3",
      "drillfile": "modules/009f2d36-9f14-461c-be54-56686bbd034b.pdf>CAN U CAN.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:38.372153'),
      "id": "914059f01fe74393bdf264ea1c89b637",
      "description": "Can you can",
      "audiofile": "modules/f1e642fa-9528-4db8-91a8-c3a6d4aeff35.mp3>can you can.mp3",
      "drillfile": "modules/009f2d36-9f14-461c-be54-56686bbd034b.pdf>CAN U CAN.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:38.372153'),
      "id": "914059f01fe74393bdf264ea1c89b637",
      "description": "Can you can",
      "audiofile": "modules/f1e642fa-9528-4db8-91a8-c3a6d4aeff35.mp3>can you can.mp3",
      "drillfile": "modules/009f2d36-9f14-461c-be54-56686bbd034b.pdf>CAN U CAN.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:38.372153'),
      "id": "914059f01fe74393bdf264ea1c89b637",
      "description": "Can you can",
      "audiofile": "modules/f1e642fa-9528-4db8-91a8-c3a6d4aeff35.mp3>can you can.mp3",
      "drillfile": "modules/009f2d36-9f14-461c-be54-56686bbd034b.pdf>CAN U CAN.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:53.125379'),
      "id": "c88e29750ce54ba0ba55d68d74bd41ec",
      "description": "Clam Cream",
      "audiofile": "modules/68e6e9db-f0d7-47a1-b1e7-c1c18ccf4c2c.mp3>clamcreamcan.mp3",
      "drillfile": "modules/3c006881-0bef-4d21-aa0a-6f79387097ab.pdf>CLAM CREAM.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:53.125379'),
      "id": "c88e29750ce54ba0ba55d68d74bd41ec",
      "description": "Clam Cream",
      "audiofile": "modules/68e6e9db-f0d7-47a1-b1e7-c1c18ccf4c2c.mp3>clamcreamcan.mp3",
      "drillfile": "modules/3c006881-0bef-4d21-aa0a-6f79387097ab.pdf>CLAM CREAM.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:53.125379'),
      "id": "c88e29750ce54ba0ba55d68d74bd41ec",
      "description": "Clam Cream",
      "audiofile": "modules/68e6e9db-f0d7-47a1-b1e7-c1c18ccf4c2c.mp3>clamcreamcan.mp3",
      "drillfile": "modules/3c006881-0bef-4d21-aa0a-6f79387097ab.pdf>CLAM CREAM.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:53.125379'),
      "id": "c88e29750ce54ba0ba55d68d74bd41ec",
      "description": "Clam Cream",
      "audiofile": "modules/68e6e9db-f0d7-47a1-b1e7-c1c18ccf4c2c.mp3>clamcreamcan.mp3",
      "drillfile": "modules/3c006881-0bef-4d21-aa0a-6f79387097ab.pdf>CLAM CREAM.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:53.125379'),
      "id": "c88e29750ce54ba0ba55d68d74bd41ec",
      "description": "Clam Cream",
      "audiofile": "modules/68e6e9db-f0d7-47a1-b1e7-c1c18ccf4c2c.mp3>clamcreamcan.mp3",
      "drillfile": "modules/3c006881-0bef-4d21-aa0a-6f79387097ab.pdf>CLAM CREAM.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 08:57:53.125379'),
      "id": "c88e29750ce54ba0ba55d68d74bd41ec",
      "description": "Clam Cream",
      "audiofile": "modules/68e6e9db-f0d7-47a1-b1e7-c1c18ccf4c2c.mp3>clamcreamcan.mp3",
      "drillfile": "modules/3c006881-0bef-4d21-aa0a-6f79387097ab.pdf>CLAM CREAM.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:04:18.607984'),
      "id": "d224eede54144f59903f04b776add302",
      "description": "Copyright",
      "audiofile": "modules/3727fb99-0720-4464-99f9-12f2df6ce492.mp3>copyright.mp3",
      "drillfile": "modules/4dbe898e-6c1c-40a5-a3aa-80819c37b729.pdf>COPYRIGHT.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:04:18.607984'),
      "id": "d224eede54144f59903f04b776add302",
      "description": "Copyright",
      "audiofile": "modules/3727fb99-0720-4464-99f9-12f2df6ce492.mp3>copyright.mp3",
      "drillfile": "modules/4dbe898e-6c1c-40a5-a3aa-80819c37b729.pdf>COPYRIGHT.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:04:18.607984'),
      "id": "d224eede54144f59903f04b776add302",
      "description": "Copyright",
      "audiofile": "modules/3727fb99-0720-4464-99f9-12f2df6ce492.mp3>copyright.mp3",
      "drillfile": "modules/4dbe898e-6c1c-40a5-a3aa-80819c37b729.pdf>COPYRIGHT.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:04:18.607984'),
      "id": "d224eede54144f59903f04b776add302",
      "description": "Copyright",
      "audiofile": "modules/3727fb99-0720-4464-99f9-12f2df6ce492.mp3>copyright.mp3",
      "drillfile": "modules/4dbe898e-6c1c-40a5-a3aa-80819c37b729.pdf>COPYRIGHT.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:04:18.607984'),
      "id": "d224eede54144f59903f04b776add302",
      "description": "Copyright",
      "audiofile": "modules/3727fb99-0720-4464-99f9-12f2df6ce492.mp3>copyright.mp3",
      "drillfile": "modules/4dbe898e-6c1c-40a5-a3aa-80819c37b729.pdf>COPYRIGHT.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:04:18.607984'),
      "id": "d224eede54144f59903f04b776add302",
      "description": "Copyright",
      "audiofile": "modules/3727fb99-0720-4464-99f9-12f2df6ce492.mp3>copyright.mp3",
      "drillfile": "modules/4dbe898e-6c1c-40a5-a3aa-80819c37b729.pdf>COPYRIGHT.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:04:50.570977'),
      "id": "32df15e13c4d4faa948f861e9af9e7ec",
      "description": "Doctor",
      "audiofile": "modules/2dbc0e20-6ebd-4ba2-bdaa-3547cd63b8c1.mp3>doctordoctoring.mp3",
      "drillfile": "modules/e63cb9ca-88a6-4f1f-981c-20c643d69775.pdf>DOCTOR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:04:50.570977'),
      "id": "32df15e13c4d4faa948f861e9af9e7ec",
      "description": "Doctor",
      "audiofile": "modules/2dbc0e20-6ebd-4ba2-bdaa-3547cd63b8c1.mp3>doctordoctoring.mp3",
      "drillfile": "modules/e63cb9ca-88a6-4f1f-981c-20c643d69775.pdf>DOCTOR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:04:50.570977'),
      "id": "32df15e13c4d4faa948f861e9af9e7ec",
      "description": "Doctor",
      "audiofile": "modules/2dbc0e20-6ebd-4ba2-bdaa-3547cd63b8c1.mp3>doctordoctoring.mp3",
      "drillfile": "modules/e63cb9ca-88a6-4f1f-981c-20c643d69775.pdf>DOCTOR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:04:50.570977'),
      "id": "32df15e13c4d4faa948f861e9af9e7ec",
      "description": "Doctor",
      "audiofile": "modules/2dbc0e20-6ebd-4ba2-bdaa-3547cd63b8c1.mp3>doctordoctoring.mp3",
      "drillfile": "modules/e63cb9ca-88a6-4f1f-981c-20c643d69775.pdf>DOCTOR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:04:50.570977'),
      "id": "32df15e13c4d4faa948f861e9af9e7ec",
      "description": "Doctor",
      "audiofile": "modules/2dbc0e20-6ebd-4ba2-bdaa-3547cd63b8c1.mp3>doctordoctoring.mp3",
      "drillfile": "modules/e63cb9ca-88a6-4f1f-981c-20c643d69775.pdf>DOCTOR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:04:50.570977'),
      "id": "32df15e13c4d4faa948f861e9af9e7ec",
      "description": "Doctor",
      "audiofile": "modules/2dbc0e20-6ebd-4ba2-bdaa-3547cd63b8c1.mp3>doctordoctoring.mp3",
      "drillfile": "modules/e63cb9ca-88a6-4f1f-981c-20c643d69775.pdf>DOCTOR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:16.322712'),
      "id": "b0ebfb4dcc4748d6a6da9f91c175414a",
      "description": "Four Furious Friends",
      "audiofile": "modules/a5a32687-1c7d-4d2d-9abd-a178d17ee78b.mp3>fourfuriousfriends.mp3",
      "drillfile": "modules/ea2f4ebb-5099-4ad7-9d0d-622e80da74b5.pdf>FOUR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:16.322712'),
      "id": "b0ebfb4dcc4748d6a6da9f91c175414a",
      "description": "Four Furious Friends",
      "audiofile": "modules/a5a32687-1c7d-4d2d-9abd-a178d17ee78b.mp3>fourfuriousfriends.mp3",
      "drillfile": "modules/ea2f4ebb-5099-4ad7-9d0d-622e80da74b5.pdf>FOUR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:16.322712'),
      "id": "b0ebfb4dcc4748d6a6da9f91c175414a",
      "description": "Four Furious Friends",
      "audiofile": "modules/a5a32687-1c7d-4d2d-9abd-a178d17ee78b.mp3>fourfuriousfriends.mp3",
      "drillfile": "modules/ea2f4ebb-5099-4ad7-9d0d-622e80da74b5.pdf>FOUR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:16.322712'),
      "id": "b0ebfb4dcc4748d6a6da9f91c175414a",
      "description": "Four Furious Friends",
      "audiofile": "modules/a5a32687-1c7d-4d2d-9abd-a178d17ee78b.mp3>fourfuriousfriends.mp3",
      "drillfile": "modules/ea2f4ebb-5099-4ad7-9d0d-622e80da74b5.pdf>FOUR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:16.322712'),
      "id": "b0ebfb4dcc4748d6a6da9f91c175414a",
      "description": "Four Furious Friends",
      "audiofile": "modules/a5a32687-1c7d-4d2d-9abd-a178d17ee78b.mp3>fourfuriousfriends.mp3",
      "drillfile": "modules/ea2f4ebb-5099-4ad7-9d0d-622e80da74b5.pdf>FOUR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:16.322712'),
      "id": "b0ebfb4dcc4748d6a6da9f91c175414a",
      "description": "Four Furious Friends",
      "audiofile": "modules/a5a32687-1c7d-4d2d-9abd-a178d17ee78b.mp3>fourfuriousfriends.mp3",
      "drillfile": "modules/ea2f4ebb-5099-4ad7-9d0d-622e80da74b5.pdf>FOUR.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:35.728452'),
      "id": "df66b6c255f5431a93b5122b56e3011b",
      "description": "Fuzzy Wuzzy",
      "audiofile": "modules/ced0b272-abe0-490e-a4c7-8ed8296658a6.mp3>fuzzywuzzy.mp3",
      "drillfile": "modules/a7c87dc7-0aa4-4ef6-abd6-ddadfa11bc4c.pdf>FUZZY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:35.728452'),
      "id": "df66b6c255f5431a93b5122b56e3011b",
      "description": "Fuzzy Wuzzy",
      "audiofile": "modules/ced0b272-abe0-490e-a4c7-8ed8296658a6.mp3>fuzzywuzzy.mp3",
      "drillfile": "modules/a7c87dc7-0aa4-4ef6-abd6-ddadfa11bc4c.pdf>FUZZY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:35.728452'),
      "id": "df66b6c255f5431a93b5122b56e3011b",
      "description": "Fuzzy Wuzzy",
      "audiofile": "modules/ced0b272-abe0-490e-a4c7-8ed8296658a6.mp3>fuzzywuzzy.mp3",
      "drillfile": "modules/a7c87dc7-0aa4-4ef6-abd6-ddadfa11bc4c.pdf>FUZZY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:35.728452'),
      "id": "df66b6c255f5431a93b5122b56e3011b",
      "description": "Fuzzy Wuzzy",
      "audiofile": "modules/ced0b272-abe0-490e-a4c7-8ed8296658a6.mp3>fuzzywuzzy.mp3",
      "drillfile": "modules/a7c87dc7-0aa4-4ef6-abd6-ddadfa11bc4c.pdf>FUZZY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:35.728452'),
      "id": "df66b6c255f5431a93b5122b56e3011b",
      "description": "Fuzzy Wuzzy",
      "audiofile": "modules/ced0b272-abe0-490e-a4c7-8ed8296658a6.mp3>fuzzywuzzy.mp3",
      "drillfile": "modules/a7c87dc7-0aa4-4ef6-abd6-ddadfa11bc4c.pdf>FUZZY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:35.728452'),
      "id": "df66b6c255f5431a93b5122b56e3011b",
      "description": "Fuzzy Wuzzy",
      "audiofile": "modules/ced0b272-abe0-490e-a4c7-8ed8296658a6.mp3>fuzzywuzzy.mp3",
      "drillfile": "modules/a7c87dc7-0aa4-4ef6-abd6-ddadfa11bc4c.pdf>FUZZY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:53.010291'),
      "id": "58323b8a27b843d58926a994e0f3ac4b",
      "description": "Good Cook",
      "audiofile": "modules/f6d5e00b-86d8-435a-9ca6-52454a181c8d.mp3>goodcook.mp3",
      "drillfile": "modules/12e27738-3f1d-406c-995a-773d673cef88.pdf>good cook.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:53.010291'),
      "id": "58323b8a27b843d58926a994e0f3ac4b",
      "description": "Good Cook",
      "audiofile": "modules/f6d5e00b-86d8-435a-9ca6-52454a181c8d.mp3>goodcook.mp3",
      "drillfile": "modules/12e27738-3f1d-406c-995a-773d673cef88.pdf>good cook.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:53.010291'),
      "id": "58323b8a27b843d58926a994e0f3ac4b",
      "description": "Good Cook",
      "audiofile": "modules/f6d5e00b-86d8-435a-9ca6-52454a181c8d.mp3>goodcook.mp3",
      "drillfile": "modules/12e27738-3f1d-406c-995a-773d673cef88.pdf>good cook.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:53.010291'),
      "id": "58323b8a27b843d58926a994e0f3ac4b",
      "description": "Good Cook",
      "audiofile": "modules/f6d5e00b-86d8-435a-9ca6-52454a181c8d.mp3>goodcook.mp3",
      "drillfile": "modules/12e27738-3f1d-406c-995a-773d673cef88.pdf>good cook.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:53.010291'),
      "id": "58323b8a27b843d58926a994e0f3ac4b",
      "description": "Good Cook",
      "audiofile": "modules/f6d5e00b-86d8-435a-9ca6-52454a181c8d.mp3>goodcook.mp3",
      "drillfile": "modules/12e27738-3f1d-406c-995a-773d673cef88.pdf>good cook.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:05:53.010291'),
      "id": "58323b8a27b843d58926a994e0f3ac4b",
      "description": "Good Cook",
      "audiofile": "modules/f6d5e00b-86d8-435a-9ca6-52454a181c8d.mp3>goodcook.mp3",
      "drillfile": "modules/12e27738-3f1d-406c-995a-773d673cef88.pdf>good cook.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:06:13.908235'),
      "id": "893cc6833c9848daafd494b94c56f14e",
      "description": "Green Glass Globe",
      "audiofile": "modules/e79df121-6b36-4cd8-b024-cdfa6fb91ea0.mp3>greenglassglobe.mp3",
      "drillfile": "modules/8ed6e43b-0931-4e0d-aacc-173edea226f7.pdf>GREEN.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:06:13.908235'),
      "id": "893cc6833c9848daafd494b94c56f14e",
      "description": "Green Glass Globe",
      "audiofile": "modules/e79df121-6b36-4cd8-b024-cdfa6fb91ea0.mp3>greenglassglobe.mp3",
      "drillfile": "modules/8ed6e43b-0931-4e0d-aacc-173edea226f7.pdf>GREEN.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:06:13.908235'),
      "id": "893cc6833c9848daafd494b94c56f14e",
      "description": "Green Glass Globe",
      "audiofile": "modules/e79df121-6b36-4cd8-b024-cdfa6fb91ea0.mp3>greenglassglobe.mp3",
      "drillfile": "modules/8ed6e43b-0931-4e0d-aacc-173edea226f7.pdf>GREEN.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:06:13.908235'),
      "id": "893cc6833c9848daafd494b94c56f14e",
      "description": "Green Glass Globe",
      "audiofile": "modules/e79df121-6b36-4cd8-b024-cdfa6fb91ea0.mp3>greenglassglobe.mp3",
      "drillfile": "modules/8ed6e43b-0931-4e0d-aacc-173edea226f7.pdf>GREEN.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:06:13.908235'),
      "id": "893cc6833c9848daafd494b94c56f14e",
      "description": "Green Glass Globe",
      "audiofile": "modules/e79df121-6b36-4cd8-b024-cdfa6fb91ea0.mp3>greenglassglobe.mp3",
      "drillfile": "modules/8ed6e43b-0931-4e0d-aacc-173edea226f7.pdf>GREEN.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:06:13.908235'),
      "id": "893cc6833c9848daafd494b94c56f14e",
      "description": "Green Glass Globe",
      "audiofile": "modules/e79df121-6b36-4cd8-b024-cdfa6fb91ea0.mp3>greenglassglobe.mp3",
      "drillfile": "modules/8ed6e43b-0931-4e0d-aacc-173edea226f7.pdf>GREEN.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:06:42.472759'),
      "id": "0eb548b6c8d24e9bab7207a50100b679",
      "description": "How can scan",
      "audiofile": "modules/1859fb26-a6af-47c2-84d0-ab09d16e3b93.mp3>howmanycanscannibalnibble (1).mp3",
      "drillfile": "modules/65d3c35a-5a60-4e09-a73c-759dcd0b621f.pdf>HOW.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:06:42.472759'),
      "id": "0eb548b6c8d24e9bab7207a50100b679",
      "description": "How can scan",
      "audiofile": "modules/1859fb26-a6af-47c2-84d0-ab09d16e3b93.mp3>howmanycanscannibalnibble (1).mp3",
      "drillfile": "modules/65d3c35a-5a60-4e09-a73c-759dcd0b621f.pdf>HOW.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:06:42.472759'),
      "id": "0eb548b6c8d24e9bab7207a50100b679",
      "description": "How can scan",
      "audiofile": "modules/1859fb26-a6af-47c2-84d0-ab09d16e3b93.mp3>howmanycanscannibalnibble (1).mp3",
      "drillfile": "modules/65d3c35a-5a60-4e09-a73c-759dcd0b621f.pdf>HOW.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:06:42.472759'),
      "id": "0eb548b6c8d24e9bab7207a50100b679",
      "description": "How can scan",
      "audiofile": "modules/1859fb26-a6af-47c2-84d0-ab09d16e3b93.mp3>howmanycanscannibalnibble (1).mp3",
      "drillfile": "modules/65d3c35a-5a60-4e09-a73c-759dcd0b621f.pdf>HOW.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:06:42.472759'),
      "id": "0eb548b6c8d24e9bab7207a50100b679",
      "description": "How can scan",
      "audiofile": "modules/1859fb26-a6af-47c2-84d0-ab09d16e3b93.mp3>howmanycanscannibalnibble (1).mp3",
      "drillfile": "modules/65d3c35a-5a60-4e09-a73c-759dcd0b621f.pdf>HOW.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:06:42.472759'),
      "id": "0eb548b6c8d24e9bab7207a50100b679",
      "description": "How can scan",
      "audiofile": "modules/1859fb26-a6af-47c2-84d0-ab09d16e3b93.mp3>howmanycanscannibalnibble (1).mp3",
      "drillfile": "modules/65d3c35a-5a60-4e09-a73c-759dcd0b621f.pdf>HOW.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:07:17.609887'),
      "id": "bc36b071ee8c42fc90194c7c424af99c",
      "description": "I have got a date",
      "audiofile": "modules/9b3a3326-a972-4974-9baa-cbd3aaf70e65.mp3>Ihavegotadate.mp3",
      "drillfile": "modules/20ebe78e-80b8-46e7-8b8a-11040f13d8c3.pdf>I.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:07:17.609887'),
      "id": "bc36b071ee8c42fc90194c7c424af99c",
      "description": "I have got a date",
      "audiofile": "modules/9b3a3326-a972-4974-9baa-cbd3aaf70e65.mp3>Ihavegotadate.mp3",
      "drillfile": "modules/20ebe78e-80b8-46e7-8b8a-11040f13d8c3.pdf>I.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:07:17.609887'),
      "id": "bc36b071ee8c42fc90194c7c424af99c",
      "description": "I have got a date",
      "audiofile": "modules/9b3a3326-a972-4974-9baa-cbd3aaf70e65.mp3>Ihavegotadate.mp3",
      "drillfile": "modules/20ebe78e-80b8-46e7-8b8a-11040f13d8c3.pdf>I.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:07:17.609887'),
      "id": "bc36b071ee8c42fc90194c7c424af99c",
      "description": "I have got a date",
      "audiofile": "modules/9b3a3326-a972-4974-9baa-cbd3aaf70e65.mp3>Ihavegotadate.mp3",
      "drillfile": "modules/20ebe78e-80b8-46e7-8b8a-11040f13d8c3.pdf>I.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:07:17.609887'),
      "id": "bc36b071ee8c42fc90194c7c424af99c",
      "description": "I have got a date",
      "audiofile": "modules/9b3a3326-a972-4974-9baa-cbd3aaf70e65.mp3>Ihavegotadate.mp3",
      "drillfile": "modules/20ebe78e-80b8-46e7-8b8a-11040f13d8c3.pdf>I.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:07:17.609887'),
      "id": "bc36b071ee8c42fc90194c7c424af99c",
      "description": "I have got a date",
      "audiofile": "modules/9b3a3326-a972-4974-9baa-cbd3aaf70e65.mp3>Ihavegotadate.mp3",
      "drillfile": "modules/20ebe78e-80b8-46e7-8b8a-11040f13d8c3.pdf>I.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:07:37.543239'),
      "id": "14b0d99a1e134e9fb349d0bea7161688",
      "description": "I saw Sussie",
      "audiofile": "modules/cf39ddfe-7b1f-449a-8de0-953a1fd17d95.mp3>isawSussie.mp3",
      "drillfile": "modules/f68ebae6-2ab8-46bc-b067-397d7cbc1595.pdf>SUSSIE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:07:37.543239'),
      "id": "14b0d99a1e134e9fb349d0bea7161688",
      "description": "I saw Sussie",
      "audiofile": "modules/cf39ddfe-7b1f-449a-8de0-953a1fd17d95.mp3>isawSussie.mp3",
      "drillfile": "modules/f68ebae6-2ab8-46bc-b067-397d7cbc1595.pdf>SUSSIE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:07:37.543239'),
      "id": "14b0d99a1e134e9fb349d0bea7161688",
      "description": "I saw Sussie",
      "audiofile": "modules/cf39ddfe-7b1f-449a-8de0-953a1fd17d95.mp3>isawSussie.mp3",
      "drillfile": "modules/f68ebae6-2ab8-46bc-b067-397d7cbc1595.pdf>SUSSIE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:07:37.543239'),
      "id": "14b0d99a1e134e9fb349d0bea7161688",
      "description": "I saw Sussie",
      "audiofile": "modules/cf39ddfe-7b1f-449a-8de0-953a1fd17d95.mp3>isawSussie.mp3",
      "drillfile": "modules/f68ebae6-2ab8-46bc-b067-397d7cbc1595.pdf>SUSSIE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:07:37.543239'),
      "id": "14b0d99a1e134e9fb349d0bea7161688",
      "description": "I saw Sussie",
      "audiofile": "modules/cf39ddfe-7b1f-449a-8de0-953a1fd17d95.mp3>isawSussie.mp3",
      "drillfile": "modules/f68ebae6-2ab8-46bc-b067-397d7cbc1595.pdf>SUSSIE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:07:37.543239'),
      "id": "14b0d99a1e134e9fb349d0bea7161688",
      "description": "I saw Sussie",
      "audiofile": "modules/cf39ddfe-7b1f-449a-8de0-953a1fd17d95.mp3>isawSussie.mp3",
      "drillfile": "modules/f68ebae6-2ab8-46bc-b067-397d7cbc1595.pdf>SUSSIE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:08:08.587349'),
      "id": "c4bdbe2d39a940a19069761b719136b3",
      "description": "I Scream",
      "audiofile": "modules/7c177f82-c04f-456d-a617-0f579e5b2417.mp3>iscreamyouscream (1).mp3",
      "drillfile": "modules/e06c56d3-9373-4c3b-81e5-86d66ff23f3a.pdf>I SCREAM.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:08:08.587349'),
      "id": "c4bdbe2d39a940a19069761b719136b3",
      "description": "I Scream",
      "audiofile": "modules/7c177f82-c04f-456d-a617-0f579e5b2417.mp3>iscreamyouscream (1).mp3",
      "drillfile": "modules/e06c56d3-9373-4c3b-81e5-86d66ff23f3a.pdf>I SCREAM.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:08:08.587349'),
      "id": "c4bdbe2d39a940a19069761b719136b3",
      "description": "I Scream",
      "audiofile": "modules/7c177f82-c04f-456d-a617-0f579e5b2417.mp3>iscreamyouscream (1).mp3",
      "drillfile": "modules/e06c56d3-9373-4c3b-81e5-86d66ff23f3a.pdf>I SCREAM.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:08:08.587349'),
      "id": "c4bdbe2d39a940a19069761b719136b3",
      "description": "I Scream",
      "audiofile": "modules/7c177f82-c04f-456d-a617-0f579e5b2417.mp3>iscreamyouscream (1).mp3",
      "drillfile": "modules/e06c56d3-9373-4c3b-81e5-86d66ff23f3a.pdf>I SCREAM.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:08:08.587349'),
      "id": "c4bdbe2d39a940a19069761b719136b3",
      "description": "I Scream",
      "audiofile": "modules/7c177f82-c04f-456d-a617-0f579e5b2417.mp3>iscreamyouscream (1).mp3",
      "drillfile": "modules/e06c56d3-9373-4c3b-81e5-86d66ff23f3a.pdf>I SCREAM.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:08:08.587349'),
      "id": "c4bdbe2d39a940a19069761b719136b3",
      "description": "I Scream",
      "audiofile": "modules/7c177f82-c04f-456d-a617-0f579e5b2417.mp3>iscreamyouscream (1).mp3",
      "drillfile": "modules/e06c56d3-9373-4c3b-81e5-86d66ff23f3a.pdf>I SCREAM.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:08:33.550914'),
      "id": "bf25a10fbae64c51b710fa21407c2003",
      "description": "I Wish",
      "audiofile": "modules/f36e2cc5-49c0-4c6a-8323-9f9a35b21e29.mp3>Iwishtowish.mp3",
      "drillfile": "modules/5940ffcb-1b37-49f2-a1a1-0378c23334a3.pdf>WISH.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:08:33.550914'),
      "id": "bf25a10fbae64c51b710fa21407c2003",
      "description": "I Wish",
      "audiofile": "modules/f36e2cc5-49c0-4c6a-8323-9f9a35b21e29.mp3>Iwishtowish.mp3",
      "drillfile": "modules/5940ffcb-1b37-49f2-a1a1-0378c23334a3.pdf>WISH.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:08:33.550914'),
      "id": "bf25a10fbae64c51b710fa21407c2003",
      "description": "I Wish",
      "audiofile": "modules/f36e2cc5-49c0-4c6a-8323-9f9a35b21e29.mp3>Iwishtowish.mp3",
      "drillfile": "modules/5940ffcb-1b37-49f2-a1a1-0378c23334a3.pdf>WISH.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:08:33.550914'),
      "id": "bf25a10fbae64c51b710fa21407c2003",
      "description": "I Wish",
      "audiofile": "modules/f36e2cc5-49c0-4c6a-8323-9f9a35b21e29.mp3>Iwishtowish.mp3",
      "drillfile": "modules/5940ffcb-1b37-49f2-a1a1-0378c23334a3.pdf>WISH.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:08:33.550914'),
      "id": "bf25a10fbae64c51b710fa21407c2003",
      "description": "I Wish",
      "audiofile": "modules/f36e2cc5-49c0-4c6a-8323-9f9a35b21e29.mp3>Iwishtowish.mp3",
      "drillfile": "modules/5940ffcb-1b37-49f2-a1a1-0378c23334a3.pdf>WISH.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:08:33.550914'),
      "id": "bf25a10fbae64c51b710fa21407c2003",
      "description": "I Wish",
      "audiofile": "modules/f36e2cc5-49c0-4c6a-8323-9f9a35b21e29.mp3>Iwishtowish.mp3",
      "drillfile": "modules/5940ffcb-1b37-49f2-a1a1-0378c23334a3.pdf>WISH.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:09.656047'),
      "id": "0b78f9044d904508b7a74892fd6b3d2d",
      "description": "Marry Macmarry",
      "audiofile": "modules/5f6b84f5-bec7-4c45-a2f2-d473f1510522.mp3>maryMacmarry.mp3",
      "drillfile": "modules/5371a383-9c7f-48ba-8c51-9f8a9e3c56ca.pdf>MARY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:09.656047'),
      "id": "0b78f9044d904508b7a74892fd6b3d2d",
      "description": "Marry Macmarry",
      "audiofile": "modules/5f6b84f5-bec7-4c45-a2f2-d473f1510522.mp3>maryMacmarry.mp3",
      "drillfile": "modules/5371a383-9c7f-48ba-8c51-9f8a9e3c56ca.pdf>MARY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:09.656047'),
      "id": "0b78f9044d904508b7a74892fd6b3d2d",
      "description": "Marry Macmarry",
      "audiofile": "modules/5f6b84f5-bec7-4c45-a2f2-d473f1510522.mp3>maryMacmarry.mp3",
      "drillfile": "modules/5371a383-9c7f-48ba-8c51-9f8a9e3c56ca.pdf>MARY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:09.656047'),
      "id": "0b78f9044d904508b7a74892fd6b3d2d",
      "description": "Marry Macmarry",
      "audiofile": "modules/5f6b84f5-bec7-4c45-a2f2-d473f1510522.mp3>maryMacmarry.mp3",
      "drillfile": "modules/5371a383-9c7f-48ba-8c51-9f8a9e3c56ca.pdf>MARY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:09.656047'),
      "id": "0b78f9044d904508b7a74892fd6b3d2d",
      "description": "Marry Macmarry",
      "audiofile": "modules/5f6b84f5-bec7-4c45-a2f2-d473f1510522.mp3>maryMacmarry.mp3",
      "drillfile": "modules/5371a383-9c7f-48ba-8c51-9f8a9e3c56ca.pdf>MARY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:09.656047'),
      "id": "0b78f9044d904508b7a74892fd6b3d2d",
      "description": "Marry Macmarry",
      "audiofile": "modules/5f6b84f5-bec7-4c45-a2f2-d473f1510522.mp3>maryMacmarry.mp3",
      "drillfile": "modules/5371a383-9c7f-48ba-8c51-9f8a9e3c56ca.pdf>MARY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:31.68262'),
      "id": "26c4f8db387645e69d38df92d5180ba0",
      "description": "Nature Watcher",
      "audiofile": "modules/7ca73397-65b9-44dc-8b25-19fbb5a1c75b.mp3>naturewatcher.mp3",
      "drillfile": "modules/db77a6e1-a94f-478f-96a9-6f573620058e.pdf>NATURE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:31.68262'),
      "id": "26c4f8db387645e69d38df92d5180ba0",
      "description": "Nature Watcher",
      "audiofile": "modules/7ca73397-65b9-44dc-8b25-19fbb5a1c75b.mp3>naturewatcher.mp3",
      "drillfile": "modules/db77a6e1-a94f-478f-96a9-6f573620058e.pdf>NATURE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:31.68262'),
      "id": "26c4f8db387645e69d38df92d5180ba0",
      "description": "Nature Watcher",
      "audiofile": "modules/7ca73397-65b9-44dc-8b25-19fbb5a1c75b.mp3>naturewatcher.mp3",
      "drillfile": "modules/db77a6e1-a94f-478f-96a9-6f573620058e.pdf>NATURE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:31.68262'),
      "id": "26c4f8db387645e69d38df92d5180ba0",
      "description": "Nature Watcher",
      "audiofile": "modules/7ca73397-65b9-44dc-8b25-19fbb5a1c75b.mp3>naturewatcher.mp3",
      "drillfile": "modules/db77a6e1-a94f-478f-96a9-6f573620058e.pdf>NATURE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:31.68262'),
      "id": "26c4f8db387645e69d38df92d5180ba0",
      "description": "Nature Watcher",
      "audiofile": "modules/7ca73397-65b9-44dc-8b25-19fbb5a1c75b.mp3>naturewatcher.mp3",
      "drillfile": "modules/db77a6e1-a94f-478f-96a9-6f573620058e.pdf>NATURE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:09:31.68262'),
      "id": "26c4f8db387645e69d38df92d5180ba0",
      "description": "Nature Watcher",
      "audiofile": "modules/7ca73397-65b9-44dc-8b25-19fbb5a1c75b.mp3>naturewatcher.mp3",
      "drillfile": "modules/db77a6e1-a94f-478f-96a9-6f573620058e.pdf>NATURE.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:11:47.057343'),
      "id": "5db7c6cc9f2848d5968a9a22da312928",
      "description": "Seven Slimey Snails",
      "audiofile": "modules/09fc4093-2112-45e8-9f7a-6b9a8f941825.mp3>sevenslimeysnails (1).mp3",
      "drillfile": "modules/3d204a1c-b60e-429d-b22f-010aec7825e1.pdf>SNAIL.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:11:47.057343'),
      "id": "5db7c6cc9f2848d5968a9a22da312928",
      "description": "Seven Slimey Snails",
      "audiofile": "modules/09fc4093-2112-45e8-9f7a-6b9a8f941825.mp3>sevenslimeysnails (1).mp3",
      "drillfile": "modules/3d204a1c-b60e-429d-b22f-010aec7825e1.pdf>SNAIL.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:11:47.057343'),
      "id": "5db7c6cc9f2848d5968a9a22da312928",
      "description": "Seven Slimey Snails",
      "audiofile": "modules/09fc4093-2112-45e8-9f7a-6b9a8f941825.mp3>sevenslimeysnails (1).mp3",
      "drillfile": "modules/3d204a1c-b60e-429d-b22f-010aec7825e1.pdf>SNAIL.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:11:47.057343'),
      "id": "5db7c6cc9f2848d5968a9a22da312928",
      "description": "Seven Slimey Snails",
      "audiofile": "modules/09fc4093-2112-45e8-9f7a-6b9a8f941825.mp3>sevenslimeysnails (1).mp3",
      "drillfile": "modules/3d204a1c-b60e-429d-b22f-010aec7825e1.pdf>SNAIL.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:11:47.057343'),
      "id": "5db7c6cc9f2848d5968a9a22da312928",
      "description": "Seven Slimey Snails",
      "audiofile": "modules/09fc4093-2112-45e8-9f7a-6b9a8f941825.mp3>sevenslimeysnails (1).mp3",
      "drillfile": "modules/3d204a1c-b60e-429d-b22f-010aec7825e1.pdf>SNAIL.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:11:47.057343'),
      "id": "5db7c6cc9f2848d5968a9a22da312928",
      "description": "Seven Slimey Snails",
      "audiofile": "modules/09fc4093-2112-45e8-9f7a-6b9a8f941825.mp3>sevenslimeysnails (1).mp3",
      "drillfile": "modules/3d204a1c-b60e-429d-b22f-010aec7825e1.pdf>SNAIL.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:04.679919'),
      "id": "29584b39e085420abd67e5589dcfc1c5",
      "description": "Chicago",
      "audiofile": "modules/664a5d66-90be-419f-8913-6ebf275794f8.mp3>spellchicago.mp3",
      "drillfile": "modules/4a712f77-7c67-4c7d-912c-a45ed6303333.pdf>CHICAGO.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:04.679919'),
      "id": "29584b39e085420abd67e5589dcfc1c5",
      "description": "Chicago",
      "audiofile": "modules/664a5d66-90be-419f-8913-6ebf275794f8.mp3>spellchicago.mp3",
      "drillfile": "modules/4a712f77-7c67-4c7d-912c-a45ed6303333.pdf>CHICAGO.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:04.679919'),
      "id": "29584b39e085420abd67e5589dcfc1c5",
      "description": "Chicago",
      "audiofile": "modules/664a5d66-90be-419f-8913-6ebf275794f8.mp3>spellchicago.mp3",
      "drillfile": "modules/4a712f77-7c67-4c7d-912c-a45ed6303333.pdf>CHICAGO.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:04.679919'),
      "id": "29584b39e085420abd67e5589dcfc1c5",
      "description": "Chicago",
      "audiofile": "modules/664a5d66-90be-419f-8913-6ebf275794f8.mp3>spellchicago.mp3",
      "drillfile": "modules/4a712f77-7c67-4c7d-912c-a45ed6303333.pdf>CHICAGO.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:04.679919'),
      "id": "29584b39e085420abd67e5589dcfc1c5",
      "description": "Chicago",
      "audiofile": "modules/664a5d66-90be-419f-8913-6ebf275794f8.mp3>spellchicago.mp3",
      "drillfile": "modules/4a712f77-7c67-4c7d-912c-a45ed6303333.pdf>CHICAGO.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:04.679919'),
      "id": "29584b39e085420abd67e5589dcfc1c5",
      "description": "Chicago",
      "audiofile": "modules/664a5d66-90be-419f-8913-6ebf275794f8.mp3>spellchicago.mp3",
      "drillfile": "modules/4a712f77-7c67-4c7d-912c-a45ed6303333.pdf>CHICAGO.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:23.593802'),
      "id": "6a942b1654574d84850fe44fca404157",
      "description": "Spell New York",
      "audiofile": "modules/79e7a8ed-bd7a-4642-80ea-617a1c793bb2.mp3>spellnewyork (1).mp3",
      "drillfile": "modules/8009f955-1f37-48de-a3f9-314e11475118.pdf>NY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:23.593802'),
      "id": "6a942b1654574d84850fe44fca404157",
      "description": "Spell New York",
      "audiofile": "modules/79e7a8ed-bd7a-4642-80ea-617a1c793bb2.mp3>spellnewyork (1).mp3",
      "drillfile": "modules/8009f955-1f37-48de-a3f9-314e11475118.pdf>NY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:23.593802'),
      "id": "6a942b1654574d84850fe44fca404157",
      "description": "Spell New York",
      "audiofile": "modules/79e7a8ed-bd7a-4642-80ea-617a1c793bb2.mp3>spellnewyork (1).mp3",
      "drillfile": "modules/8009f955-1f37-48de-a3f9-314e11475118.pdf>NY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:23.593802'),
      "id": "6a942b1654574d84850fe44fca404157",
      "description": "Spell New York",
      "audiofile": "modules/79e7a8ed-bd7a-4642-80ea-617a1c793bb2.mp3>spellnewyork (1).mp3",
      "drillfile": "modules/8009f955-1f37-48de-a3f9-314e11475118.pdf>NY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:23.593802'),
      "id": "6a942b1654574d84850fe44fca404157",
      "description": "Spell New York",
      "audiofile": "modules/79e7a8ed-bd7a-4642-80ea-617a1c793bb2.mp3>spellnewyork (1).mp3",
      "drillfile": "modules/8009f955-1f37-48de-a3f9-314e11475118.pdf>NY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:23.593802'),
      "id": "6a942b1654574d84850fe44fca404157",
      "description": "Spell New York",
      "audiofile": "modules/79e7a8ed-bd7a-4642-80ea-617a1c793bb2.mp3>spellnewyork (1).mp3",
      "drillfile": "modules/8009f955-1f37-48de-a3f9-314e11475118.pdf>NY.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:41.410178'),
      "id": "801a1b74e3fb4e91b6bb88c06d341af0",
      "description": "Two Witches",
      "audiofile": "modules/cee1a322-853d-4f6b-b821-fa8940065fc4.mp3>twowitches.mp3",
      "drillfile": "modules/dc731e76-4763-43c7-a94b-57db1975724c.pdf>TWO.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:41.410178'),
      "id": "801a1b74e3fb4e91b6bb88c06d341af0",
      "description": "Two Witches",
      "audiofile": "modules/cee1a322-853d-4f6b-b821-fa8940065fc4.mp3>twowitches.mp3",
      "drillfile": "modules/dc731e76-4763-43c7-a94b-57db1975724c.pdf>TWO.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:41.410178'),
      "id": "801a1b74e3fb4e91b6bb88c06d341af0",
      "description": "Two Witches",
      "audiofile": "modules/cee1a322-853d-4f6b-b821-fa8940065fc4.mp3>twowitches.mp3",
      "drillfile": "modules/dc731e76-4763-43c7-a94b-57db1975724c.pdf>TWO.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:41.410178'),
      "id": "801a1b74e3fb4e91b6bb88c06d341af0",
      "description": "Two Witches",
      "audiofile": "modules/cee1a322-853d-4f6b-b821-fa8940065fc4.mp3>twowitches.mp3",
      "drillfile": "modules/dc731e76-4763-43c7-a94b-57db1975724c.pdf>TWO.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:41.410178'),
      "id": "801a1b74e3fb4e91b6bb88c06d341af0",
      "description": "Two Witches",
      "audiofile": "modules/cee1a322-853d-4f6b-b821-fa8940065fc4.mp3>twowitches.mp3",
      "drillfile": "modules/dc731e76-4763-43c7-a94b-57db1975724c.pdf>TWO.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:41.410178'),
      "id": "801a1b74e3fb4e91b6bb88c06d341af0",
      "description": "Two Witches",
      "audiofile": "modules/cee1a322-853d-4f6b-b821-fa8940065fc4.mp3>twowitches.mp3",
      "drillfile": "modules/dc731e76-4763-43c7-a94b-57db1975724c.pdf>TWO.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:54.834494'),
      "id": "655ae31aa7d549b9a6d4bb82256951ba",
      "description": "Understand",
      "audiofile": "modules/480c6a73-8081-4080-8c0d-59c119f12faf.mp3>understand.mp3",
      "drillfile": "modules/98b7330a-4920-41ef-a3e9-b6d9f77147ba.pdf>UNDERSTAND.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:54.834494'),
      "id": "655ae31aa7d549b9a6d4bb82256951ba",
      "description": "Understand",
      "audiofile": "modules/480c6a73-8081-4080-8c0d-59c119f12faf.mp3>understand.mp3",
      "drillfile": "modules/98b7330a-4920-41ef-a3e9-b6d9f77147ba.pdf>UNDERSTAND.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:54.834494'),
      "id": "655ae31aa7d549b9a6d4bb82256951ba",
      "description": "Understand",
      "audiofile": "modules/480c6a73-8081-4080-8c0d-59c119f12faf.mp3>understand.mp3",
      "drillfile": "modules/98b7330a-4920-41ef-a3e9-b6d9f77147ba.pdf>UNDERSTAND.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:54.834494'),
      "id": "655ae31aa7d549b9a6d4bb82256951ba",
      "description": "Understand",
      "audiofile": "modules/480c6a73-8081-4080-8c0d-59c119f12faf.mp3>understand.mp3",
      "drillfile": "modules/98b7330a-4920-41ef-a3e9-b6d9f77147ba.pdf>UNDERSTAND.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:54.834494'),
      "id": "655ae31aa7d549b9a6d4bb82256951ba",
      "description": "Understand",
      "audiofile": "modules/480c6a73-8081-4080-8c0d-59c119f12faf.mp3>understand.mp3",
      "drillfile": "modules/98b7330a-4920-41ef-a3e9-b6d9f77147ba.pdf>UNDERSTAND.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:12:54.834494'),
      "id": "655ae31aa7d549b9a6d4bb82256951ba",
      "description": "Understand",
      "audiofile": "modules/480c6a73-8081-4080-8c0d-59c119f12faf.mp3>understand.mp3",
      "drillfile": "modules/98b7330a-4920-41ef-a3e9-b6d9f77147ba.pdf>UNDERSTAND.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:13:24.055903'),
      "id": "3b372fbaa2ed4a6594bf229cafb93954",
      "description": "Whether Weather",
      "audiofile": "modules/e63c46e7-dee0-4016-9cfd-1172901901fb.mp3>whetherweather.mp3",
      "drillfile": "modules/2b39e851-bf25-4ebf-9043-a5e78c35dff0.pdf>WEATHER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:13:24.055903'),
      "id": "3b372fbaa2ed4a6594bf229cafb93954",
      "description": "Whether Weather",
      "audiofile": "modules/e63c46e7-dee0-4016-9cfd-1172901901fb.mp3>whetherweather.mp3",
      "drillfile": "modules/2b39e851-bf25-4ebf-9043-a5e78c35dff0.pdf>WEATHER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:13:24.055903'),
      "id": "3b372fbaa2ed4a6594bf229cafb93954",
      "description": "Whether Weather",
      "audiofile": "modules/e63c46e7-dee0-4016-9cfd-1172901901fb.mp3>whetherweather.mp3",
      "drillfile": "modules/2b39e851-bf25-4ebf-9043-a5e78c35dff0.pdf>WEATHER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:13:24.055903'),
      "id": "3b372fbaa2ed4a6594bf229cafb93954",
      "description": "Whether Weather",
      "audiofile": "modules/e63c46e7-dee0-4016-9cfd-1172901901fb.mp3>whetherweather.mp3",
      "drillfile": "modules/2b39e851-bf25-4ebf-9043-a5e78c35dff0.pdf>WEATHER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:13:24.055903'),
      "id": "3b372fbaa2ed4a6594bf229cafb93954",
      "description": "Whether Weather",
      "audiofile": "modules/e63c46e7-dee0-4016-9cfd-1172901901fb.mp3>whetherweather.mp3",
      "drillfile": "modules/2b39e851-bf25-4ebf-9043-a5e78c35dff0.pdf>WEATHER.pdf"
    },
    {
      "practiceid": "d3ef24862c154785b07860731118a7cc",
      "timestamp": new Date('2024-03-15 09:13:24.055903'),
      "id": "3b372fbaa2ed4a6594bf229cafb93954",
      "description": "Whether Weather",
      "audiofile": "modules/e63c46e7-dee0-4016-9cfd-1172901901fb.mp3>whetherweather.mp3",
      "drillfile": "modules/2b39e851-bf25-4ebf-9043-a5e78c35dff0.pdf>WEATHER.pdf"
    }
  ]


  const admin_options =[
    {
      "type": "max_students",
      "value": "50",
    },
    {
      "type": "local_server",
      "value": "'http://34.80.109.155",
    },
  ]


  await bulkUpsert(prisma.administrators, administrator);
  await bulkUpsert(prisma.languages, languages);
  await bulkUpsert(prisma.speech_practices, practices);
  await bulkUpsert(prisma.speech_drills, drills);
  await bulkUpsert(prisma.admin_options, admin_options,"type");

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
