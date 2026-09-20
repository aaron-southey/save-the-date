import type { Metadata } from "next";
import { InvitationGate } from "@/components/invitation/InvitationGate";
import { getInviteeFromQueryObject } from "@/lib/invitee";
import { wedding } from "@/lib/wedding";

type HomePageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export async function generateMetadata({ searchParams }: HomePageProps): Promise<Metadata> {
  const params = await searchParams;
  const invitee = getInviteeFromQueryObject(params);

  if (!invitee) {
    return {
      title: wedding.site.title,
      description: wedding.site.description,
      openGraph: {
        title: wedding.site.title,
        description: wedding.site.description,
      },
      twitter: {
        title: wedding.site.title,
        description: wedding.site.description,
      },
    };
  }

  return {
    title: `${wedding.site.title} — For ${invitee}`,
    description: `A cinematic digital invitation for ${invitee} to Aaron & Charlotte's wedding.`,
    openGraph: {
      title: `${wedding.site.title} — For ${invitee}`,
      description: `A cinematic digital invitation for ${invitee} to Aaron & Charlotte's wedding.`,
    },
    twitter: {
      title: `${wedding.site.title} — For ${invitee}`,
      description: `A cinematic digital invitation for ${invitee} to Aaron & Charlotte's wedding.`,
    },
  };
}

export default function Home() {
  return <InvitationGate />;
}
