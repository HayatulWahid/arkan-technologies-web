import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, organization, inquiryType, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Insert into Supabase DB (without .select() so RLS doesn't block the read-back)
    const { error: dbError } = await supabase
      .from('inquiries')
      .insert([
        {
          name,
          email,
          organization: organization || 'N/A',
          inquiry_type: inquiryType,
          message,
        },
      ]);

    if (dbError) {
      console.error('Supabase Insert Error:', dbError);
      return NextResponse.json(
        { error: `Database error: ${dbError.message}` },
        { status: 500 }
      );
    }

    // 2. Dispatch Email Notification to Group CEO Inbox
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Arkan Web Portal <onboarding@resend.dev>',
        to: ['hayatullahabdulwahab06@gmail.com'],
        subject: `[ARKAN INQUIRY] ${inquiryType} - ${name}`,
        html: `
          <div style="font-family: sans-serif; color: #0f172a; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
            <h2 style="color: #10b981; margin-bottom: 4px;">Arkan Technologies Limited</h2>
            <p style="font-size: 12px; color: #64748b; margin-top: 0;">New Institutional Portal Inquiry</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            
            <p><strong>Full Name:</strong> ${name}</p>
            <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
            <p><strong>Inquiry Focus:</strong> ${inquiryType}</p>
            
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; margin-top: 16px;">
              <p style="font-size: 12px; font-weight: bold; color: #475569; margin-top: 0;">MESSAGE BODY:</p>
              <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0 10px 0;" />
            <p style="font-size: 11px; color: #94a3b8;">Automated notification sent from arkantech.ng portal backend.</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Server error processing request' }, { status: 500 });
  }
}