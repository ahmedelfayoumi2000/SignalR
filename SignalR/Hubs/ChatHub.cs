using Microsoft.AspNetCore.SignalR;
using SignalR.Models;
namespace SignalR.Hubs
{
    public class ChatHub : Hub
    {
        public async Task Send(string user, string meaasge)
        {
            await Clients.Others.SendAsync("ReceiveMessage", user, meaasge);

            //Database

            ChattingDbContext context = new ChattingDbContext();
            Message messageobj = new Message() { Text = meaasge, UserName = user, MessageDate = DateOnly.FromDateTime(DateTime.Now) };
            context.Messages.Add(messageobj);
            await context.SaveChangesAsync();
        }
    }
}
