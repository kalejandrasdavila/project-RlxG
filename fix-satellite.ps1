# Corrección de window._satellite?.track
Get-ChildItem -Path "react" -Recurse -Filter "*.tsx" | Where-Object { $_.Name -like "*M*" } | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $updated = $false
    
    if ($content -match "window\._satellite\?\\.track\('contactCall'\)") {
        $content = $content -replace "window\._satellite\?\\.track\('contactCall'\)", "window._satellite?.track?.('contactCall')"
        $updated = $true
    }
    
    if ($content -match "window\._satellite\?\\.track\('whatsappContact'\)") {
        $content = $content -replace "window\._satellite\?\\.track\('whatsappContact'\)", "window._satellite?.track?.('whatsappContact')"
        $updated = $true
    }
    
    if ($content -match "window\._satellite\?\\.track\('findStore'\)") {
        $content = $content -replace "window\._satellite\?\\.track\('findStore'\)", "window._satellite?.track?.('findStore')"
        $updated = $true
    }
    
    if ($updated) {
        Set-Content -Path $_.FullName -Value $content
        Write-Host "Fixed: $($_.Name)"
    }
}