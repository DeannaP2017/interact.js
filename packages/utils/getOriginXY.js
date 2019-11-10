import { rectToXY, resolveRectLike } from './rect';
export default function (target, element, action) {
    const actionOptions = target.options[action];
    const actionOrigin = actionOptions && actionOptions.origin;
    const origin = actionOrigin || target.options.origin;
    const originRect = resolveRectLike(origin, target, element, [target && element]);
    return rectToXY(originRect) || { x: 0, y: 0 };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T3JpZ2luWFkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXRPcmlnaW5YWS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLFFBQVEsQ0FBQTtBQUVsRCxNQUFNLENBQUMsT0FBTyxXQUFXLE1BQTRELEVBQUUsT0FBTyxFQUFFLE1BQU87SUFDckcsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM1QyxNQUFNLFlBQVksR0FBRyxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQTtJQUMxRCxNQUFNLE1BQU0sR0FBRyxZQUFZLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUE7SUFFcEQsTUFBTSxVQUFVLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFFaEYsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQTtBQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGFzR2V0UmVjdCB9IGZyb20gJ0BpbnRlcmFjdGpzL3R5cGVzL3R5cGVzJ1xuaW1wb3J0IHsgcmVjdFRvWFksIHJlc29sdmVSZWN0TGlrZSB9IGZyb20gJy4vcmVjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldDogSGFzR2V0UmVjdCAmIHsgb3B0aW9uczogSW50ZXJhY3QuUGVyQWN0aW9uRGVmYXVsdHMgfSwgZWxlbWVudCwgYWN0aW9uPykge1xuICBjb25zdCBhY3Rpb25PcHRpb25zID0gdGFyZ2V0Lm9wdGlvbnNbYWN0aW9uXVxuICBjb25zdCBhY3Rpb25PcmlnaW4gPSBhY3Rpb25PcHRpb25zICYmIGFjdGlvbk9wdGlvbnMub3JpZ2luXG4gIGNvbnN0IG9yaWdpbiA9IGFjdGlvbk9yaWdpbiB8fCB0YXJnZXQub3B0aW9ucy5vcmlnaW5cblxuICBjb25zdCBvcmlnaW5SZWN0ID0gcmVzb2x2ZVJlY3RMaWtlKG9yaWdpbiwgdGFyZ2V0LCBlbGVtZW50LCBbdGFyZ2V0ICYmIGVsZW1lbnRdKVxuXG4gIHJldHVybiByZWN0VG9YWShvcmlnaW5SZWN0KSB8fCB7IHg6IDAsIHk6IDAgfVxufVxuIl19