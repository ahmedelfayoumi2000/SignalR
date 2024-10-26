using System;
using System.Collections.Generic;

namespace SignalR.Models;

public partial class Message
{
    public string? Text { get; set; }

    public string? UserName { get; set; }

    public DateOnly? MessageDate { get; set; }

    public int Id { get; set; }
}
