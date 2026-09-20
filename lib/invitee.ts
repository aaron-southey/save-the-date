const cleanName = (value: string | null): string | null => {
  if (!value) return null;
  const normalized = value.trim().replace(/\s+/g, " ").replace(/[<>]/g, "");
  if (!normalized) return null;
  return normalized.slice(0, 60);
};

const extractPair = (params: URLSearchParams, firstKey: string, secondKey: string): string | null => {
  const first = cleanName(params.get(firstKey));
  const second = cleanName(params.get(secondKey));

  if (first && second) return `${first} & ${second}`;
  return first ?? second ?? null;
};

export const getInviteeFromSearchParams = (params: URLSearchParams): string | null => {
  const pairMatches =
    extractPair(params, "name1", "name2") ??
    extractPair(params, "guest1", "guest2") ??
    extractPair(params, "first", "second");

  if (pairMatches) return pairMatches;

  const singleMatches = [
    params.get("to"),
    params.get("name"),
    params.get("guest"),
    params.get("invitee"),
    params.get("person"),
  ]
    .map(cleanName)
    .find(Boolean);

  if (singleMatches) return singleMatches;

  const namesValue = cleanName(params.get("names"));
  if (!namesValue) return null;

  const splitNames = namesValue
    .split(/,|&| and /i)
    .map((entry) => cleanName(entry))
    .filter((entry): entry is string => Boolean(entry));

  if (splitNames.length >= 2) return `${splitNames[0]} & ${splitNames[1]}`;
  return splitNames[0] ?? null;
};

export const getInviteeStorageKey = (params: URLSearchParams): string => {
  const invitee = getInviteeFromSearchParams(params);
  const identity = invitee
    ? invitee.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
    : "default";
  return `weddingInvitationOpened:${identity}`;
};

type SearchParamValue = string | string[] | undefined;

export const getInviteeFromQueryObject = (
  query: Record<string, SearchParamValue>,
): string | null => {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      if (value[0]) params.set(key, value[0]);
      return;
    }
    if (typeof value === "string") {
      params.set(key, value);
    }
  });

  return getInviteeFromSearchParams(params);
};
