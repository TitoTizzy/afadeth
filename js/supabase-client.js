/* AFADETH - Supabase client shared by public pages and admin. */
;(function () {
  const config = {
    url: 'https://yhdtvdgpjmefacrphxsi.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZHR2ZGdwam1lZmFjcnBoeHNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyNDYyMTYsImV4cCI6MjA5NzgyMjIxNn0.d4n8dO72uF_IWbAJ7Cx4rskHnmJ7UVr1KSdC_iAP5E4'
  };

  window.AFADETH_SUPABASE = config;

  if (!window.supabase) {
    console.error('[AFADETH] Supabase JS library is not loaded.');
    return;
  }

  if (!window.sb) {
    window.sb = window.supabase.createClient(config.url, config.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
  }
})();
