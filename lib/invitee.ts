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
