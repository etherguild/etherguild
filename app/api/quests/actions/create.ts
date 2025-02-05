import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { Quest } from "@/types/quest";

type CreateQuestRequest = Pick<Quest, "title" | "description"> & {
  isMain?: boolean;
  isActive?: boolean;
  progress?: number;
};

function validateRequest(request: Request): Promise<CreateQuestRequest> {
  return request.json().then((body) => {
    if (!body.title) {
      throw new Error("Title is required");
    }
    if (!body.description) {
      throw new Error("Description is required");
    }

    return {
      title: body.title,
      description: body.description,
      isMain: body.isMain || false,
      isActive: body.isActive || false,
      progress: body.progress || 0,
    };
  });
}

export async function createQuest(request: Request) {
  try {
    const validatedData = await validateRequest(request);

    const quest = await prisma.quest.create({
      data: validatedData,
    });

    return NextResponse.json(quest);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to create quest",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
